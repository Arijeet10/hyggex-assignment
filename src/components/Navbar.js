"use client";

import { useRouter } from "next/navigation";


const Navbar = () => {

  //for navigation
  const router=useRouter();

  return (
    <>
      <div className="py-[2vh] sm:py-[4vh] flex flex-col sm:flex-row sm:items-center justify-between gap-[2vh]">
        <div className="text-center">
          <img src="/mainlogo.svg" alt="hyggex logo" className="w-[18-vw] h-[6vh]  sm:w-[14vw] sm:h-[6vh]" />
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
