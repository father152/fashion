import React from "react";
import { Link } from "react-router-dom";

function Hm() {
  return (
    <div className="hm">
      <h5>Hm</h5>
      <div>
        <Link to="/" className="back">
          Home
        </Link>
      </div>
    </div>
  );
}
export { Hm };
