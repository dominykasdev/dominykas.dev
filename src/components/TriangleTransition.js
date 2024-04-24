import { BsTriangle, BsTriangleFill } from "react-icons/bs";
import { pennRed, kellyGreen, gamboge, moonstone, seasalt } from "../Constants";
import "./TriangleTransition.scss";

const TriangleTransition = ({ aboutActive }) => {
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
      <BsTriangleFill
        className={aboutActive ? "triangle animate" : "triangle"}
        style={{ fill: gamboge }}
      />
      <BsTriangleFill
        className={aboutActive ? "triangle animate delay" : "triangle"}
        style={{ fill: seasalt }}
      />
      <BsTriangleFill
        className={aboutActive ? "triangle animate delay2" : "triangle"}
        style={{ fill: gamboge }}
      />
      <BsTriangleFill
        className={aboutActive ? "triangle animate delay3" : "triangle"}
        style={{ fill: seasalt }}
      />
      <BsTriangleFill
        className={aboutActive ? "triangle animate delay4" : "triangle"}
        style={{ fill: gamboge }}
      />
    </div>
  );
};

export default TriangleTransition;
