import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-gray-950 text-gray-800 dark:text-white"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Interested in working together or just want to say hi? I’d love to
          hear from you.
        </p>
        <a
          href="mailto:kamiljarrougedev@gmail.com"
          className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
        >
          kamiljarrougedev@gmail.com
        </a>
        <div className="mt-6 flex justify-center gap-4 text-sm">
          <a
            href="https://github.com/KameilJarrouge"
            target="_blank"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kamil-jarrouge"
            target="_blank"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
