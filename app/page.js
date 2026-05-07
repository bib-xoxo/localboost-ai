export default function Home() {
  const features = [
    {
      title: "Online Booking",
      desc: "Customers can book appointments instantly from your website.",
    },
    {
      title: "WhatsApp Integration",
      desc: "Let customers contact businesses directly through WhatsApp.",
    },
    {
      title: "Modern Design",
      desc: "Professional websites that make local businesses look premium.",
    },
    {
      title: "Mobile Friendly",
      desc: "Works perfectly on phones, tablets, and desktops.",
    },
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "₹999/mo",
      items: ["Modern Website", "Mobile Friendly", "Contact Form"],
    },
    {
      plan: "Growth",
      price: "₹2,999/mo",
      items: ["Booking System", "WhatsApp Integration", "Priority Support"],
    },
    {
      plan: "Business",
      price: "₹5,999/mo",
      items: ["Custom Design", "Automation", "Advanced Features"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block border border-zinc-700 rounded-full px-4 py-2 text-sm text-zinc-300 mb-6">
              AI Websites for Local Businesses
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              LocalBoost AI
            </h1>

            <p className="text-zinc-400 text-lg mt-6 leading-relaxed max-w-xl">
              We help salons, gyms, cafes, tutors, and local businesses get
              more customers with modern websites and smart automation.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
                Get Started
              </button>

              <button className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition">
                View Demo
              </button>
            </div>

            <div className="mt-10 flex gap-6 flex-wrap text-sm text-zinc-500">
              <div>✔ Easy to Use</div>
              <div>✔ Fast Setup</div>
              <div>✔ Monthly Revenue</div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <div className="bg-black rounded-2xl p-6 border border-zinc-700">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="text-2xl font-bold">Glow Salon</div>
                  <div className="text-zinc-500">Mumbai</div>
                </div>

                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  Online
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-zinc-900 p-4 rounded-2xl">
                  <div className="text-zinc-400 text-sm">
                    Bookings This Week
                  </div>
                  <div className="text-3xl font-bold mt-2">128</div>
                </div>

                <div className="bg-zinc-900 p-4 rounded-2xl">
                  <div className="text-zinc-400 text-sm">
                    WhatsApp Leads
                  </div>
                  <div className="text-3xl font-bold mt-2">342</div>
                </div>

                <div className="bg-zinc-900 p-4 rounded-2xl">
                  <div className="text-zinc-400 text-sm">
                    Monthly Revenue
                  </div>
                  <div className="text-3xl font-bold mt-2">₹48,200</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-950 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Why Businesses Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="border border-zinc-800 bg-black rounded-3xl p-6"
              >
                <div className="text-xl font-bold mb-3">
                  {feature.title}
                </div>

                <p className="text-zinc-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black">Pricing</h2>

          <p className="text-zinc-400 mt-4">
            Simple pricing for growing businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((plan, i) => (
            <div
              key={i}
              className="border border-zinc-800 bg-zinc-950 rounded-3xl p-8"
            >
              <div className="text-2xl font-bold">{plan.plan}</div>

              <div className="text-5xl font-black mt-5">
                {plan.price}
              </div>

              <div className="space-y-4 mt-8">
                {plan.items.map((item, idx) => (
                  <div key={idx} className="text-zinc-300">
                    ✔ {item}
                  </div>
                ))}
              </div>

              <button className="w-full mt-10 bg-white text-black py-3 rounded-2xl font-semibold">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 rounded-[40px] p-12 text-center">
          <h2 className="text-5xl font-black leading-tight">
            Build Once. Earn Monthly.
          </h2>

          <p className="text-zinc-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Help local businesses get more customers with beautiful websites,
            bookings, and automation.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition">
            Launch Your Business
          </button>
        </div>
      </section>
    </main>
  );
}