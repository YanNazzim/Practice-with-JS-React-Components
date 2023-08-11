import React from "react";
import button from "./button.png";

const AdminUtil = () => {
  return (
    <div>
      <h2>Admin Tools: </h2>
      <p>This is the page showing several admin tools..</p>
      <ul>
        <li>Tool 1</li>
        <li>Tool 2</li>
        <li>Tool 3</li>
      </ul>
      <img src={button} alt="this button does nothing" />
    </div>
  );
};

export default AdminUtil;
