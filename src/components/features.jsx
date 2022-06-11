import Startups from "../data/Startups.json";
import Tourcard from "./tourcard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Nurtured Startups</h2>
        </div>
        <Container>
          {Startups.map((Startup) => (
            <>
              <Grid container spacing={5}>
                {Startup.company.map((compan, index) => (
                  <Tourcard compan={compan} key={index} />
                ))}
              </Grid>
            </>
          ))}
        </Container>
      </div>
    </div>
  );
};
