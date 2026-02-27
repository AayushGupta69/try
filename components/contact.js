"use client";

import Image from "next/image";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import TitleHeader from "./title-header";

const Message = ({ title, message }) => (
  <div>
    <strong>{title}</strong>
    <div>{message}</div>
  </div>
);

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_APP_EMAILJS_SERVICE_ID,
        process.env.NEXT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_APP_EMAILJS_PUBLIC_KEY,
      );

      toast.success(
        <Message
          title="Message Sent ✅"
          message="Thanks for reaching out! I’ll get back to you soon."
        />,
      );
      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      toast.error(
        <Message
          title="Something went wrong ❌"
          message={
            <>
              Oops! Couldn’t send your message. Please try again later.
              <br />
              Or email me directly at{" "}
              <a
                href="mailto:aayushguptaworks@gmail.com"
                className="text-blue-500 underline"
              >
                aayushguptaworks@gmail.com
              </a>
            </>
          }
        />,
      );
      console.error("EmailJS Error:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="h-full w-full px-5 md:px-10">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <Image
                        src="/arrow-down.svg"
                        alt="arrow"
                        width={18}
                        height={18}
                      />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="min-h-96 xl:col-span-7">
            <div className="h-full w-full overflow-hidden rounded-3xl bg-[#cd7c2e] hover:cursor-grab"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
