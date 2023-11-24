import React from "react";
import { Label } from "./Label";
import { Season } from "./Season";
import { Category } from "./Category";

function Buyhs() {
  return (
    <div className="buyhs">
      Buyhs
      <Label />
      <Season />
      <Category />
      <div className="forms">
      <hr></hr>
        LABEL: <form1>52</form1><hr></hr>
        SEASON: <form2>53</form2><hr></hr>
        CATEGORY: <form3>54</form3><hr></hr>
      </div>
    </div>
  );
}
export { Buyhs };
