import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">About Us</h1>
        <p className="text-lg mb-8">
          Welcome to <strong>Our Company</strong> — where innovation meets excellence. We're a passionate team dedicated to building meaningful digital experiences that solve real-world problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-500">🚀 Our Mission</h2>
            <p>
              To empower businesses and individuals with cutting-edge technology solutions that drive growth and inspire change.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2 text-green-500">🌱 Our Vision</h2>
            <p>
              To be a global leader in software innovation, recognized for our values, creativity, and impact.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2 text-pink-500">🤝 Our Values</h2>
            <p>
              We believe in transparency, creativity, customer-first thinking, and continuous learning.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">Meet Our Team</h3>
          <p className="text-md">
            We're a blend of developers, designers, thinkers, and problem-solvers. With diverse backgrounds and a shared passion for tech, we work together to make ideas come alive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
