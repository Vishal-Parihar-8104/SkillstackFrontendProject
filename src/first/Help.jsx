import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Help() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!\n\n' + JSON.stringify(form, null, 2));
    // TODO: Send to API or backend service
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Keep In Touch With Us</h2>
          <div className="w-20 h-1 bg-blue-600 mb-6 rounded"></div>
          <p className="text-gray-600 mb-8">
            Neque convallis cras semper auctor. Libero id faucibus getnvallis.id faucibus nisl tincidunt egetnvallis.
          </p>
          <div className="space-y-6 text-blue-800">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <span className="text-lg">www.skillstack.co.in</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                <Phone size={20} />
              </div>
              <span className="text-lg">+91 94585 45748</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                <Mail size={20} />
              </div>
              <span className="text-lg">info@skillstack.co.in</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-100 p-8 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Get in Touch</h3>
          <div className="w-16 h-1 bg-blue-600 mb-6 rounded"></div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={form.name}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={form.email}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone *"
                value={form.phone}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                value={form.subject}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message *"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Help;

