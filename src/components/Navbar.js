"use client";

import { useRouter } from "next/navigation";


const Navbar = () => {

  //for navigation
  const router=useRouter();

  return (
    <>
      <div className="py-[0.5vh] sm:py-[1vh] flex flex-col sm:flex-row sm:items-center justify-between gap-[2vh]">
        <div className="flex items-center justify-center sm:justify-start">
          <img src="/mainlogo.svg" alt="hyggex logo" className="w-[18-vw] h-[4vh]  sm:w-[14vw] sm:h-[4vh] md:h-[10vh] " />
        </div>

        <div className="text-[#3A3740] flex items-center justify-between sm:justify-center gap-[2vw]">
          <div className="flex items-center justify-center gap-[2vw]">
            <button onClick={()=>router.push("/")} className="cursor-pointer">Home</button>
            <button onClick={()=>router.push("/flashcard")} className="cursor-pointer">Flashcard</button>
            <button  className="cursor-pointer">Contact</button>
          </div>
          <button  className="cursor-pointer">FAQ</button>
          <div>
            <button className="px-[2.5vw] py-[1vh] rounded-[32px] text-[#ffffff] font-medium button-bg-gradient ">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
