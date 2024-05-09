"use client";

import { useState } from "react";
import { IoIosClose } from "react-icons/io";

//sample study data for carousel
const data = [
  "9 + 6 + 7x - 2x - 3",
  "9x + 6 + 7 + 2x + 3",
  "9 + 6y - 7x + 2 - 3y",
  "10 + 6x + 7x - 2x - 3",
  "9y + 6 - 7x + 2x - 3",
  "9xy + 6x + 7y - 2x - 3",
  "9y - 6 + 7x - 2x - 3",
  "5 + 6 + 7x - 2x - 3",
  "2 - 6y + 7x - 2x - 3",
  "1 + 6y + 7x - 2x - 3",
];

const StudyCard = () => {

  //to show card
  const [active,setActive]=useState(1);

  //to show hint modal
  const [hint,setHint]=useState(false);

  //to show card in full screen
  const [fullscreen,setFullscreen]=useState(false);



  //show previous card
  const handleRight=(i)=>{
    if(i==10){
      setActive(1)
    }else{
      setActive(i+1)
    }
  }

  //show next card
  const handleLeft=(i)=>{
    if(i!==0){
      setActive(i)
    }else{
      setActive(10)
    }
  }

  return (
    <>
      <div className={`${fullscreen ? 'absolute z-40 top-[20vh] left-[10vw] sm:left-[20vw] ' : 'flex justify-center'}`}>
      {data.map((item, i) => {
        return (
          <div key={i} className={`py-[2vh] flex flex-col items-center justify-center gap-[2vh]  ${(i+1)!==active && "hidden"}`}>
            <div className="w-[80vw] h-[60vh] sm:w-[60vw] sm:h-[60vh] relative study-gradient rounded-[42px] flex items-center justify-center">
              <div onClick={()=>setHint(!hint)} className=" absolute top-10 left-10 cursor-pointer">
                <img src="/bulb.svg" alt="" className="w-[4vw] sm:w-[3vw] h-[5vh]" />
              </div>

              <div className="absolute top-10 right-10">
                <img src="/sound.svg" alt="" className="w-[4vw] sm:w-[3vw] h-[5vh]" />
              </div>
              <div className="text-[#ffffff] text-[5vw] sm:text-[4vw] font-bold">
                {item}
              </div>
            </div>
            <div className={`${fullscreen && 'bg-[#F9F9F9] p-2 rounded-[40px]'} flex items-center justify-center gap-[6vw]`}>
              <div>
                <img
                  src="/reload.svg"
                  alt="reload icon"
                  className="w-[5vw] h-[5vh]"
                />
              </div>
              <div className="flex items-center justify-center gap-[1vw]">
                <div onClick={()=>handleLeft(i)} className="cursor-pointer">
                  <img
                    src="/leftarrow-circle.svg"
                    alt="left icon"
                    className="w-[8vw] h-[8vh]"
                  />
                </div>
                <div className="text-[4vw] sm:text-[3vw] text-[#202B37] font-bold">{(i+1).toString().length==1 ? "0"+(i+1) : i+1}/{data.length}</div>
                <div onClick={()=>handleRight(i+1)} className="cursor-pointer">
                  <img
                    src="/rightarrow-circle.svg"
                    alt="right icon"
                    className="w-[8vw] h-[8vh]"
                  />
                </div>
              </div>
              <div onClick={()=>setFullscreen(!fullscreen)} className=" cursor-pointer">
                <img
                  src="/fullscreen.svg"
                  alt="fullscreen icon"
                  className="w-[5vw] h-[5vh]"
                />
              </div>
            </div>
          </div>
        );
      })}
      </div>

      {/* Background darken when modal is shown */}
      {(hint || fullscreen) && (
        <div  className="fixed z-10 inset-0 bg-[rgba(0,0,0,0.7)]" />
      )}

      {/* Hint Modal */}
      {hint && (
        <>
        <div onClick={()=>setHint(false)} className="absolute z-50 top-[25vh] right-[15vw] translate-x-[-50%] text-[#F9F9F9]">
          <IoIosClose className="w-[10vw] h-[10vh]" />
        </div>
        <div className="p-2 absolute z-50 rounded-lg top-[30vh] left-[20vw] bg-[#F9F9F9] w-[50vw] h-[50vh]">
          <div className="font-semibold text-[4vw] sm:text-[3vw] text-[#06286E] text-center">
            Hint
          </div>
          <div className="text-[4vw] sm:text-[3vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus erat, finibus sit amet placerat et, mollis vel orci. Aliquam imperdiet sagittis tellus. Vestibulum eu augue a eros viverra vehicula. Proin mattis erat et sodales convallis. Vestibulum a efficitur lorem. Vestibulum scelerisque dignissim posuere
          </div>
        </div>
        </>
      )}



    </>
  );
};

export default StudyCard;
