import { useState } from "react";
import { FAQs } from "../constants";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="mx-20 sm:mx-28 md:mx-60 lg:mx-80 pt-6 mb-20">
      <h1 className="text-center font-serif text-highlight text-xl ss:text-2xl sm:text-3xl font-semibold mb-12">
        Frequently Asked Questions
      </h1>
      {FAQs.map((item, index) => (
        <div key={item.id} className="mb-6">
          <button
            className="text-lg ss:text-xl font-bold text-tertiary hover:text-highlight w-full text-left focus:outline-none flex justify-between"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.q}</span>
            <span>⌄</span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-300 ${
              activeIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="text-sm font-light mt-2">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
