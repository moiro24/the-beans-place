import { useMemo, useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import Button from "./ui/Button";

const coffeeOptions = [
  {
    id: "ethiopian-harrar",
    name: "Ethiopian Harrar",
    roast: "Medium",
    origin: "Ethiopia",
    description: "Berry-forward and rich with dark chocolate notes.",
    price: 18.99
  },
  {
    id: "colombian-supremo",
    name: "Colombian Supremo",
    roast: "Medium-Dark",
    origin: "Colombia",
    description: "Smooth, nutty, and balanced for everyday brewing.",
    price: 16.99
  },
  {
    id: "kenya-aa",
    name: "Kenya AA",
    roast: "Light",
    origin: "Kenya",
    description: "Bright citrus flavors with a floral finish.",
    price: 21.99
  },
  {
    id: "panama-geisha",
    name: "Panama Geisha",
    roast: "Light",
    origin: "Panama",
    description: "Elegant florals with jasmine and tropical fruit.",
    price: 34.99
  },
  {
    id: "kona",
    name: "Kona",
    roast: "Medium",
    origin: "Hawaii",
    description: "Mild acidity with brown sugar and macadamia notes.",
    price: 29.99
  },
  {
    id: "guatemala-antigua",
    name: "Guatemala Antigua",
    roast: "Dark",
    origin: "Guatemala",
    description: "Deep cocoa and spice with a smoky sweetness.",
    price: 17.99
  },
  {
    id: "sulawesi-toraja",
    name: "Sulawesi Toraja",
    roast: "Medium",
    origin: "Indonesia",
    description: "Earthy spice and a syrupy body with rich sweetness.",
    price: 19.49
  },
  {
    id: "peru-finca",
    name: "Peru Finca",
    roast: "Medium",
    origin: "Peru",
    description: "Caramel, citrus, and a smooth lingering finish.",
    price: 15.99
  },
  {
    id: "brazil-santos",
    name: "Brazil Santos",
    roast: "Medium-Dark",
    origin: "Brazil",
    description: "Chocolatey, mellow, and perfect for milk-based drinks.",
    price: 14.99
  },
  {
    id: "mexico-altura",
    name: "Mexico Altura",
    roast: "Medium",
    origin: "Mexico",
    description: "Toffee sweetness with a gentle cocoa warmth.",
    price: 16.49
  },
  {
    id: "sumatra-mandheling",
    name: "Sumatra Mandheling",
    roast: "Dark",
    origin: "Indonesia",
    description: "Bold, herbal depth with a rich full body.",
    price: 20.49
  },
  {
    id: "yirgacheffe",
    name: "Yirgacheffe",
    roast: "Light",
    origin: "Ethiopia",
    description: "Floral and citrusy with a sparkling finish.",
    price: 22.49
  },
  {
    id: "costa-rica-tarrazu",
    name: "Costa Rica Tarrazu",
    roast: "Medium",
    origin: "Costa Rica",
    description: "Balanced acidity with caramel and stone fruit.",
    price: 18.49
  },
  {
    id: "guatemalan-huehuetenango",
    name: "Guatemalan Huehuetenango",
    roast: "Medium-Dark",
    origin: "Guatemala",
    description: "Deep cocoa and spice with a velvety body.",
    price: 19.99
  },
  {
    id: "tanzania-kilimanjaro",
    name: "Tanzania Kilimanjaro",
    roast: "Medium",
    origin: "Tanzania",
    description: "Blackberry sweetness with a bright tangy lift.",
    price: 20.99
  },
  {
    id: "nicaragua-selva",
    name: "Nicaragua Selva",
    roast: "Medium",
    origin: "Nicaragua",
    description: "Honeyed sweetness and toasted walnut complexity.",
    price: 17.49
  },
  {
    id: "jamaican-blue-mountain",
    name: "Jamaican Blue Mountain",
    roast: "Medium",
    origin: "Jamaica",
    description: "Smooth and delicately sweet with a luxurious finish.",
    price: 39.99
  },
  {
    id: "rwanda-bukonya",
    name: "Rwanda Bukonya",
    roast: "Light",
    origin: "Rwanda",
    description: "Berry sparkle with a clean, crisp structure.",
    price: 21.49
  }
];

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
}

export default function OrderPage({ onBack, selectedCoffeeId, onOpenSubscriptions }) {
  const [cartItems, setCartItems] = useState(() =>
    selectedCoffeeId ? [{ id: selectedCoffeeId, quantity: 1 }] : []
  );
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: ""
  });

  const items = useMemo(
    () =>
      cartItems
        .map((item) => {
          const coffee = coffeeOptions.find((entry) => entry.id === item.id);
          return coffee ? { ...coffee, quantity: item.quantity } : null;
        })
        .filter(Boolean),
    [cartItems]
  );

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 6.5 : 0;
  const total = subtotal + shipping;

  const addToCart = (coffeeId) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === coffeeId);
      if (existing) {
        return current.map((item) =>
          item.id === coffeeId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { id: coffeeId, quantity: 1 }];
    });
    setOrderPlaced(false);
  };

  const updateQuantity = (coffeeId, delta) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === coffeeId ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (coffeeId) => {
    setCartItems((current) => current.filter((item) => item.id !== coffeeId));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.address || items.length === 0) {
      return;
    }
    setOrderPlaced(true);
  };

  return (
    <main className="min-h-screen bg-[#f5e6d3] px-3 py-8 sm:px-4 sm:py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl rounded-4xl border border-stone-200 bg-[#faf4ed] p-4 shadow-xl sm:p-6 md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b07318]">
              Order ahead
            </p>
            <h1 className="mt-2 text-3xl font-bold text-[#1e1714] sm:text-4xl md:text-5xl">
              Build your coffee order
            </h1>
            <p className="mt-3 max-w-2xl text-base text-[#6b584c] sm:text-lg">
              Choose your favorite beans, adjust your cart, and place your delivery order in
              minutes.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
              onClick={onOpenSubscriptions}>
              See subscriptions
            </Button>
            <Button variant="accent" size="md" className="w-full sm:w-auto" onClick={onBack}>
              <ArrowLeft size={16} /> Back home
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coffeeOptions.map((coffee) => (
              <div
                key={coffee.id}
                className="rounded-3xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold text-[#1e1714]">{coffee.name}</h2>
                    <span className="rounded-full bg-[#f0b955] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4a372c]">
                      {coffee.roast}
                    </span>
                  </div>
                  <p className="text-sm text-[#6b584c]">
                    {coffee.origin} • {coffee.description}
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-lg font-semibold text-[#1e1714]">
                      {formatCurrency(coffee.price)}
                    </p>
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full sm:w-auto"
                      onClick={() => addToCart(coffee.id)}>
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <aside className="rounded-[28px] border border-stone-200 bg-[#1e1714] p-4 text-[#f5e6d3] shadow-lg sm:p-6">
            <div className="flex items-center gap-2">
              <ShoppingCart size={18} />
              <h2 className="text-xl font-semibold">Shopping cart</h2>
            </div>

            <div className="mt-6 space-y-3">
              {items.length === 0 ? (
                <p className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-[#f5e6d3]/80">
                  Your cart is empty. Add a roast to begin checkout.
                </p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-[#f5e6d3]/80">
                          {formatCurrency(item.price)} each
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="rounded-full p-1.5 text-[#f5e6d3] transition hover:bg-white/10">
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center rounded-full border border-white/15 bg-[#2e231c] p-1">
                        <button
                          type="button"
                          className="rounded-full p-1.5"
                          onClick={() => updateQuantity(item.id, -1)}>
                          <Minus size={14} />
                        </button>
                        <span className="min-w-6 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="rounded-full p-1.5"
                          onClick={() => updateQuantity(item.id, 1)}>
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-semibold">{formatCurrency(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 text-sm text-[#f5e6d3]/80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="mt-2 flex justify-between">
                <span>Shipping</span>
                <span>{formatCurrency(shipping)}</span>
              </div>
              <div className="mt-4 flex justify-between border-t border-white/10 pt-3 text-base font-semibold text-[#f5e6d3]">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>

            <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-[#f5e6d3]/60"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email address"
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-[#f5e6d3]/60"
                required
              />
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Delivery address"
                className="min-h-24 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-[#f5e6d3]/60"
                required
              />
              <Button type="submit" variant="accent" size="md" className="w-full">
                Place order
              </Button>
            </form>

            {orderPlaced && (
              <div className="mt-4 rounded-2xl border border-[#d4922a]/40 bg-[#d4922a]/15 p-3 text-sm text-[#f5e6d3]">
                Your order has been placed successfully. We’ll roast it and ship it soon.
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
