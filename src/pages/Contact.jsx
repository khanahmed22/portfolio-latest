import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "sonner";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append(
        "access_key",
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      );

      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Message Sent!");

        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Message Not Sent!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="overflow-hidden rounded-3xl text-center items-center p-3 bg-gradient-to-r from-violet-800 to-blue-600 text-white h-screen flex flex-col justify-center">
        <h1
          data-aos="fade-up"
          className="text-2xl text-purple-200 w-fit font-bold mb-5 mt-7 border-b-4 border-purple-400"
        >
          Contact Me
        </h1>

        <div data-aos="flip-up" className="flex flex-col items-center">
          <form onSubmit={sendEmail} className="flex flex-col">
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              className="w-72 rounded p-2 mb-5 text-black font-medium"
              required
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="w-72 rounded p-2 mb-5 text-black font-medium"
              required
            />

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className="w-72 rounded p-2 h-32 text-black font-medium"
              required
            />

            <div className="flex items-center justify-center">
              <button
                disabled={loading}
                type="submit"
                className="w-fit mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-purple-300 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-black hover:text-white">
                  {loading ? "Sending..." : "Send"}
                </span>
              </button>
            </div>
          </form>
        </div>

        
        <div
  data-aos="slide-up"
  className="mt-5 flex flex-col bg-violet-600 p-3 rounded-xl shadow-xl"
>
  <h1 className="font-bold mb-5">
    or Let&apos;s Connect on these Apps
  </h1>

  <div className="flex items-center justify-center space-x-5">
    <a
      href="https://twitter.com/khanahmed265"
      target="_blank"
      rel="noreferrer"
      aria-label="Link to My Twitter"
    >
      <FaXTwitter className="text-5xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-purple-900 duration-300" />
    </a>

    <a
      href="https://www.linkedin.com/in/ahmed-khan-109079275"
      target="_blank"
      rel="noreferrer"
      aria-label="Link to My LinkedIn"
    >
      <FaLinkedin className="text-5xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-purple-900 duration-300" />
    </a>

    <a
      href="https://github.com/khanahmed22"
      target="_blank"
      rel="noreferrer"
      aria-label="Link to My Github"
    >
      <FaGithub className="text-5xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-purple-900 duration-300" />
    </a>

    <a
      href="mailto:ahmed.khans.mk@gmail.com"
      aria-label="Email Me"
    >
      <FaEnvelope className="text-5xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-purple-900 duration-300" />
    </a>
  </div>
</div>
      </div>
    </>
  );
}

export default Contact;