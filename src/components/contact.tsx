import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-slate-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:charlieroeder@gmail.com">
          charlieroeder@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col" action="">
        <input
          className="h-14 px-4 rounded-lg border border-black/10"
          type="email"
          name=""
          id=""
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Your message"
        ></textarea>
        <button
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-slate-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-slate-950"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </section>
  );
}
