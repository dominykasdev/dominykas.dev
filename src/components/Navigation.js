import "./Navigation.scss";
import { Button } from "@mui/material";

const Navigation = ({
  homeFunc,
  aboutFunc,
  serviceFunc,
  portfolioFunc,
  contactFunc,
}) => {
  return (
    <div className="navigation">
      <Button variant="outlined" onClick={homeFunc}>
        Home
      </Button>
      <Button variant="outlined" onClick={aboutFunc}>
        About
      </Button>
      <Button variant="outlined" onClick={serviceFunc}>
        Services
      </Button>
      <Button variant="outlined" onClick={portfolioFunc}>
        Portfolio
      </Button>
      <Button variant="outlined" onClick={contactFunc}>
        Contact
      </Button>
    </div>
  );
};

export default Navigation;
