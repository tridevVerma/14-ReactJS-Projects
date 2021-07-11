import React from "react";

function BirthdayList(props) {
  return (
    <>
      {props.people.map((person, index) => {
        return (
          <div className="birthday-item my-4" key={index}>
            <img src={person.image} alt="person1" className="birthdayImg" />
            <div className="birthday-item-data">
              <h4 className="birthday-item-data-name display-6">
                {person.name}
              </h4>
              <h4 className="birthday-item-data-age display-6">{person.age}</h4>
            </div>
          </div>
        );
      })}{" "}
    </>
  );
}

export default BirthdayList;
