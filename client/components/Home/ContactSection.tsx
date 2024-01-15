import { useEffect, useRef } from "react";
import { HomeProject } from "./HomeProject";
import { animate, stagger, useInView } from "framer-motion";

export function ContactSection() {
  const contact = useRef(null);
  const contactInView = useInView(contact);

  useEffect(() => {
    // if (contactInView) {
    // } else {
    // }
  }, [contactInView]);

  return (
    <section id="contact" className="mb-60 mt-40 flex w-full flex-col">
      <div className="my-auto h-full">
        <h4 className="text-center font-display text-3xl font-bold text-white sm:text-5xl">
          Contact Me
        </h4>
        <br />
        <p className="mx-auto max-w-80 text-center font-display text-white">
          Want to get in contact? Get touch with me using either options below!
        </p>
        <div className="mt-10 text-center">
          <div className="start flex flex-wrap justify-center gap-6 font-display text-white *:flex *:h-16 *:w-full *:max-w-[310px] *:rounded-2xl *:bg-green-600">
            <a href="mailto:bluepilkintonching@gmail.com">
              <img
                src="images/email.svg"
                alt="email"
                className="mx-3.5 py-3.5"
              />
              <p className="my-auto">bluepilkintonching@gmail.com</p>
            </a>
            <div>
              <img
                src="images/phone.svg"
                alt="phone"
                className="mx-3.5 py-3.5"
              />
              <p className="my-auto">(+64) 2040982760</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
