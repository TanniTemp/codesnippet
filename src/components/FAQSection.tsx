import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is this tool used for?",
    answer:
      "This tool helps you manage, organize, and retrieve your code snippets effortlessly, eliminating the need to search through Slack, Notion, or Google Docs.",
  },
  {
    question: "Does it support multiple programming languages?",
    answer:
      "Yes! Our tool supports various languages including JavaScript, TypeScript, Python, Java, C++, Rust, Go, and more.",
  },
  {
    question: "Can I collaborate with my team?",
    answer:
      "Absolutely! You can share your snippets with team members, making collaboration seamless and efficient.",
  },
  {
    question: "Is my code secure?",
    answer:
      "Yes! We prioritize security with encrypted storage and restricted access to ensure your code remains safe.",
  },
  {
    question: "Can I access my snippets from different devices?",
    answer:
      "Yes, your snippets are stored in the cloud, allowing you to access them from anywhere.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg p-4 transition-all duration-300"
          >
            <button
              className="flex justify-between items-center w-full text-lg font-medium"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <p className="mt-3 opacity-75">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
