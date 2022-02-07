import React from "react";
import { FaEye, FaInfo, FaStar, FaUtensils,FaLink } from "react-icons/fa";
function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (<div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
  <div className="card-body">
      <h3 className="mb-2 text-xl font-semibold">
        <a className="text-slate-100 " href={html_url}><FaLink className="inline mr-3 text-slate-100"/>{name}</a>
      </h3>
      <p className="mb-3 ml-8 text-slate-100">{description}</p>
      <div className="flex flex-row">
          <div className="mr-2 badge-info badge-lg">
              <FaEye className="mr-2"/>{watchers_count}
          </div>
          <div className="mr-2 badge-success badge-lg">
              <FaStar className="mr-2"/>{stargazers_count}
          </div>
          <div className="mr-2 badge-error badge-lg">
              <FaInfo className="mr-2"/>{open_issues}
          </div>
          <div className="mr-2 badge-warning badge-lg">
              <FaUtensils className="mr-2"/>{forks}
          </div>
      </div>
  </div>
  </div>);
}

export default RepoItem;
