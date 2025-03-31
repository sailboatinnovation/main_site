import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lv9t7zs",    // Replace with your EmailJS Service ID
        "template_brr8atp",   // Replace with your EmailJS Template ID
        formData,
        "oA2Eha2Xm_fggss4a"     // Replace with your EmailJS Public Key
      )
      .then(() => {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Failed to send email. Try again later."));
  };

  return (
    <div className="max-w-xl mx-auto p-4 border rounded-lg shadow-lg text-black">
      <form onSubmit={handleSubmit} className="space-y-8">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"/>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"/>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"/>
        <button
          type="submit"
          className="w-full p-2 text-white rounded bg-[#002a5e] ">
          Send
        </button>
      </form>
      {status && <p className="mt-2 text-center text-sm">{status}</p>}
    </div>
  );
};

export default ContactForm;
