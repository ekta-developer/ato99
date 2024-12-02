import React, { useState } from "react";
import "../../assests/CSS/css/bootstrap.min.css";
import contactImage from "../../assests/IMAGES/img/bn.jpg"; // Replace with your image path

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add form submission logic here (e.g., API call or email service)
  };

  return (
    <section id="contact">
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="display-5 mb-4 text-center">Contact Us</h1>
          <div className="row g-5 align-items-center">
            {/* Form Section */}
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-brand py-2 px-3"
                >
                  Submit
                </button>
              </form>
            </div>
            {/* Image Section */}
            <div className="col-lg-6 text-center">
              <img
                src={contactImage}
                alt="Contact Us"
                className="img-fluid rounded"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
