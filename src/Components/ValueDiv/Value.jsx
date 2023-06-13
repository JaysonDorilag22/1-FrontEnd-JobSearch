import React from "react";
import simple from "../../Assets/9.png";
import valentines from "../../Assets/10.png";
import shield from "../../Assets/11.png";


function Value() {
  return (
    <div className="mb-[4rem] mt-[6rem]">
     <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] 
     font-bold w-[500px] block'>Your dream job is just a click away. Start your journey with us</h1>

    <div className="grid gap-[10rem] grid-cols-3 items-center">

      <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
        <div className="flex items-center gap-3">
          <div className="imgDiv p-[4px] rounded-[.8rem]  h-[60px] w-[60px] flex items-center justify-center">
            <img src={simple} alt="" className='w-[90%]' />
          </div>
          <span className='font-semibold text-textColor text-[18px]'>
            Simplicity
          </span>
        </div>
        <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>

      <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
        <div className="flex items-center gap-3">
          <div className="imgDiv p-[4px] rounded-[.8rem]  h-[60px] w-[60px] flex items-center justify-center">
            <img src={valentines} alt="" className='w-[90%]' />
          </div>
          <span className='font-semibold text-textColor text-[18px]'>
          Opportunities
          </span>
        </div>
        <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>

      <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
        <div className="flex items-center gap-3">
          <div className="imgDiv p-[4px] rounded-[.8rem] h-[60px] w-[60px] flex items-center justify-center">
            <img src={shield} alt="" className='w-[90%]' />
          </div>
          <span className='font-semibold text-textColor text-[18px]'>
            Fast
          </span>
        </div>
        <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>

    </div>

    <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
    <div>
      <h1 className="text-blueColor text-[30px] font-bold">Ready to switch a career</h1>
      <h2 className="text-textColor text-[25px] font-bold"> Let's get started</h2>
    </div>
    <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">
        Get Started
      </button>

    </div>
  </div>
  
  );
}

export default Value;
