import Input from "../components/Input";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleFormSubmit() {
    const { fullName, phone, email, message } = formData;
    window.alert(`${fullName} ${phone} ${email} ${message}`);
    setFormData({ fullName: "", phone: "", email: "", message: "" });
  }

  return (
    <div className="w-[500px] py-6 px-3 mx-auto mt-10 shadow-xl rounded-lg">
      <h1 className="text-3xl mb-3 text-center">Contact Us</h1>
      <form
        method="POST"
        className=" space-y-5 p-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          label="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          handleInputChange={handleInputChange}
          placeholder="Enter your name"
        />
        <Input
          label="Phone"
          name="phone"
          type="Number"
          value={formData.phone}
          handleInputChange={handleInputChange}
          placeholder="Enter your number"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          handleInputChange={handleInputChange}
          placeholder="Enter your email"
        />
        <div className="space-y-2">
          <label className="block">Message</label>
          <textarea
            className="w-full border border-gray-300 outline-none px-3"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
          ></textarea>
        </div>
        <button
          className="bg-blue-500 border-[2px] border-blue-500 px-6 py-[6px] rounded-full text-white hover:bg-transparent hover:text-blue-500 transition-all duration-200 ease-in-out"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
