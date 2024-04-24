import { BsRecord2, BsRecordCircle, BsRecordCircleFill } from "react-icons/bs";
import { pennRed, kellyGreen, gamboge, moonstone, seasalt } from "../Constants";

const CircleTransition = ({ homeActive }) => {
  return (
    <div style={{ position: "fixed", width: "100vw", height: "100vh" }}>
      <BsRecordCircleFill
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
      />
    </div>
  );
};

export default CircleTransition;
