"use client";

import React, { useState } from "react";

export const BreadCrumbContext=React.createContext();

const BreadCrumbContextProvider=({children})=>{

    const [breadcrumb,setBreadcrumb]=useState("")

    return (
        <BreadCrumbContext.Provider value={{breadcrumb,setBreadcrumb}}>
            {children}
        </BreadCrumbContext.Provider>
    )
}

export default BreadCrumbContextProvider;

