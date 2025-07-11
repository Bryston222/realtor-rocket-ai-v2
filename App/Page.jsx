import { useState } from "react";

export default function Home() {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch shortly.");
    setContact({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-600 text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Realtor Rocket AI</h1>
        <p className="text-lg mb-8">
          AI-Powered Marketing to Skyrocket Your Real Estate Success
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white text-black shadow-2xl rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-2">Social Media Packages</h2>
            <p className="mb-4">
              Branded posts, captions, and reels—done for you using AI. Engage your audience effortlessly.
            </p>
            <a href="#" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-xl">Get Started</a>
          </div>

          <div className="bg-white text-black shadow-2xl rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-2">Lead Automation Bots</h2>
            <p className="mb-4">
              Qualify leads 24/7 with AI-powered chatbots that save you time and boost conversions.
            </p>
            <a href="#" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-xl">Learn More</a>
          </div>

          <div className="bg-white text-black shadow-2xl rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-2">AI Listing Videos</h2>
            <p className="mb-4">
              Stunning property videos and graphics created fast with the power of AI design tools.
            </p>
            <a href="#" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-xl">View Samples</a>
          </div>
        </div>

        <div className="bg-white text-black p-8 rounded-2xl shadow-2xl mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Services & Pricing</h2>
          <ul className="text-left space-y-4">
            <li><strong>Social Media Content Packages:</strong> $500–$1,500/month</li>
            <li><strong>Lead Generation & Chatbot Automation:</strong> $1,500 setup + $300/month maintenance</li>
            <li><strong>AI Listing Videos & Graphics:</strong> $250–$750 per listing</li>
            <li><strong>Full Realtor Marketing Automation Suite:</strong> $5,000 one-time or $1,500/month</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-white text-black p-8 rounded-2xl shadow-2xl max-w-lg mx-auto">
          <h3 className="text-2xl font-bold mb-4">Free Consultation Booking</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={contact.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={contact.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-xl"
            required
          />
          <textarea
            name="message"
            placeholder="Briefly describe your needs"
            value={contact.message}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-xl"
            rows="4"
            required
          />
          <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-xl w-full font-semibold hover:bg-indigo-700 transition">
            Book My Free Call
          </button>
        </form>

        <div className="max-w-lg mx-auto mt-12 text-left bg-white text-black p-6 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Payment Options</h3>
          <p>We accept payments securely via Stripe.</p>
          <p className="mt-2">To get started, contact us or use the buttons above once Stripe is set up.</p>
        </div>
      </div>
    </div>
  );
}
