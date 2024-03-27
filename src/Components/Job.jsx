import { FaLocationDot } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl border border-purple-500 p-5">
      <figure>
        <img className="w-20" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-5">
          <button className="btn btn-md btn-primary btn-outline border-purple-500">
            {remote_or_onsite}
          </button>
          <button className="btn btn-primary btn-outline border-purple-500">
            {job_type}
          </button>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-1 items-center">
            <FaLocationDot />
            <p>{location}</p>
          </div>
          <div className="flex gap-1 items-center">
            <MdAttachMoney />
            <p>{salary}</p>
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/jobs/${id}`}>
            <button className="btn btn-primary bg-gradient-to-r from-purple-500 to-purple-700 border-none">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
