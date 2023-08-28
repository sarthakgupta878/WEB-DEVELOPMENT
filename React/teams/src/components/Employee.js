import React from "react";
import female from "../images/female.jpg";
import male from "../images/male.jpg";

const Employee = (props) => {
 const {selectedTeam , employees} = props
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={props.handleSelectedTeam}
          >
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => {
              return (
                <div
                  key={employee.id}
                  id={employee.id}
                  className={(employee.teamName === selectedTeam )? "card m-2 standout" : "card m-2"}
                  style={{ cursor: "pointer" }}
                  onClick={props.handleCardClick}
            
                >
                  {employee.gender === "male" ? (
                    <img src={male} className="card-img-top" alt="male" />
                  ) : (
                    <img src={female} className="card-img-top" alt="female"/>
                  )}
                  <div className="card-body">
                    <h5 className="card-title">
                      Full Name: {employee.fullName}
                    </h5>
                    <p className="card-text">
                      <b>Designation: {employee.designation}</b>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employee;
