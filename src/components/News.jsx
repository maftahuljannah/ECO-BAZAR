import React from 'react'
import { FaRegClock, FaRegComments } from "react-icons/fa";


const newsData = [
  {
    id: 1,
    date: "18",
    month: "NOV",
    image: "/images/latestnewsImg-1.png",
    title:
      "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  },
  {
    id: 2,
    date: "23",
    month: "JAN",
    image: "/images/latestnewsImg-2.png",
    title:
      "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  },
  {
    id: 3,
    date: "18",
    month: "NOV",
    image: "/images/latestnewsImg-3.png",
    title:
      "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  },
];


const News = () => {
  return (
     <section
      className="py-16 bg-cover bg-center bg-zinc-100"
      style={{
        backgroundImage: "url('/images/latestnewsBg.png')",
      }}
    >
      <div className="text-center mb-10">
        <p className=" text-center text-green-600 text-base font-normal font-['Segoe_Script'] uppercase leading-tight">BLOG</p>
        <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <div
            key={news.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl `}
          >
            <div className="relative">
              <img
                src={news.image}
                alt="News"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-3 left-3 bg-white px-3 py-1 text-center rounded shadow-md">
                <p className="text-lg font-bold text-gray-800 leading-none">
                  {news.date}
                </p>
                <p className="text-xs text-gray-600 uppercase">{news.month}</p>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center text-zinc-500 text-sm font-normal leading-tight space-x-4 mb-3">
                <p>🍽️ Food</p>
                <p>👤 By <span className='text-neutral-600 text-sm font-normal leading-tight'>Admin</span></p>
                <p>
                  <FaRegComments className="inline mr-1" /> 55 Comments
                </p>
              </div>
              <p className="w-96 text-green-800 text-lg font-medium leading-relaxed mb-3">{news.title}</p>
              <a
                href="#"
                className="text-green-600 font-semibold hover:underline flex items-center"
              >
                Read More <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default News
