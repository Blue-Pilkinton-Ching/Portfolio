import { useEffect, useRef } from "react";
import { animate, stagger, useInView } from "framer-motion";

export function ContactSection() {
  const contact = useRef(null);
  const contactInView = useInView(contact);

  useEffect(() => {
    if (contactInView) {
      animate(
        ".animate-contact",
        { opacity: 1, y: 0 },
        { duration: 0.3, delay: stagger(0.1), ease: "circOut" },
      );
    } else {
      animate(".animate-contact", { opacity: 0, y: 75 }, {});
    }
  }, [contactInView]);

  return (
    <section
      id="contact"
      className="flex min-h-dvh w-full flex-col pb-64 pt-48"
    >
      <div className="my-auto h-full" ref={contact}>
        <h4 className="animate-contact text-center font-display text-3xl font-bold text-white sm:text-5xl">
          Contact Me
        </h4>
        <br />
        <p className="animate-contact mx-auto max-w-80 text-center font-display text-white">
          Want to get in contact? Get touch with me using either options below!
        </p>
        <div className="mt-10 text-center">
          <div className=" flex flex-wrap justify-center gap-6 font-display text-white *:flex *:h-16 *:w-full *:max-w-[310px] *:rounded-2xl *:bg-green-600">
            <a
              className="animate-contact duration-300 hover:brightness-50"
              href="mailto:bluepilkintonching@gmail.com"
            >
              <img
                src="images/email.svg"
                alt="email"
                className="mx-3.5 py-3.5"
              />
              <p className="my-auto">bluepilkintonching@gmail.com</p>
            </a>
            <div className="animate-contact">
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
