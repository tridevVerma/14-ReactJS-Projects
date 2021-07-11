import React, { useState } from "react";

import "./birthday.css";
import BirthdayList from "./BirthdayList";
import data from "./data";

function BirthdayReminder() {
  const [People, setPeople] = useState(data);
  return (
    <div className="birthday-bg">
      <div className="birthday-box py-4 px-5 rounded">
        <h1 className="birthday-heading display-3">
          {People.length} birthdays today
        </h1>
        <BirthdayList people={People} />
        <button
          className="clear-birthday text-capitalize rounded my-2"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
        <button
          className="reset-birthday text-capitalize rounded my-2"
          onClick={() => setPeople(data)}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default BirthdayReminder;
