import DownArrow from "./icons/DownArrow";

const Faq = () => {
  return (
    <>
      <div>
        <div className="py-[2vh] font-bold text-[5vw] bg-gradient text-gradient">
          FAQ
        </div>
        <div className="flex flex-col gap-[3vh]">
          <div className="border-gradient">
            <div className="bg-[#F9F9F9] text-[#28262C] rounded-[1.3vw] p-3 flex items-center justify-between">
              <div>Can education flashcards be used for all age groups?</div>
              <div>
                <DownArrow />
              </div>
            </div>
          </div>
          <div className="border-gradient">
            <div className="bg-[#F9F9F9] text-[#28262C] rounded-[1.3vw] p-3 flex items-center justify-between">
              <div>How do education flashcards work?</div>
              <div>
                <DownArrow />
              </div>
            </div>
          </div>
          <div className="border-gradient">
            <div className="bg-[#F9F9F9] text-[#28262C] rounded-[1.3vw] p-3 flex items-center justify-between">
              <div>Can education flashcards be used for test preparation?</div>
              <div>
                <DownArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
