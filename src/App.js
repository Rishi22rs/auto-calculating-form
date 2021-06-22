import { useState } from "react";
import "./App.css";

import TextField from "@material-ui/core/TextField";

import MyAccordion from "./components/MyAccordion";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function App() {
  const [up, setUp] = useState(0);
  const [data, setData] = useState([]);

  const UpdateData = (recvData) => {
    setData(recvData);
    setUp(up + 2);
  };

  console.log(data);
  let tempArt = "";
  let tempData = data;
  return (
    <>
      <div className="App">
        <h1 className="heading">Auto Calculating Form</h1>
        <Grid container alignItems="center" style={{ marginBottom: 20 }}>
          <Grid xs={10}>
            <TextField
              id="standard-basic"
              className="inp"
              label="Add your category"
              onChange={(e) => {
                tempArt = e.target.value;
              }}
            />
          </Grid>
          <Grid xs={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                tempArt != "" &&
                  tempData.push({
                    id: up,
                    category: tempArt,
                  });
                tempArt != "" && setData(tempData);
                tempArt != "" && setUp(up + 1);
              }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
        <div className="accordion-container">
          {data &&
            data.map((x, key) => (
              <div style={{ marginBottom: 4 }}>
                <MyAccordion
                  article={x}
                  data={data}
                  setData={setData}
                  UpdateData={UpdateData}
                />
              </div>
            ))}
        </div>
      </div>
      {data.length > 0 && (
        <div className="pdf-container">
          <Button
            variant="contained"
            color="primary"
            style={{ display: "flex" }}
            onClick={() => window.print()}
          >
            Save as PDF
          </Button>
        </div>
      )}
    </>
  );
}

export default App;
