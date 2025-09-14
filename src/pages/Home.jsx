import React, { useEffect, useState } from 'react';
import JobCard from '../shared/JobCard';
// import Carousel from '../components/Carousel';

const Home = () => {
    const [liveJobs,setliveJobs]= useState([])
    useEffect(()=>{
        fetch("/liveJobs.json")
        .then((res)=> res.json())
        .then(data=>setliveJobs(data))
    },[])
    return (
        <div className='' >
            {/* <Carousel></Carousel> */}
            <JobCard allJobs={liveJobs} ></JobCard>
        </div>
    );
};
const roll=602894

export default Home;                                      