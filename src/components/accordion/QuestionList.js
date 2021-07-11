import React from "react";
import Ques from "./Ques";
function QuestionList({ data }) {
  return (
    <>
      {data.map((question, index) => {
        return <Ques question={question} key={question.id} />;
      })}
    </>
  );
}

export default QuestionList;
