import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MyFields from "./MyFields";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: 20,
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#038CCF",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    color: "white",
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

export default function MyAccordion({ article, data, key, UpdateData }) {
  const classes = useStyles();

  const [values, setValues] = useState([]);
  const [d, setD] = useState("");
  const [up, setUp] = useState(0);

  const showFields = values.filter((x) => x.id != article.id);

  return (
    <div className={classes.root} key={article.id}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {article.category}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ flexGrow: 1 }}>
            <Grid container alignItems="center" style={{ marginBottom: 20 }}>
              <Grid xs={10}>
                <TextField
                  value={d}
                  id="standard-basic"
                  className="inp"
                  label="Add your article"
                  onChange={(e) => {
                    setD(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    let t = values;
                    d != "" && t.push([article.id, d, 0, 0]);
                    d != "" && setValues(t);
                    d != "" && setUp(up + 1);
                    d != "" && setD("");
                  }}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
            {/* <Grid container spacing={3}>
              <Grid item xs>
                <Paper
                  style={{
                    padding: "10px",
                    background: "#3F51B5",
                    color: "white",
                    fontSize: 13,
                  }}
                >
                  ARTICLE
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper
                  style={{
                    padding: "10px",
                    background: "#3F51B5",
                    color: "white",
                    fontSize: 13,
                  }}
                >
                  QUANTITY
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper
                  style={{
                    padding: "10px",
                    background: "#3F51B5",
                    color: "white",
                    fontSize: 13,
                  }}
                >
                  CUBIC FEET{" "}
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper
                  style={{
                    padding: "10px",
                    background: "#3F51B5",
                    color: "white",
                    fontSize: 13,
                  }}
                >
                  QTY X CFT
                </Paper>
              </Grid>
            </Grid> */}
            {showFields && showFields.map((x, key) => <MyFields values={x} />)}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
