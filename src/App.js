import React, { useState, useEffect } from "react";
import Job from "./components/Job";
import { VscLoading } from "react-icons/vsc";
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const newItems = await res.json();
      setItems(newItems);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="main-container loading">
        <VscLoading className="loading-icon" />
      </main>
    );
  }

  const item = items[value];
  const companies = items.map((item) => item.company);

  return (
    <main className="main-container">
      <header>
        <h1>experience</h1>
        <div className="underline"></div>
      </header>
      <section className="content">
        <div className="btn-group">
          {companies.map((company, index) => {
            return (
              <button
                className={`btn ${index === value && "active"}`}
                key={index}
                onClick={() => setValue(index)}
              >
                {company}
              </button>
            );
          })}
        </div>
        <Job {...item} />
      </section>
    </main>
  );
};

export default App;
