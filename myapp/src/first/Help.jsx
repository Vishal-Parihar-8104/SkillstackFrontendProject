import React, { useState } from 'react';
import { Mail, Phone, MapPin, UserPlus, LogIn } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function Help() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("contact");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let apiUrl = "";

    if (activeTab === "contact") apiUrl = "http://localhost:5000/api/contact";
    if (activeTab === "login") apiUrl = "http://localhost:5000/api/login";
    if (activeTab === "signup") apiUrl = "http://localhost:5000/api/signup";

    setLoading(true);

    try {
      // Prepare request body based on form type
      let requestBody = {};

      if (activeTab === "contact") {
        requestBody = { name: form.name, email: form.email, phone: form.phone, subject: form.subject, message: form.message };
      } else if (activeTab === "login") {
        requestBody = { email: form.email, password: form.password };
      } else if (activeTab === "signup") {
        requestBody = { name: form.name, email: form.email, password: form.password, confirmPassword: form.confirmPassword };
      }

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        setForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          password: '',
          confirmPassword: '',
        });

        if (activeTab === "contact") {
          navigate("/courses/webdev");
        } else if (activeTab === "login") {
          // Save token to localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          navigate("/course/fullstack");
        } else if (activeTab === "signup") {
          setActiveTab("login"); // Switch to login tab after signup
        }
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    if (activeTab === "contact") {
      return ["name", "email", "phone", "subject", "message"].every(
        (f) => form[f].trim() !== ""
      );
    }
    if (activeTab === "login") {
      return form.email.trim() !== "" && form.password.trim() !== "";
    }
    if (activeTab === "signup") {
      return (
        form.name.trim() !== "" &&
        form.email.trim() !== "" &&
        form.password.trim() !== "" &&
        form.confirmPassword.trim() !== ""
      );
    }
    return false;
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">

        {/* Left Info Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Keep In Touch With Us</h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mb-6 rounded"></div>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            We'd love to hear from you. Contact us for inquiries or join us by logging in or signing up!
          </p>
          <div className="space-y-6 text-blue-800">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-blue-600 text-white p-2 sm:p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <span className="text-base sm:text-lg break-all">www.skillstack.co.in</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-blue-600 text-white p-2 sm:p-3 rounded-full">
                <Phone size={20} />
              </div>
              <span className="text-base sm:text-lg">+91 94585 45748</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-blue-600 text-white p-2 sm:p-3 rounded-full">
                <Mail size={20} />
              </div>
              <span className="text-base sm:text-lg break-all">info@skillstack.co.in</span>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-gray-100 p-4 sm:p-8 rounded-lg shadow w-full">
          {/* Tabs */}
          <div className="flex justify-around mb-6 border-b border-gray-300 pb-2">
            <button
              className={`font-semibold text-sm sm:text-base ${
                activeTab === "contact" ? "text-blue-700 border-b-2 border-blue-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("contact")}
            >
              Contact
            </button>
            <button
              className={`font-semibold text-sm sm:text-base ${
                activeTab === "login" ? "text-blue-700 border-b-2 border-blue-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("login")}
            >
              <LogIn className="inline mr-1" size={16} /> Login
            </button>
            <button
              className={`font-semibold text-sm sm:text-base ${
                activeTab === "signup" ? "text-blue-700 border-b-2 border-blue-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("signup")}
            >
              <UserPlus className="inline mr-1" size={16} /> Signup
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* CONTACT FORM */}
            {activeTab === "contact" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name *" 
                    value={form.name} 
                    onChange={handleChange} 
                    className="p-3 border rounded w-full text-sm" 
                    required 
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email *" 
                    value={form.email} 
                    onChange={handleChange} 
                    className="p-3 border rounded w-full text-sm" 
                    required 
                  />
                  <input 
                    type="text" 
                    name="phone" 
                    placeholder="Phone *" 
                    value={form.phone} 
                    onChange={handleChange} 
                    className="p-3 border rounded w-full text-sm" 
                    required 
                  />
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject *" 
                    value={form.subject} 
                    onChange={handleChange} 
                    className="p-3 border rounded w-full text-sm" 
                    required 
                  />
                </div>
                <textarea 
                  name="message" 
                  placeholder="Your Message *" 
                  value={form.message} 
                  onChange={handleChange} 
                  rows={5} 
                  className="w-full p-3 border rounded text-sm" 
                  required 
                />
              </>
            )}

            {/* LOGIN FORM */}
            {activeTab === "login" && (
              <>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email *" 
                  value={form.email} 
                  onChange={handleChange} 
                  className="p-3 border rounded w-full text-sm" 
                  required 
                />
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Password *" 
                  value={form.password} 
                  onChange={handleChange} 
                  className="p-3 border rounded w-full text-sm" 
                  required 
                />
              </>
            )}

            {/* SIGNUP FORM */}
            {activeTab === "signup" && (
              <>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name *" 
                  value={form.name} 
                  onChange={handleChange} 
                  className="p-3 border rounded w-full text-sm" 
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email *" 
                  value={form.email} 
                  onChange={handleChange} 
                  className="p-3 border rounded w-full text-sm" 
                  required 
                />
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Password *" 
                  value={form.password} 
                  onChange={handleChange} 
                  className="p-3 border rounded w-full text-sm" 
                  required 
                />
                <input 
                  type="password" 
                  name="confirmPassword" 
                  placeholder="Confirm Password *" 
                  value={form.confirmPassword} 
                  onChange={handleChange} 
                  className="p-3 border rounded w-full text-sm" 
                  required 
                />
              </>
            )}

            <button
              type="submit"
              disabled={!isFormValid() || loading}
              className={`font-semibold py-3 px-6 rounded transition inline-block w-full sm:w-auto ${
                isFormValid() && !loading
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              {loading ? "Loading..." : activeTab === "contact" ? "Send Message" : activeTab === "login" ? "Login" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Help;