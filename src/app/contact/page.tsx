'use client'
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Thông tin liên hệ:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Hiển thị thông báo trong 3 giây
  };

  return (
    <div className="container py-5">
  <h2 className="text-center mb-4">Contact Us</h2>

  {submitted && (
    <div className="alert alert-success text-center" role="alert">
      Thank you for your message! We will get back to you as soon as possible.
    </div>
  )}

  <div className="row">
    {/* Contact Form */}
    <div className="col-md-6">
      <h4>Send a Message</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          />
        </div>
        <button type="submit" className="btn btn-dark text-white w-100">
          Send Message
        </button>
      </form>
    </div>

    {/* Contact Information */}
    <div className="col-md-6">
      <h4>Contact Information</h4>
      <p><strong>📍 Address:</strong> 123 ABC Street, District 1, Ho Chi Minh City</p>
      <p><strong>📞 Phone:</strong> 0123 456 789</p>
      <p><strong>✉ Email:</strong> Nike@company.com</p>
      {/* Embedded Google Map */}
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5026899417247!2d106.70098797481647!3d10.773374759236803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fb622df263f%3A0x1f9d53f383f9b9!2zU29mdGVrIC0gRHUgTcOjIG7huq10!5e0!3m2!1sen!2s!4v1710762695879!5m2!1sen!2s"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
</div>

  );
};

export default Contact;
