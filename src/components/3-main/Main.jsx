import React, { useState } from "react";
import "./main.css";
const Main = () => {
  const [first, setfirst] = useState("second");
  return (
    <main className="flex">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setfirst("second");
          }}
          className={first === "second" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setfirst("Javascript");
          }}
          className={first === "Javascript" ? "active" : null}
        >
          Javascript
        </button>
        <button
          onClick={() => {
            setfirst("React");
          }}
          className={first === "React" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            setfirst("Express");
          }}
          className={first === "Express" ? "active" : null}
        >
          Node js & Express
        </button>
      </section>
      <section className=" flex right-section">
        {["aa", "bb", "cc", "aa", "bb", "cc"].map((item) => {
          return (
            <article key={item} className=" card">
              <img
                width={200}
                src="/public/Screenshot 2024-09-10 222842.png"
                alt=""
              />
              <div style={{ width: "200px" }} className="box">
                <h1 className="title">aaaaaaaaaa</h1>
                <p className="sub-title">aaaassssssssss</p>
                <div className="flex">
                  <div className="icon-card flex">
                    <a href="" className="icon-link"></a>
                    <a href="" className="icon-github"></a>
                  </div>
                  <a className="link flex" href="">
                    more <span className="icon-arrow_forward"></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
