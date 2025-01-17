import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-darkBlue text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Service</h1>
      <p className="text-lg mb-6">
        We offer secure and reliable API integrations.
      </p>
      <a
        href="/login"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
      >
        Get Started
      </a>
    </div>
  );
};

export default HomePage;
