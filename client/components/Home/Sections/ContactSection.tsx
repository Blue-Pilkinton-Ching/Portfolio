import { useEffect, useRef } from "react";
import { animate, stagger, useInView } from "framer-motion";

export function ContactSection() {
  const contact = useRef(null);
  const icons = useRef(null);
  const contactInView = useInView(contact);
  const iconsInView = useInView(icons);
  const textArea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (contactInView) {
      animate(
        ".animate-contact",
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: stagger(0.1), ease: "circOut" },
      );
    } else {
      animate(".animate-contact", { opacity: 0, y: 75 }, { duration: 0 });
    }
  }, [contactInView]);

  useEffect(() => {
    if (iconsInView) {
      animate(
        ".animate-contact-icons",
        { opacity: 1, y: 0 },
        {
          duration: 0.5,
          delay: stagger(0.1, { startDelay: 0.1 }),
          ease: "circOut",
        },
      );
    } else {
      animate(".animate-contact-icons", { opacity: 0, y: 75 }, { duration: 0 });
    }
  }, [iconsInView]);

  return (
    <section id="contact" className="flex min-h-dvh w-full flex-col ">
      <div className="my-auto h-full" ref={contact}>
        <h4 className="animate-contact text-center font-display text-3xl font-bold text-white sm:text-5xl">
          Contact Me
        </h4>
        <br />
        <p className="animate-contact mx-auto max-w-80 text-center font-display text-white">
          Want to get in contact? Use the options below!
        </p>
        <div className="mt-10 text-center">
          <div
            ref={icons}
            className="mx-auto flex max-w-[800px] flex-wrap justify-center gap-6 font-display text-white *:flex *:h-16 *:w-full *:max-w-[310px] *:rounded-2xl *:bg-green-600"
          >
            <div className="animate-contact-icons shadow-md">
              <a
                href="mailto:bluepilkintonching@gmail.com"
                className="flex w-full rounded-2xl bg-green-600 duration-300 hover:brightness-50"
              >
                <img
                  src="/images/email.svg"
                  alt="email"
                  className="mx-3.5 py-3.5"
                />
                <p className="my-auto">bluepilkintonching@gmail.com</p>
              </a>
            </div>
            <div className="animate-contact-icons flex w-full rounded-2xl bg-green-600 shadow-md">
              <img
                src="/images/phone.svg"
                alt="email"
                className="mx-3.5 py-3.5"
              />
              <p className="my-auto">(+64) 2040982760</p>
            </div>
            <div className="animate-contact-icons shadow-md">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/blues_profile/"
                className="flex w-full rounded-2xl bg-neutral-900 duration-300 hover:brightness-50"
              >
                <img
                  src="/images/instagram-icon.svg"
                  alt="phone"
                  className="mx-3.5 scale-110 py-3.5"
                />
                <p className="my-auto">Instagram</p>
              </a>
            </div>
            <div className="animate-contact-icons shadow-md">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/blue-pilkinton-ching/"
                className="flex w-full rounded-2xl bg-neutral-900 duration-300 hover:brightness-50"
              >
                <img
                  src="/images/linkedin-icon.svg"
                  alt="phone"
                  className="mx-3.5 py-3.5"
                />
                <p className="my-auto">Linkedin</p>
              </a>
            </div>
          </div>
          <br />
          <br />
          <h5 className="animate-contact-icons font-display text-3xl font-semibold text-white">
            Send an Email
          </h5>
          <br />

          <textarea
            placeholder="Email..."
            name="comment"
            className="animate-contact-icons mx-auto h-32 w-full max-w-[600px] rounded-xl border-4 border-green-600  bg-transparent p-3 font-display text-white outline-none"
            ref={textArea}
          />
          <br />
          <br />

          <div className="animate-contact-icons">
            <input
              type="button"
              value="Submit"
              className="h-10 w-40 cursor-pointer rounded-3xl bg-green-600 text-white duration-300 hover:brightness-50"
              onClick={submit}
            />
          </div>
        </div>
      </div>
    </section>
  );

  function submit() {
    console.log("Submitting Form");

    const comment = textArea.current?.value;

    if (comment) {
      const mailtoLink = `mailto:bluepilkinonching@gmail.com?subject=Enquiry&body=${encodeURIComponent(
        comment,
      )}`;

      window.location.replace(mailtoLink);
    }
  }
}
