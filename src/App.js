import React, { useState, useEffect } from "react";
import Job from "./components/Job";
import { VscLoading } from "react-icons/vsc";
import { CSSTransition, SwitchTransition } from "react-transition-group";
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const nodeRef = React.useRef(null);
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
      <CSSTransition
        in={loading}
        timeout={500}
        classNames={"fade"}
        appear={true}
        nodeRef={nodeRef}
      >
        <main ref={nodeRef} className="main-container loading">
          <VscLoading className="loading-icon" />
        </main>
      </CSSTransition>
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
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={value}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="job-fade"
        >
          <section className="content">
            <div className="btn-group">
              {companies.map((company, index) => {
                return (
                  <button
                    className={`btn ${index === value && "active"}`}
                    key={index}
                    onClick={() => {
                      setValue(index);
                    }}
                  >
                    {company}
                  </button>
                );
              })}
            </div>
            <Job {...item} />
          </section>
        </CSSTransition>
      </SwitchTransition>
    </main>
  );
};

export default App;
