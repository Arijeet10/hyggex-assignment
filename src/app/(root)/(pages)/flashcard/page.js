
import Faq from "@/components/Faq";
import RelationsFunctions from "@/components/RelationsFunctions";


const Flashcard = () => {


  return (
    <>
      <div>
        <div className="py-[1vh] sm:py-[2vh]">
          <RelationsFunctions />
        </div>

        <div className=" sm:py-[2vh] flex flex-col sm:flex-row items-center justify-center sm:justify-between">
          <div className="">
            <img
              src="/publishedlogo.svg"
              alt="published logo"
              className="w-[50vw] h-[20vh]  sm:w-[20vw] sm:h-[20vh]"
            />
          </div>
          <div className=" flex items-center justify-center">
            <div>
              <img
                src="/add-circle.svg"
                alt="add icon"
                className="w-[10vw] h-[5vh] sm:w-[5vw] sm:h-[5vh]"
              />
            </div>
            <div className="bg-gradient text-gradient font-semibold text-[5vw] sm:text-[3vw]">
              Create Flashcard
            </div>
          </div>
        </div>
        <div className=" sm:py-[2vh]">
          <Faq />
        </div>
      </div>
    </>
  );
};

export default Flashcard;
