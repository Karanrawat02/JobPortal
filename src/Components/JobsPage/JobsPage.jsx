import React, { useState } from 'react';
import './JobsPage.css';
import Navbar from '../Navbar/Navbar';

const JobsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const jobs = [
    { id: 1, title: 'Web Developer', wfh: true, salary: '5000 USD' },
    { id: 2, title: 'HR Manager', wfh: false, salary: '4000 USD' },
    { id: 3, title: 'Marketing Specialist', wfh: true, salary: '4500 USD' },
    { id: 4, title: 'ReactJs Developer ', wfh: true, salary: '4800 USD' },
    { id: 5, title: 'Marketing Specialist', wfh: true, salary: '4200 USD' },
    { id: 6, title: 'Javascript Developer', wfh: true, salary: '5500 USD' },
    { id: 7, title: 'HR', wfh: true, salary: '3500 USD' },
    { id: 8, title: 'Digital Marketing ', wfh: true, salary: '5500 USD' },
    { id: 9, title: 'Civil Engineer', wfh: true, salary: '4500 USD' },
    { id: 10, title: 'BioTech Specialist', wfh: true, salary: '6500 USD' },
    { id: 11, title: 'ReactJs Developer', wfh: true, salary: '6500 USD' },
    { id: 12, title: 'Frontend Developer', wfh: true, salary: '9500 USD' },
  ];

  const handleSearch = () => {
    const filtered = jobs.filter(job => job.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredJobs(filtered);
  };

  const displayedJobs = searchQuery ? filteredJobs : jobs;

  return (
    <>
    <Navbar />
    <div className="jobs-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Jobs"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}><i className="fa fa-search"></i></button>
      </div>
      <div className="filters">
        {/* Add filter options */}
      </div>
      <div className="job-cards">
        {displayedJobs.length > 0 ? (
          displayedJobs.map(job => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.wfh ? 'WFH' : 'WFO'}</p>
              <p>{job.salary}</p>
              <button>Apply</button>
            </div>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default JobsPage;
