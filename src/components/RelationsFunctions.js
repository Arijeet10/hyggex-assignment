"use client";

import { useState } from "react";
import StudyCard from "./StudyCard";


const RelationsFunctions=()=>{

    //to set active state among the menus
    const [active,setActive]=useState("Study");

    return (
        <>
            <div>
                <div className="text-[4.2vw] sm:text-[3vw]  font-bold bg-gradient text-gradient">
                    Relations and Functions ( Mathematics )
                </div>

                {/* Menus */}
                <div className="py-[4vh] text-[#696671]  font-bold flex items-center justify-center gap-[2vw]">
                    <div onClick={()=>setActive("Study")} className={` border-b-2  ${active=="Study" ? "border-[#06286E] text-[#06286E]":"border-[#ffffff]"}  cursor-pointer`}>
                        <div className="text-center">Study</div>
                    </div>
                    <div onClick={()=>setActive("Quiz")} className={`border-b-2  ${active=="Quiz" ? "border-[#06286E] text-[#06286E]":"border-[#ffffff]"}  cursor-pointer`}>
                        <div className="text-center">Quiz</div>
                    </div>
                    <div onClick={()=>setActive("Test")} className={`border-b-2  ${active=="Test" ? "border-[#06286E] text-[#06286E]":"border-[#ffffff]"}  cursor-pointer`}>
                        <div className="text-center">Test</div>
                    </div>
                    <div onClick={()=>setActive("Game")} className={`border-b-2  ${active=="Game" ? "border-[#06286E] text-[#06286E]":"border-[#ffffff]"}  cursor-pointer`}>
                        <div className="text-center">Game</div>
                    </div>
                    <div onClick={()=>setActive("Others")} className={`border-b-2  ${active=="Others" ? "border-[#06286E] text-[#06286E]":"border-[#ffffff]"}  cursor-pointer`}>
                        <div className="text-center">Others</div>
                    </div>
                </div>

                {/* Study Cards */}
                {active=="Study" && (
                    <StudyCard />
                )}

            </div>
        </>
    )
}

export default RelationsFunctions;