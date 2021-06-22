import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";

const MyFields = ({ values }) => {
  const [article, setArticle] = useState(values[1]);
  const [quantity, setQuantity] = useState(values[2]);
  const [cubic, setCubic] = useState(values[3]);

  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <Paper
          style={{
            padding: "17px",
            maxWidth: 200,
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {article}
        </Paper>
      </Grid>
      <Grid item xs>
        <TextField
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          id="filled-number"
          label="Quantity"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      </Grid>
      <Grid item xs>
        <TextField
          onChange={(e) => setCubic(e.target.value)}
          id="filled-number"
          label="Value"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      </Grid>
      <Grid item xs>
        <TextField
          value={quantity * cubic}
          id="filled-number"
          label="Result"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          InputProps={{ readOnly: true }}
        />
      </Grid>
    </Grid>
  );
};
export default MyFields;
