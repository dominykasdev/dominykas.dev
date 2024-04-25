import { BsRecordFill } from "react-icons/bs";
import { pennRed, kellyGreen, gamboge, moonstone, seasalt } from "../Constants";
import "./CircleTransition.scss";

const CircleTransition = ({ homeActive }) => {
  return (
    <div
      className="animationContainer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BsRecordFill
        className={homeActive ? "circle animate" : "circle"}
        style={{ fill: gamboge }}
      />
      <BsRecordFill
        className={homeActive ? "circle animate delay" : "circle"}
        style={{ fill: seasalt }}
      />
      <BsRecordFill
        className={homeActive ? "circle animate delay2" : "circle"}
        style={{ fill: gamboge }}
      />
      <BsRecordFill
        className={homeActive ? "circle animate delay3" : "circle"}
        style={{ fill: seasalt }}
      />
      <BsRecordFill
        className={homeActive ? "circle animate delay4" : "circle"}
        style={{ fill: gamboge }}
      />
    </div>
  );
};

export default CircleTransition;
