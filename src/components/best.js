import React from "react";
import Header from "./header";
import phone from "../data/phones.json";
import ReactTooltip from "react-tooltip";

import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";

import AnimatedProgressProvider from "./AnimatedProgressProvider";

import "react-circular-progressbar/dist/styles.css";

const Out = (props) => {
  const data = phone.phones;
  const value = [...props.val];
  var output = [];
  var first;
  var second;
  var third;
  var score = [];
  const handleLogic = () => {
    // console.log(value)
    // console.log(data)
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (value[i] === data[j].id) {
          score.push(data[j].score);
        }
      }
    }

    for (let size = 0; size < 3; size++) {
      var max = 0;
      for (let c = 0; c < score.length; c++) {
        if (score[c] > max) {
          max = score[c];
        }
      }
      let index = score.indexOf(max);
      score[index] = 0;
      output.push(value[index]);
    }
    console.log(output);
  };
  const handleJson = () => {
    handleLogic();
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === output[0]) {
        first = data[i];
      }
      if (data[i].id === output[1]) {
        second = data[i];
      }
      if (data[i].id === output[2]) {
        third = data[i];
      }
    }
  };

  handleJson();

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-3  offset-md-1 padding-0">
          <div className="box side">
            <div className="header">3rd</div>
            <div className="imgdiv">
              <img className="img_side" src={third.image} />
            </div>
            <div className="name">{third.name}</div>
            <div className="divider "></div>
            <div className="list side">
              <div className="key">Key Features</div>
              {third.comment.map((data, index) => (
                <div className="feature side" key={index}>
                  <img src="../images/correct.svg" className="svg" />
                  {data}
                </div>
              ))}
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={(third.score / 50) * 100}
                duration={1.4}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      className="cir"
                      value={value}
                      text={`${roundedValue}`}
                      styles={buildStyles({
                        pathTransition: "none",
                        pathColor: "#00008B",
                        textColor: "#1C1C1BFF",
                        textSize: "30px",
                      })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
              <div className="spec">
              <div className="specscore">SpecScore</div>
              <i
                class="fa fa-question-circle"
                data-tip="Pre-generated score defined by user reviews "
                style={{ width: "24px" }}
              />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 padding-0">
          <div className="box first">
            <div className="header">1st</div>
            <div className="imgdiv">
              <img className="img_mid" src={first.image} />
            </div>
            <div className="name">{first.name}</div>
            <div className="divider  mid"></div>
            <div className="list mid ">
              <div className="key">Key Features</div>

              {first.comment.map((data, index) => (
                <div className="feature mid" key={index}>
                  <img src="../images/correct.svg" className="svg" />
                  {data}
                </div>
              ))}
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={(first.score / 50) * 100}
                duration={3.4}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      className="cir mid"
                      value={value}
                      text={`${roundedValue}`}
                      styles={buildStyles({
                        pathTransition: "none",
                        pathColor: `	#000000`,
                        textColor: "#1C1C1BFF",
                        textSize: "30px",
                      })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
              <div className="spec">
              <div className="specscore">SpecScore</div>
              <i
                class="fa fa-question-circle"
                data-tip="Pre-generated score defined by user reviews "
                style={{ width: "24px" }}
              />
              
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3  padding-0">
          <div className="box">
            <div className="header">2nd</div>
            <div className="imgdiv">
              <img className="img_side" src={second.image} />
            </div>
            <div className="name">{second.name}</div>
            <div className="divider"></div>
            <div className="list side">
              <div className="key">Key Features</div>

              {second.comment.map((data, index) => (
                <div className="feature side" key={index}>
                  <img src="../images/correct.svg" className="svg" />
                  {data}
                </div>
              ))}
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={(second.score / 50) * 100}
                duration={1.4}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      className="cir"
                      value={value}
                      text={`${roundedValue}`}
                      styles={buildStyles({
                        pathTransition: "none",
                        pathColor: "#00008B",
                        textSize: "30px",
                        textColor: "#1C1C1BFF",
                      })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
              <div className="spec">
              <div className="specscore">SpecScore</div>
              <i
                class="fa fa-question-circle"
                data-tip="Pre-generated score defined by user reviews "
                style={{ width: "24px" }}
              />
              <ReactTooltip />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
class Best extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container-fluid disp">
          <Out val={this.props.location.state.val} />
        </div>
      </React.Fragment>
    );
  }
}

export default Best;
