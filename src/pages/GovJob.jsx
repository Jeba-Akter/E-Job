import React, { useEffect, useState } from 'react';
import GovJobCard from '../components/GovJobCard';

const GovJob = () => {
    const[govJob,setgovJov]= useState([])
    useEffect(()=>{
        fetch("/govJob.json")
        .then((res)=>res.json())
        .then(data=>setgovJov(data))
    },[])
    return (
        <div>
            <GovJobCard alljobs={govJob} ></GovJobCard>
        </div>
    );
};

export default GovJob;