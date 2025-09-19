import React, { useEffect, useState } from "react";

import CompanyBanner from "../components/CompanyBanner";
import CompanyCard from "../components/CompanyCard";

const Company = () => {
    const[companyjobs,setcompanyjobs]= useState([])
    useEffect(()=>{
        fetch("/companyjobs.json")
        .then((res)=>res.json())
        .then(data=>setcompanyjobs(data))
    },[])
  return (
   <div className=" bg-gray-100">
    <CompanyBanner></CompanyBanner>
    <CompanyCard alljobs={companyjobs} ></CompanyCard>
    
   </div>
  );
};

export default Company;
