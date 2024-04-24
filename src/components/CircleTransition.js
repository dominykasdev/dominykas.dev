import {
  BsRecord2,
  BsRecordCircle,
  BsRecordCircleFill,
  BsRecordFill,
} from "react-icons/bs";
import { pennRed, kellyGreen, gamboge, moonstone, seasalt } from "../Constants";
import "./CircleTransition.scss";

const CircleTransition = ({ homeActive }) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <BsRecordCircleFill
        className={homeActive ? "circle animate" : "circle"}
        style={{ fill: gamboge }}
      />
      <BsRecordCircle
        className={homeActive ? "circle animate delay" : "circle"}
        style={{ fill: seasalt }}
      />
      <BsRecord2
        className={homeActive ? "circle animate delay2" : "circle"}
        style={{ fill: gamboge }}
      /> */}
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
      {/* <BsRecordFill
        className={homeActive ? "circle animate delay5" : "circle"}
        style={{ fill: seasalt }}
      />
      <BsRecordFill
        className={homeActive ? "circle animate delay6" : "circle"}
        style={{ fill: gamboge }}
      /> */}
    </div>
  );
};

export default CircleTransition;
