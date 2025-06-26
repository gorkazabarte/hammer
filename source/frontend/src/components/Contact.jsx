export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-white text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <p><strong>Name:</strong> Gorka Zabarte</p>
          <p><strong>Email:</strong> <a href="mailto:gorkazabartemoreno@gmail.com" className="text-blue-600 hover:underline">gorkazabartemoreno@gmail.com</a></p>
          <p><strong>Location:</strong> Madrid, Spain</p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/gorka-zabarte-moreno" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/gorka-zabarte-moreno</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/gorkazabarte" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/gorkazabarte</a></p>
        </div>

        {/* Contact Form */}
        <form
          action="mailto:gorkazabartemoreno@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

