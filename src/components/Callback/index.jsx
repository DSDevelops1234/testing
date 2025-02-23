import React, { useState } from "react";
import Statisiticsbg from "../../assets/images/Statistics/statistics-bg.png";

const Callback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Restrict invalid input while typing
  const handleChange = (e) => {
    const { id, value } = e.target;

    let updatedValue = value;

    if (id === "name") {
      updatedValue = value.replace(/[^A-Za-z\s]/g, ""); // Allow only alphabets & spaces
    }

    if (id === "mobile") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10); // Allow only numbers, max 10 digits
    }

    setFormData({ ...formData, [id]: updatedValue });
  };

  // Validation on submit
  const validate = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) tempErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      tempErrors.email = "Invalid email format.";
    if (!formData.mobile.trim())
      tempErrors.mobile = "Mobile number is required.";
    if (formData.mobile.length !== 10)
      tempErrors.mobile = "Mobile number must be 10 digits.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Handle form submission logic here
    }
  };

  return (
    <div className="relative w-full flex flex-col justify-center items-center mb-7">
      <div
        className="w-full h-80 bg-contain bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(53, 94, 252, .95), rgba(53, 94, 252, .95)), url(${Statisiticsbg})`,
        }}
      ></div>

      <div className="container mx-auto -mt-56">
        <div className="max-w-3xl mx-auto bg-white border-gray-200 border rounded-lg p-6 shadow-lg w-[90vw]">
          <div className="text-center mb-6">
            <p className="inline-block border rounded text-blue-600 open-sans-medium text-base py-1 px-3">
              Get In Touch
            </p>
            <h1 className="jost-bold text-5xl sm:3xl font-bold mt-3">
              Request A Call-Back
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-around sm:grid sm:grid-cols-2 gap-4 open-sans-regular text-base">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  className="peer block w-full rounded border border-gray-200 focus:outline-none px-3 pt-5 pb-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Your Name
                </label>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="peer block w-full rounded border border-gray-200 focus:outline-none px-3 pt-5 pb-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Your Email
                </label>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Mobile Field */}
              <div className="relative">
                <input
                  type="text"
                  id="mobile"
                  placeholder=" "
                  value={formData.mobile}
                  onChange={handleChange}
                  className="peer block w-full rounded border border-gray-200 focus:outline-none px-3 pt-5 pb-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <label
                  htmlFor="mobile"
                  className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Your Mobile
                </label>
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Callback;
