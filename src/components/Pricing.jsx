const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/Forever",
    description: "Perfect for getting started.",
    features: [
      "3 Resume Builds",
      "ATS Score Check",
      "Resume Scanner",
      "Basic AI Suggestions",
      "Email Support",
    ],
    button: "Start Free",
  },
  {
    name: "Pro",
    price: "₹299",
    period: "/Month",
    description: "For serious job seekers.",
    popular: true,
    features: [
      "Unlimited Resume",
      "AI Resume Builder",
      "Cover Letter Generator",
      "AI Interview Practice",
      "Coding Practice",
      "Job Recommendations",
    ],
    button: "Get Pro",
  },
  {
    name: "Premium",
    price: "₹599",
    period: "/Month",
    description: "Everything you need to grow.",
    features: [
      "Everything in Pro",
      "Unlimited AI",
      "Priority Support",
      "Career Mentor",
      "Resume Review",
      "Early Access Features",
    ],
    button: "Go Premium",
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold mb-3">
            PRICING
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Choose Your Plan
          </h2>

          <p className="text-gray-400 mt-4">
            Simple plans designed for every stage of your career.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#111827] rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-blue-500 shadow-2xl shadow-blue-500/10"
                  : "border-gray-700 hover:border-blue-500"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-5 right-5 bg-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <p className="text-gray-400 mt-2">
                {plan.description}
              </p>

              {/* Price */}
              <div className="flex items-end gap-2 mt-8">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                <span className="text-gray-400 mb-2">
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <div className="mt-8 space-y-5">

                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-400 text-xl">
                      ✓
                    </span>

                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

              {/* Button */}
              <button
                type="button"
                className={`w-full mt-10 py-4 rounded-xl font-semibold text-lg transition ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "border border-gray-600 hover:border-blue-500 hover:bg-blue-500/10"
                }`}
              >
                {plan.button}
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}