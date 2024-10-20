import React from "react";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import github from "../assets/github.png";
import css from "../assets/css.png";
import java from "../assets/java.png";
import ReactIMG from "../assets/ReactImg.png";
import tailwind from "../assets/tailwind.png";

const Experiences = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: javascript,
      title: "javaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-purple-500",
    },
    {
      id: 5,
      src: java,
      title: "Java",
      style: "shadow-white",
    },
    {
      id: 6,
      src: ReactIMG,
      title: "React",
      style: "shadow-red-600",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="Experiences"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experiences;
