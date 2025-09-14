export default function JobCard({ allJobs }) {
  console.log("this is a alljobs", allJobs);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl-grid-cols-4 gap-5 bg-gray-200 p-5">
      {allJobs.map((job) => (
        <div className=" border-2 border-red-500 bg-white  rounded-xl ">
          <div className="  ">
            {/* <CardMedia
              component="img"
              height="10"
              width="10"
              image={job.logo}
              alt="green iguana"
            /> */}
            <div className="w-28 h-28 p-5  ">
              <img
                className=" w-full h-full flex justify-center "
                src={job.logo} 
                alt=""
              />
            </div>
            <div className=" px-5">
              <div gutterBottom variant="h6" component="div">
                {job.title}
              </div>
              <div gutterBottom variant="h8" component="div">
                {job.company}
              </div>
              <div gutterBottom variant="h8" component="div">
                {job.salary}
              </div>
              <div className="">{job.date}</div>
              <div variant="body2" sx={{ color: "text.secondary" }}>
                {job.location}
              </div>
            </div>
            <div className=" p-5   ">
              <button className="btn w-56 rounded-xl bg-blue-600 ">
                see details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
