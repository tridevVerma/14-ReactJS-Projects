import React, { useState, useEffect } from "react";
import "./tabs.css";
function Tabs() {
  const url = "https://course-api.com/react-tabs-project";
  const [Loaded, setLoaded] = useState(false);
  const [Data, setData] = useState([]);
  const [Offer, setOffer] = useState({});
  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          setLoaded(true);
          setData(result);
          if (result.length > 0) {
            setOffer(result[0]);
            const tabCollection = document.getElementsByClassName("tab-btn");
            const tab = [...tabCollection];
            if (tab.length > 0) {
              tab[0].classList.add("tabs-active");
            }
          }
          console.log("Data Successfully Loaded");
        },
        (error) => {
          setLoaded(true);
          console.log("Error is : " + error);
        }
      );
  };

  useEffect(() => {
    getData();
    console.log("change Happened");
  }, []);

  const active = (e) => {
    deactive();
    e.target.classList.add("tabs-active");
  };

  const deactive = () => {
    const tabsCollection = document.getElementsByClassName("tab-btn");
    const tabs = [...tabsCollection];
    tabs.forEach((tab) => {
      tab.classList.remove("tabs-active");
    });
  };

  const basicView = (
    <div className="row">
      <div className="col-md-3 col-lg-3 col-10 mx-auto">
        <ul className="tabs-list">
          {Data.map((item) => {
            return (
              <li className="text-uppercase tabs" key={item.id}>
                <button
                  className="tab-btn"
                  onClick={(e) => {
                    active(e);
                    setOffer(item);
                  }}
                >
                  {item.company}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-md-9 col-lg-9 col-10 mx-auto tabs-content">
        <h2 className="tabs-offer-title">{Offer.title}</h2>
        <h5 className="tabs-offer-company">{Offer.company}</h5>
        <h6 className="tabs-offer-dates mb-4">{Offer.dates}</h6>
        {Offer.duties
          ? Offer.duties.map((duty, index) => {
              return (
                <div key={index} className="tabs-duty">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-double-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <p className="tabs-duty-para">{duty}</p>
                </div>
              );
            })
          : "not found"}
      </div>
    </div>
  );
  if (!Loaded) {
    return (
      <div className="tabs-bg">
        <div className="container">
          <h1 className="tabs-headingText">Loading....</h1>
        </div>
      </div>
    );
  } else {
    if (Data.length <= 0) {
      return (
        <div className="tabs-bg">
          <div className="container">
            <h1 className="tabs-headingText">Can't Fetch Data</h1>
          </div>
        </div>
      );
    }
    return (
      <div className="tabs-bg">
        <div className="container">
          <h1 className="tabs-headingText">Expierence</h1>
          {basicView}
        </div>
      </div>
    );
  }
}

export default Tabs;
