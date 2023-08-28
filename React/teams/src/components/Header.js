import React from "react";

const header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <h1>Team Member Allocation</h1>
          <h4>
            {selectedTeam} has {teamMemberCount} members
          </h4>
        </div>
      </div>
    </header>
  );
};

export default header;
