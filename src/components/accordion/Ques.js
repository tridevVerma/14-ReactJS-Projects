import React from "react";

function Ques({ question }) {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item my-4">
          <h2 className="accordion-header" id={"heading" + question.id}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapse" + question.id}
              aria-expanded="true"
              aria-controls={"collapse" + question.id}
            >
              {question.title}
            </button>
          </h2>
          <div
            id={"collapse" + question.id}
            className="accordion-collapse collapse"
            aria-labelledby={"heading" + question.id}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{question.info}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ques;
