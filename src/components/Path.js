import RightArrowBlue from "./icons/RightArrowBlue";

const Path = () => {
  return (
    <>
      <div className="flex items-center justify-start gap-[1vw] text-[#696671] text-[3vw] sm:text-[1.5vw] font-medium">
        <div className="flex items-center justify-center gap-[0.1vw]">
          <div>
            <img src="/home.svg" alt="home logo" className="w-[4vw] h-[4.5vh] sm:w-[2.5vw] sm:h-[4.5vh]" />
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
      </div>
    </>
  );
};

export default Path;
