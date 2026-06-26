// ============================================================
// CONTACTFORM.JSX — Simple Contact Form (Day 3)
// ============================================================
// A standalone contact form component with form validation.
// This is a simpler alternative to the ContactSection's
// inline form — used for learning form basics.
//
// WHAT YOU WILL LEARN:
// - useState for managing form data (object state)
// - Controlled inputs (value + onChange pattern)
// - Form submission with e.preventDefault()
// - Conditional rendering for validation messages
// - Dynamic className for error styling
// - Async functions and try/catch/finally
//
// CONCEPTS COVERED:
// - Object destructuring in event handlers
// - Spread operator for updating state: { ...prev, [name]: value }
// - Ternary expressions in className
// - Conditional rendering with && operator
//
// ============================================================

// STEP 1: Import useState from "react"

/* --- YOUR IMPORTS GO HERE --- */


// STEP 2: Create and export the ContactForm component
// export default function ContactForm() { ... }
//
// STEP 3: State variables (4 total)
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [formData, setFormData] = useState({
//     firstName: "", lastName: "", email: "", message: ""
//   });
//
// STEP 4: Event handlers
//
//   handleChange — updates formData when user types
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     };
//     DISCUSSION: What does { ...prev, [name]: value } do?
//     It creates a copy of the previous state and updates
//     only the field that changed (computed property name).
//
//   handleSubmit — validates and "sends" the form
//     - Call e.preventDefault() to stop page reload
//     - Set submitted to true (shows validation errors)
//     - Check if all fields are filled
//     - Set loading to true, simulate sending, show success/error
//
//   sendEmail — simulates an API call
//     const sendEmail = async (data) => {
//       console.log("Email would be sent with:", data);
//       return new Promise((resolve) => setTimeout(resolve, 1000));
//     };
//
// STEP 5: Build the JSX
//   <form onSubmit={handleSubmit} className="...">
//     - <h2> title
//     - Message display (success or error)
//     - Input fields: firstName, lastName (2-column grid)
//     - Input field: email (full width, col-span-2)
//     - Textarea: message (full width, col-span-2)
//     - Submit button (disabled when loading)
//
//   Each input should be a CONTROLLED INPUT:
//     <input
//       type="text"
//       name="firstName"
//       value={formData.firstName}
//       onChange={handleChange}
//       className={`... ${submitted && !formData.firstName ? "border-red" : "border-normal"}`}
//     />
//
//   Show validation error below each input:
//     {submitted && !formData.firstName && (
//       <p className="text-red-700 text-sm">First name is required</p>
//     )}

/* --- YOUR COMPONENT CODE GOES HERE --- */
import { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";

const presets = {
    fadeUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    fadeDown: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
    fadeLeft: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    fadeRight: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
    fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    scaleUp: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
    slideUp: { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } }
};

export default function ScrollReveal({
    children,
    animation = "fadeUp",
    delay = 0,
    duration = 0.6,
    once = true,
    amount = 0.2,
    className,
    as = "div",
    ...props
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });
    const preset = presets[animation] || presets.fadeUp;

    // Memoize so a new motion component type isn't created on every render —
    // otherwise React remounts the subtree and restarts the animation (flicker).
    const Component = useMemo(() => motion.create(as), [as]);

    return (
        <Component
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={preset}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={className}
            {...props}>
            {children}
        </Component>
    );
}

export function StaggerContainer({
    children,
    staggerDelay = 0.12,
    className,
    once = true,
    amount = 0.15,
    ...props
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: staggerDelay } }
            }}
            className={className}
            {...props}>
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    animation = "fadeUp",
    duration = 0.5,
    className,
    ...props
}) {
    const preset = presets[animation] || presets.fadeUp;

    return (
        <motion.div
            variants={preset}
            transition={{ duration, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
            {...props}>
            {children}
        </motion.div>
    );
}