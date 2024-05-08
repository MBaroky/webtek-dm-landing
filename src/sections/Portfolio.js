import TabsWrapper from "../components/TabsWrapper";
import * as React from "react";

function Portfolio() {
  const { PUBLIC_URL } = process.env;
  return (
    <section
      id='portfolio'
      className='-mb-5 relative z-[10] min-h-[450px] flex flex-col md:p-24 tracking-tighter max-md:text-4xl rounded-br-3xl rounded-bl-3xl -mb-3 z-20'
      style={{
        backgroundImage: `url("${PUBLIC_URL}/img/works-bg.png")`,
        backgroundColor: "white",
      }}>
      <h2 className=' font-bold text-6xl w-full leading-[1.2em] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-[1em] max-md:text-4xl'>
        Real-world examples of how we have helped companies achieve
        their
        <span className='font-outline-1' style={{ color: "#F1F1F1" }}>
          &nbsp;marketing objectives.
        </span>
      </h2>
      <TabsWrapper />
    </section>
  );
}

export default Portfolio;
