import React from "react";

const About = () => {
  return(
    <div name="About" className=" w-full h-screen bg-gradient-to-be from-gray-800 to-black text-black">
        <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About
            </p>
          </div>
        <p className="text-xl mt-20"> 
        I am a passionate and dedicated Computer Science student with a strong foundation in software development, front-end technologies, and Android app development. Over the course of my academic journey, I have gained hands-on experience through various projects, including a Hotel Booking Website developed using HTML, CSS, and JavaScript, and a To-do-list web app built using Python Flask, Jinja, and SQLAlchemy.I am currently working on an Online Planters Buying System in Android Studio, integrating a wide range of features to enhance user experience
        </p>
        <br />
        <p className="text-xl">
        I am proficient in HTML, CSS, JavaScript, Python (Flask), SQLAlchemy, Android Studio, and project management tools. My diverse experience across multiple domains, including software development, research, and entrepreneurship, has helped me develop a strong problem-solving mindset and adaptability, making me eager to take on new challenges and grow in my career..
        </p>
    </div>
  </div>
  );
};

export default About;
