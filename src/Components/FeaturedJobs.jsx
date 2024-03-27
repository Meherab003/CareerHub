import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="my-10">
      <div>
        <h2 className="text-5xl text-center mt-10">Featured Jobs</h2>
        <p className="text-center my-10">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {
            jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div className={ dataLength === jobs.length ? "hidden" : `flex justify-center my-10`}>
        <button
            onClick={() => setDataLength(jobs.length)}
        className="btn btn-wide bg-gradient-to-r from-purple-600 to-purple-900 border-none">Show All</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
