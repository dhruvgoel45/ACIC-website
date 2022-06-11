import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material";
import Button from "@mui/material/Button";

const Tourcard = ({ compan }) => {
  return (
    <Grid item xs={3}>
      <Paper elevation={20}>
        <img src={compan.image} alt="" width={220} />
        <box paddingX={1}>
          <Typography component="h2" variant="h4" align="center">
            {compan.name}
          </Typography>
          <Box
            SX={{
              display: "flex",
              alignments: "center",
            }}
          >
            <Typography align="center">
              <Button variant="contained" paddingBottom={20}>
                KNOW MORE
              </Button>
            </Typography>
          </Box>{" "}
        </box>{" "}
      </Paper>{" "}
    </Grid>
  );
};

export default Tourcard;
