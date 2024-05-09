"use client";

import { useContext } from "react";
import RightArrowBlue from "./icons/RightArrowBlue";
import { BreadCrumbContext } from "@/providers/BreadCrumbProvider";
import HomeIcon from "./icons/HomeIcon";

const Path = () => {
  const {breadcrumb} = useContext(BreadCrumbContext);
  //console.log(breadcrumb)

  return (
    <>
      <div className="flex items-center justify-start gap-[1vw] text-[#696671] text-[3vw] sm:text-[1.5vw] font-medium">
        {breadcrumb == "/" ? (
          <>
            <div>
              <HomeIcon />
            </div>
          </>
        ) : breadcrumb == "/flashcard" ? (
          <>
            <div className="flex items-center justify-center gap-[0.1vw]">
              <div>
                <HomeIcon />
              </div>
              <div>
                <RightArrowBlue />
              </div>
              <div>Flashcard</div>
            </div>
            <div className="flex items-center justify-center gap-[0.1vw]">
              <div>
                <RightArrowBlue />
              </div>
              <div>Mathematics</div>
              <div className="flex items-center justify-center gap-[0.1vw]">
                <div>
                  <RightArrowBlue />
                </div>
                <div className="font-semibold text-[#06286E]">
                  Relation and Function
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center gap-[0.1vw]">
              <div>
                <HomeIcon />
              </div>
              <div>
                <RightArrowBlue />
              </div>
            </div>
          </>
        )}
        {/* <div className="flex items-center justify-center gap-[0.1vw]">
          <div>
            <HomeIcon />
          </div>
          <div>
            <RightArrowBlue />
          </div>
          <div>Flashcard</div>
        </div>
        <div className="flex items-center justify-center gap-[0.1vw]">
          <div>
            <RightArrowBlue />
          </div>
          <div>Mathematics</div>
          <div className="flex items-center justify-center gap-[0.1vw]">
            <div>
              <RightArrowBlue />
            </div>
            <div className="font-semibold text-[#06286E]">
              Relation and Function
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Path;
