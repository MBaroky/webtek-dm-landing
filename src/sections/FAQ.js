import * as React from "react";
import arrowIcon from "../assets/right-arrow.svg";

function FAQItem({ question, answer }) {
  return (
    <div className='flex flex-col w-full '>
      <h3 className='mt-5 text-xl max-md:max-w-full'>{question}</h3>
      <div className='mt-3.5 text-sm max-md:max-w-full'>{answer}</div>
      <div className='flex gap-2 mt-4'>
        <button className='flex gap-2 mt-4 items-center  text-base font-medium'>
          <div>Read More</div>
          <img
            src={arrowIcon}
            alt='Arrow pointing right'
            className='shrink-0 w-5 aspect-square'
          />
        </button>
      </div>
      <hr className='shrink-0 self-stretch mt-3.5 h-px border border-solid bg-neutral-900 border-neutral-900 max-md:max-w-full' />
    </div>
  );
}

export default function FAQ() {
  const faqData = [
    {
      question: "What is mobile app development?",
      answer:
        "Creating software applications for use on mobile devices.",
    },
    {
      question: "What makes a good mobile app?",
      answer:
        "User-friendly interface, fast performance, and useful features.",
    },
    {
      question:
        "Why do you need a mobile app for your e-commerce business?",
      answer:
        "Enhances customer experience, increases accessibility, and boosts sales potential.",
    },
    {
      question:
        "How long does it take to create a fully functioning mobile app?",
      answer:
        "Varies based on complexity, typically several weeks to several months.",
    },
  ];

  return (
    <section className='rounded-br-3xl rounded-bl-3xl -mb-5   relative z-[2] flex justify-center items-center px-16 py-16 text-base font-medium bg-gray-200 rounded-none text-neutral-900 max-md:px-5'>
      <div className='flex flex-col items-start w-full max-w-[1200px] max-md:max-w-full'>
        <div className='shrink-0 bg-violet-700 h-[3px] w-[45px]' />
        <h2 className='mt-4'>FAQs</h2>
        <p className='mt-4 text-sm w-[371px]'>
          Our dynamic digital marketing agency has empowered a wide
          array of businesses and organizations to meet their
          advertising goals. Drawing from rich experience across
          various industries, we possess the insights and skills to
          unlock your true potential.
          <br />
        </p>
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}
