import React from 'react';
import start from '../../Images/star.png';
import dpboy from '../../Images/dpboy.jpeg';
import google from '../../Images/google.png';

// Reusable Testimonial Card Component
const TestimonialCard = ({ name, username, date, review, rating }) => {
  return (
    <article className="flex flex-col items-center bg-white rounded-lg py-8 px-6 shadow-md hover:shadow-lg transition-shadow duration-200">
      {/* Star Ratings */}
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={start}
            alt={`Star ${index + 1}`}
            className={`w-6 h-6 ${index < rating ? '' : 'opacity-50'}`}
          />
        ))}
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img
          src={dpboy}
          alt={`${name}'s profile`}
          className="rounded-full w-20 h-20 mb-3"
        />
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-500 mb-3">
          @{username} · {date}
        </p>
      </div>

      {/* Google Logo */}
      <img src={google} alt="Google Logo" className="w-12 h-12 mb-4" />

      {/* Testimonial Text */}
      <p className="text-center text-gray-700 text-sm md:text-base">{review}</p>
    </article>
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
      rating: 5,
    },
    {
      name: 'John Doe',
      username: 'john.doe',
      date: '5 Days Ago',
      review:
        'Great platform! Found the perfect number plate for my car. Highly recommend their services.',
      rating: 4,
    },
    {
      name: 'Jane Smith',
      username: 'jane.smith',
      date: '1 Week Ago',
      review:
        'User-friendly and efficient! The process of buying a car number was seamless and hassle-free.',
      rating: 5,
    },
  ];

  return (
    <section className="p-6">
      <h1 className="text-gray-800 text-2xl md:text-4xl text-center font-bold mb-10">
        What Our Customers Think About Us
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            username={testimonial.username}
            date={testimonial.date}
            review={testimonial.review}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </section>
  );
}

export default Feedbackus;
