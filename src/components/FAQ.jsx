import { useState } from "react";

const faqs = [
  {
    question: "Is SyncdIn AI free to use?",
    answer:
      "Yes. SyncdIn AI provides a free plan with basic resume and career features. You can upgrade whenever you need more advanced features.",
  },
  {
    question: "Which resume formats are supported?",
    answer:
      "You can upload your resume in PDF or DOCX format for analysis and improvement.",
  },
  {
    question: "Can AI really help with interviews?",
    answer:
      "Yes. SyncdIn AI can help you practice HR and technical interview questions, improve your answers, and prepare with personalized suggestions.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We take your privacy seriously. Your resume and personal information should be handled securely and only used to provide the requested career services.",
  },
  {
    question: "Can I build an ATS-friendly resume?",
    answer:
      "Yes. The Resume Builder helps you create a clean, professional and ATS-friendly resume.",
  },
  {
    question: "Can I practice coding questions?",
    answer:
      "Yes. SyncdIn AI includes coding practice to help you improve your programming and technical interview skills.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold mb-3">
            FAQ
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-4">
            Everything you need to know about SyncdIn AI.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#111827] border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500 transition"
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left px-6 py-6"
                >
                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  <span className="text-blue-500 text-2xl ml-4">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-7 border-t border-gray-700 pt-5">
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}