import React from "react";
import ToDoApp from "../assets/portfolio/ToDoApp.png";
// import navbar from "../assets/portfolio/navbar.jpg";
// import heroImage1 from "../assets/portfolio/heroImage1.jpg";
// import reactparallax from "../assets/portfolio/reactparallax.jpg";
import MobileApplication from "../assets/portfolio/MobileApplication.png"
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: ToDoApp,
      href:"https://github.com/Rugged007/to-do.git",
    },
    {
      id: 2,
      src: MobileApplication,
      href:"https://github.com/Rugged007/PlantikaDeck.git",
    },
    // {
    //   id: 3,
    //   src: heroImage1,
    // },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src,href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                  Code
                </button> */}
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
