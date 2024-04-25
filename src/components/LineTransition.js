import { pennRed, kellyGreen, gamboge, moonstone, seasalt } from "../Constants";
import "./LineTransition.scss";

const LineTransition = ({ servicesActive }) => {
  return (
    <div className="animationContainer">
      <div
        className={
          servicesActive ? "line line1 left animate" : "line line1 left"
        }
      />
      <div
        className={
          servicesActive ? "line line2 right animate delay" : "line line2 right"
        }
      />
      <div
        className={
          servicesActive ? "line line3 left animate delay2" : "line line3 left"
        }
      />
      <div
        className={
          servicesActive ? "line line4 right animate delay" : "line line4 right"
        }
      />
      <div
        className={
          servicesActive ? "line line5 left animate delay1" : "line line5 left"
        }
      />
      <div
        className={
          servicesActive
            ? "line line6 right animate delay3"
            : "line line6 right"
        }
      />
      <div
        className={
          servicesActive ? "line line7 left animate delay4" : "line line7 left"
        }
      />
      <div
        className={
          servicesActive
            ? "line line8 right animate delay3"
            : "line line8 right"
        }
      />
      <div
        className={
          servicesActive ? "line line9 left animate delay1" : "line line9 left"
        }
      />
      <div
        className={
          servicesActive
            ? "line line10 right animate delay2"
            : "line line10 right"
        }
      />
    </div>
  );
};

export default LineTransition;
