"use client";
import React, { useState } from "react";

const Accordion = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="rounded-t-lg">
      <h2 className="mb-0" id="headingOne" onClick={() => setShow(!show)}>
        <button
          className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
          type="button"
        >
          Accordion Item
          <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
            +
          </span>
        </button>
      </h2>
      {show && (
        <div className="px-5 py-4">
        It is
        shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control the
        overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just
        about any HTML can go within the <code>.accordion-body</code>,
        though the transition does limit overflow.
      </div>
      )}
    </div>
  );
};

export default Accordion;
