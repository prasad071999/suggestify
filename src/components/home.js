import React from "react";
import Header from "./header";
import { Slider, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import phone from "../data/phones.json";
import Footer from "./footer ";

const Home = () => {
  const [value, setValue] = React.useState([10, 20]);
  const data = phone.phones;
  const arr = new Set();
  const handleChangebudget = (event, newValue) => {
    setValue(newValue);
    let i,
      a = value[0],
      b = value[1];
    let min = Math.min(a, b);
    let max = Math.max(a, b);

    for (i = 0; i < data.length; i++) {
      if (data[i].cost >= min && data[i].cost < max) {
        arr.add(data[i].id);
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="container main">
        <h1 className="bname">Select your Budget</h1>
        <div className="main2">
          <Grid container spacing={3} id="slide">
            <Grid item>
              <h4 className="sname">5k</h4>
            </Grid>
            <Grid item xs>
              <Slider
                value={value}
                onChange={handleChangebudget}
                valueLabelDisplay="auto"
                min={5}
                max={50}
                aria-labelledby="range-slider"
              />
            </Grid>
            <Grid item>
              <h4 className="sname">45K+</h4>
            </Grid>
          </Grid>
        </div>
        <div className="buttons container">
          <div className="btn">
            <div className="button_cont" align="center">
              <Link
                className="example_e"
                onClick={handleChangebudget}
                to={{
                  pathname: "/best",
                  state: {
                    val: arr,
                  },
                }}
              >
                Best in Range
              </Link>
            </div>
          </div>
          <div className="button_cont" align="center">
            <Link
              onClick={handleChangebudget}
              className="example_e"
              to={{
                pathname: "/body",
                state: {
                  val: arr,
                },
              }}
            >
              Give me more option
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
