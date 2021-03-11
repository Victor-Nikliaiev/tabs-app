import { FaAngleDoubleRight } from "react-icons/fa";
const Job = ({ title, dates, duties }) => {
  return (
    <article className="job">
      <h1>{title}</h1>
      <h2>{dates}</h2>
      <div className="job-duties">
        {duties.map((duty, index) => {
          return (
            <div key={index}>
              <FaAngleDoubleRight />
              <div>{duty}</div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Job;
