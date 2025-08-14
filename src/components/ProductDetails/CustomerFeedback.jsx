import React from "react";
import { FaStar } from "react-icons/fa";

const CustomerFeedback = () => {
  const reviews = [
    {
      name: "Kristin Watson",
      img: "/images/pdetails/cus-1.png",
      rating: 5,
      text: "Duis at ullamcorper nulla, eu dictum eros.",
      time: "2 min ago",
    },
    {
      name: "Jane Cooper",
      img: "/images/testimonial-1.png",
      rating: 4,
      text: "Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to 'bolt' or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.",
      time: "30 Apr, 2021",
    },
    {
      name: "Jacob Jones",
      img: "/images/pdetails/cus-2.png",
      rating: 5,
      text: "Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.",
      time: "2 min ago",
    },
    {
      name: "Ralph Edwards",
      img: "/images/pdetails/cus-3.png",
      rating: 5,
      text: "200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA",
      time: "2 min ago",
    },
  ];

  return (
    <div className="mt-8">
      {reviews.map((review, idx) => (
        <div key={idx} className="border-b pb-4 mb-4">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <img
                src={review.img}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <div className="flex text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
              </div>
            </div>
            <span className="text-sm text-gray-500">{review.time}</span>
          </div>

          {/* Review Text */}
          <p className="text-gray-700 mt-2">{review.text}</p>
        </div>
      ))}

      {/* Load More Button */}
      <div className="flex justify-center">
        <button className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition">
          Load More
        </button>
      </div>
    </div>
  );
};

export default CustomerFeedback;
