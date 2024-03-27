import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStorage";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = JSON.parse(id)
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;
  const { phone, email, address } = contact_information;

  const handleApplyJob = () =>{
    saveJobApplication(idInt)
    toast.success("You Have successfully applied for a job")
  }
  return (
    <div>
        <h2 className="text-3xl text-center font-bold my-10">Job Details</h2>
      <div className="my-12 flex flex-col lg:flex-row">
        <div className="flex flex-col gap-10">
          <h2>
            <span className="font-semibold text-purple-500">Job Description: </span>
            {job_description}
          </h2>
          <h2>
            <span className="font-semibold text-purple-500">Job Responsibility: </span>
            {job_responsibility}
          </h2>
          <div>
            <h2 className="font-semibold text-purple-500">Educational Requirments: </h2>
            <p>{educational_requirements}</p>
          </div>
          <div>
            <h2 className="font-semibold text-purple-500">Experience: </h2>
            <p>{experiences}</p>
          </div>
        </div>
        <div className="flex flex-col lg:w-[700px] border bg-purple-500 bg-opacity-10 p-5 gap-5 lg:ml-10">
          <h3 className="font-bold pb-2 border-b border-dashed">Job Details</h3>
          <h3>
            <span className="font-semibold">Salary: </span>
            {salary}
          </h3>
          <h3>
            <span className="font-semibold">Job Title: </span>
            {job_title}
          </h3>
          <h3 className="font-bold pb-2 border-b border-dashed">
            Contact Information
          </h3>
          <h3>
            <span className="font-semibold">Phone: </span>
            {phone}
          </h3>
          <h3>
            <span className="font-semibold">Email: </span>
            {email}
          </h3>
          <h3>
            <span className="font-semibold">Address: </span>
            {address}
          </h3>
          <button onClick={handleApplyJob} className="btn btn-wide bg-gradient-to-r from-purple-600 to-purple-900 border-none">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer stacked />
    </div>
  );
};

export default JobDetails;
