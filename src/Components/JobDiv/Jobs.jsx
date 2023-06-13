import React from "react";

//import icon
import { BiTimeFive } from "react-icons/bi";

//Import Images
import logo1 from "../../Assets/1.png";
import logo2 from "../../Assets/2.png";
import logo3 from "../../Assets/3.png";
import logo4 from "../../Assets/4.png";
import logo5 from "../../Assets/5.png";
import logo6 from "../../Assets/6.png";
import logo7 from "../../Assets/7.png";
import logo8 from "../../Assets/8.png";

//For all the jobs, we are going to use high order array method called Map....
//In this case we shall list all the Jobs into an array called Data

const Data = [
  {
    id: 1,
    image: logo1,
    title: "Software Eng.",
    time: "Now",
    location: "Quezon City",
    desc: " Proident aute velit excepteur aliqua eiusmod esse enim adipisicing enim excepteur nisi velit adipisicing.",
    company: "Artificial Int Co.",
  },
  {
    id: 2,
    image: logo2,
    title: "Web Dev.",
    time: "2Hrs",
    location: "Marikina City",
    desc: " Proident aute velit excepteur aliqua eiusmod esse enim adipisicing enim excepteur nisi velit adipisicing.",
    company: "Human Tech Co.",
  },
  {
    id: 3,
    image: logo3,
    title: "Computer Eng.",
    time: "3Hrs",
    location: "Taguig City",
    desc: " Proident aute velit excepteur aliqua eiusmod esse enim adipisicing enim excepteur nisi velit adipisicing.",
    company: "Code Machine Co.",
  },
  {
    id: 4,
    image: logo4,
    title: "Network Eng.",
    time: "4Hrs",
    location: "Bulacan City",
    desc: " Proident aute velit excepteur aliqua eiusmod esse enim adipisicing enim excepteur nisi velit adipisicing.",
    company: "Coding Tech Co.",
  },
  {
    id: 5,
    image: logo5,
    title: "Data Analyst",
    time: "5Hrs",
    location: "Pasay City",
    desc: " Proident aute velit excepteur aliqua eiusmod esse enim adipisicing enim excepteur nisi velit adipisicing.",
    company: "Network STS Co.",
  },
  {
    id: 6,
    image: logo6,
    title: "Frontend Dev.",
    time: "6Hrs",
    location: "Tagaytay City",
    desc: " Proident aute velit excepteur aliqua eiusmod esse enim adipisicing enim excepteur nisi velit adipisicing.",
    company: "Line Tech Co.",
  },
  {
    id: 7,
    image: logo7,
    title: "Software Eng.",
    time: "7Hrs",
    location: "Metro Manila",
    desc: " Proident aute velit excepteur aliqua eiusmod esse enim adipisicing enim excepteur nisi velit adipisicing.",
    company: "GameBox Co.",
  },
  {
    id: 8,
    image: logo8,
    title: "Game Developer",
    time: "8Hrs",
    location: "Pampanga City",
    desc: " Proident aute velit excepteur aliqua eiusmod esse enim adipisicing enim excepteur nisi velit adipisicing.",
    company: "Fox Tech Co.",
  },
  {
    id: 8,
    image: logo8,
    title: "Game Developer",
    time: "8Hrs",
    location: "Pampanga City",
    desc: " Proident aute velit excepteur aliqua eiusmod esse enim adipisicing enim excepteur nisi velit adipisicing.",
    company: "Fox Tech Co.",
  },
  {
    id: 8,
    image: logo8,
    title: "Game Developer",
    time: "8Hrs",
    location: "Pampanga City",
    desc: " Proident aute velit excepteur aliqua eiusmod esse enim adipisicing enim excepteur nisi velit adipisicing.",
    company: "Fox Tech Co.",
  },
  {
    id: 7,
    image: logo7,
    title: "Software Eng.",
    time: "7Hrs",
    location: "Metro Manila",
    desc: " Proident aute velit excepteur aliqua eiusmod esse enim adipisicing enim excepteur nisi velit adipisicing.",
    company: "GameBox Co.",
  },
  {
    id: 7,
    image: logo7,
    title: "Software Eng.",
    time: "7Hrs",
    location: "Metro Manila",
    desc: " Proident aute velit excepteur aliqua eiusmod esse enim adipisicing enim excepteur nisi velit adipisicing.",
    company: "GameBox Co.",
  },
];

//This is a single, Lets see how to map it...

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive/>
                  {time}
                </span>
              </span>

              <h6 className="text-[#ccc]">{location}</h6>

              <p className="text-[13px] text-[#959595] pt-[20] border-t-[2px] mt [20px] group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="Company logo" className="w-[20%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>

              <button class="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover:text-black">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
