import React from "react";

const Footer = () => {
  var today = new Date()
  return (
    <footer>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <h5>Team Member allocation App - {today.getFullYear()}</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
