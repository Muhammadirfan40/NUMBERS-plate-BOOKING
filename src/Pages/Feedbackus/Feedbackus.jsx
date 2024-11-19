import React from 'react';
import start from '../../Images/star.png';
import dpboy from '../../Images/dpboy.jpeg';
import google from '../../Images/google.png';

// Reusable Testimonial Card Component
const TestimonialCard = ({ name, username, date, review }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md w-80">
      {/* Star Ratings */}
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <img key={index} src={start} alt="Star" className="w-6 h-6" />
        ))}
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img
          src={dpboy}
          alt="Profile"
          className="rounded-full w-12 h-12 mb-2"
        />
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm text-gray-500">
          @{username} · {date}
        </p>
      </div>

      {/* Google Logo */}
      <div className="my-4">
        <img src={google} alt="Google" className="w-10" />
      </div>

      {/* Testimonial Text */}
      <p className="text-center text-sm text-gray-700">{review}</p>
    </div>
  );
};

function Feedbackus() {
  const testimonials = [
    {
      name: 'Haroon Rasheed',
      username: 'haroon.me',
      date: '3 Days Ago',
      review:
        'An impressive demo that highlights key features with clarity and ease of use. Definitely sparked interest in the full product.',
    },
    {
      name: 'John Doe',
      username: 'john.doe',
      date: '5 Days Ago',
      review:
        'Great platform! Found the perfect number plate for my car. Highly recommend their services.',
    },
    {
      name: 'Jane Smith',
      username: 'jane.smith',
      date: '1 Week Ago',
      review:
        'User-friendly and efficient! The process of buying a car number was seamless and hassle-free.',
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-black text-4xl md:text-5xl text-center mb-8">
        What Our Customers Think About Us
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            username={testimonial.username}
            date={testimonial.date}
            review={testimonial.review}
          />
        ))}
      </div>
    </div>
  );
}

export default Feedbackus;
