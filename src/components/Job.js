import { FaAngleDoubleRight } from "react-icons/fa";
const Job = ({ title, dates, company, duties }) => {
  return (
    <article className="job-item">
      <div className="job-header">
        <h1 className="job-title">{title}</h1>
        <h2 className="job-company">{company}</h2>
        <h3 className="job-dates">{dates}</h3>
      </div>
      <div className="job-duties">
        {duties.map((duty, index) => {
          return (
            <div className="duty" key={index}>
              <FaAngleDoubleRight className="list-disc" />
              <div>{duty}</div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Job;
