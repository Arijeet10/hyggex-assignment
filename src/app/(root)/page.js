"use client"

import { BreadCrumbContext } from "@/providers/BreadCrumbProvider";
import { usePathname } from "next/navigation";
import { useContext } from "react";


const Home = () => {

  const {breadcrumb,setBreadcrumb}=useContext(BreadCrumbContext)
  const pathname=usePathname()
  //console.log(pathname)
  setBreadcrumb(pathname)

  return ( 
    <>
      <div>
        
        <div className="p-10">
        This is Homepage. Please go to Flashcard from the above navbar.
        </div>


      </div>
    </>
   );
}
 
export default Home;