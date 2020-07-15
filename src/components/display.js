import React from "react";
import Header from "./header";
import phone from "../data/phones.json";
import ReactTooltip from "react-tooltip";


import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";

import AnimatedProgressProvider from "./AnimatedProgressProvider";

import "react-circular-progressbar/dist/styles.css";

const Outer = (props) => {
  const data = phone.phones;
  const val = [...props.val];
  const arr = [...props.arr];
  var output = [];
  var first;
  var second;
  var third;
  var score2 = [];
  const handleLogic = () => {
    var sum = 0;
    var score = [];

    for (let i = 0; i < val.length; i++) {
      sum = 0;
      for (let j = 0; j < data.length; j++) {
        if (val[i] === data[j].id) {
          if (arr.includes("display")) {
            if (props.disp === data[j].display.type) {
              sum = sum + (data[j].display.score + 1);
            } else {
              sum = sum + data[j].display.score;
            }
          }
          if (arr.includes("gaming")) {
            if (props.gam === data[j].gaming.type) {
              sum = sum + (data[j].gaming.score + 1);
            } else {
              sum = sum + data[j].gaming.score;
            }
          }
          if (arr.includes("battery_charg")) {
            if (props.bat === data[j].battery_charg.type) {
              sum = sum + (data[j].battery_charg.score + 1);
            } else {
              sum = sum + data[j].battery_charg.score;
            }
          }
          if (arr.includes("camera")) {
            if (props.cam === data[j].camera.type) {
              sum = sum + (data[j].camera.score + 1);
            } else {
              sum = sum + data[j].camera.score;
            }
          }
          if (arr.includes("looks_dur")) {
            if (props.dur === data[j].looks_dur.type) {
              sum = sum + (data[j].looks_dur.score + 1);
            } else {
              sum = sum + data[j].looks_dur.score;
            }
          }
        }
      }
      score.push(sum);
    }

    for (let size = 0; size < 3; size++) {
      var max = 0;
      for (let c = 0; c < score.length; c++) {
        if (score[c] > max) {
          max = score[c];
        }
      }
      score2.push(max);
      let index = score.indexOf(max);
      score[index] = 0;
      output.push(val[index]);
    }
    
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
                valueEnd={(score2[2] / 80) * 100}
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
                      /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({ pathTransition: "none",pathColor:'#00008B',textColor:'#1C1C1BFF',textSize:'30px'
                    })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
              <img
          className="smarticon"
          src="../images/logo.PNG"
          alt="smartscore"
        /><i class="fa fa-question-circle" data-tip="Smartscore is obtained using question answered by user" style={{width:"24px"}}/>
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
                valueEnd={(score2[0] / 80) * 100}
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
                      /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({ pathTransition: "none",pathColor: `	#000000`,textColor:'#1C1C1BFF',textSize:'30px' })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
              <img
          className="smarticon"
          src="../images/logo.PNG"
          alt="smartscore"
        /><i class="fa fa-question-circle" data-tip="Smartscore is obtained using question answered by user" style={{width:"24px"}}/>
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
                valueEnd={(score2[1] / 80) * 100}
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
                      /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({ pathTransition: "none",pathColor:'#00008B',textSize:'30px',textColor:'#1C1C1BFF' })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
              <img className="smarticon"
          
          src="../images/logo.PNG"
          alt="smartscore"
        /><i class="fa fa-question-circle" data-tip="Smartscore is obtained using question answered by user" style={{width:"24px"}}/>
        <ReactTooltip/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
class Display extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container-fluid disp ">
          <Outer
            val={this.props.location.state.val}
            arr={this.props.location.state.arr}
            disp={this.props.location.state.display}
            cam={this.props.location.state.camera}
            bat={this.props.location.state.battery_charg}
            dur={this.props.location.state.looks_dur}
            gam={this.props.location.state.gaming}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Display;

