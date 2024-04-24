import { pennRed, kellyGreen, gamboge, moonstone, seasalt } from "../Constants";
import "./LineTransition.scss";

const LineTransition = ({ servicesActive }) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <div className={servicesActive ? "line line1 animate" : "line line1"} />
      <div
        className={servicesActive ? "line line2 animate delay" : "line line2"}
      />
      <div
        className={servicesActive ? "line line3 animate delay2" : "line line3"}
      />
      <div
        className={servicesActive ? "line line4 animate delay3" : "line line4"}
      />
      <div
        className={servicesActive ? "line line5 animate delay4" : "line line5"}
      />
      <div
        className={servicesActive ? "line line6 animate delay4" : "line line6"}
      />
      <div
        className={servicesActive ? "line line7 animate delay4" : "line line7"}
      />
      <div
        className={servicesActive ? "line line8 animate delay4" : "line line8"}
      />
      <div
        className={servicesActive ? "line line9 animate delay4" : "line line9"}
      />
      <div
        className={
          servicesActive ? "line line10 animate delay4" : "line line10"
        }
      />
    </div>
  );
};

export default LineTransition;
