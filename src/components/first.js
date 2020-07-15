import React from "react";
import {
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

class FirstFront extends React.Component {
  handleChange = (event) => {
    event.preventDefault();
    const first = event.target.value;
    this.props.data(first);
  };

  render() {
    return (
      <div className="card border-white text-dark">
        <form>
          <div className="card-header">Do you Watch Movies/Shows</div>
          <div className="card-body">
            <div className="form-group">
              <FormControl component="fieldset">
                <RadioGroup onChange={this.handleChange}>
                  <FormControlLabel value="display" control={<Radio />} label="Yes" />
                  <FormControlLabel value="0" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
class FirstBack extends React.Component {
  handleChangeStudent=(event)=> {
    event.preventDefault();
    const disp = event.target.value;
    this.props.feature(disp);
  }
  render() {
    if (this.props.data === "display") {
      return (
        <div className="card border-white text-dark">
          <form>
            <div className="card-header">What do you do  mostly?</div>
            <div className="card-body">
              <div className="form-group">
                <FormControl component="fieldset">
                  <RadioGroup onChange={this.handleChangeStudent.bind(this)}>
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Movies"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Gaming"
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="Gaming and Movies"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return <div className="card"><img  className="fimg" src="../images/mainlogo.jpg"/></div>;
    }
  }
}
class SecondFront extends React.Component {
  handleChangegame = (event) => {
    event.preventDefault();
    const second = event.target.value;
    this.props.data(second);
  };

  render() {
    return (
      <div className="card border-white text-dark">
        <form>
          <div className="card-header">Are you Gamer?</div>
          <div className="card-body">
            <div className="form-group">
              <FormControl component="fieldset">
                <RadioGroup onChange={this.handleChangegame}>
                  <FormControlLabel value="gaming" control={<Radio />} label="Yes" />
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="Nahh"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
class SecondBack extends React.Component {
  handleChangegame = (value) => {
    value.preventDefault();
    const game = value.target.value;
    this.props.feature(game);
  };

  render() {
    if (this.props.data === "gaming") {
      return (
        <div className="card border-white text-dark">
          <form>
            <div className="card-header">Which Game do you play</div>
            <div className="card-body">
              <div className="form-group">
                <FormControl component="fieldset">
                  <RadioGroup onChange={this.handleChangegame}>
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="PUBG/COD Mobile"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Candy Crush/Subway Surfers"
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="Indie Games"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return <div className="card"><img  className="fimg" src="../images/mainlogo.jpg"/></div>;
    }
  }
}
class ThirdFront extends React.Component {
  handleChangelooks = (event) => {
    event.preventDefault();
    const third = event.target.value;
    this.props.data(third);
  };

  render() {
    return (
      <div className="card border-white text-dark">
        <form>
          <div className="card-header">
           Looks  and durability ?
          </div>
          <div className="card-body">
            <div className="form-group">
              <FormControl component="fieldset">
                <RadioGroup onChange={this.handleChangelooks}>
                  <FormControlLabel value="looks_dur" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
class ThirdBack extends React.Component {
  handleChangegame = (value) => {
    value.preventDefault();
    const dur = value.target.value;
    this.props.feature(dur);
  };

  render() {
    if (this.props.data === "looks_dur") {
      return (
        <div className="card border-white text-dark">
          <form>
            <div className="card-header">Select One ?</div>
            <div className="card-body">
              <div className="form-group">
                <FormControl component="fieldset">
                  <RadioGroup onChange={this.handleChangegame}>
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Better Looks"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Better Durability"
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="Both"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return <div className="card"><img  className="fimg" src="../images/mainlogo.jpg"/></div>;
    }
  }
}
class FourthFront extends React.Component {
  handleChangebat = (event) => {
    event.preventDefault();
    const fourth = event.target.value;
    this.props.data(fourth);
  };

  render() {
    return (
      <div className="card border-white text-dark">
        <form>
          <div className="card-header">
             Battery and Charging speed ?
          </div>
          <div className="card-body">
            <div className="form-group">
              <FormControl component="fieldset">
                <RadioGroup onChange={this.handleChangebat}>
                  <FormControlLabel value="battery_charg" control={<Radio />} label="Yes" />
                  <FormControlLabel value="0" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
class FourthBack extends React.Component {
  handleChangegame = (value) => {
    value.preventDefault();
    const bat = value.target.value;
    this.props.feature(bat);
  };

  render() {
    if (this.props.data === "battery_charg") {
      return (
        <div className="card border-white text-dark">
          <form>
            <div className="card-header">Select one</div>
            <div className="card-body">
              <div class="form-group">
                <FormControl component="fieldset" >
                  <RadioGroup onChange={this.handleChangegame} className="radio">
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="I do more gaming"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Net surfing/Social Media"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Smartphone use is averge"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return <div className="card"><img  className="fimg" src="../images/mainlogo.jpg"/></div>;
    }
  }
}
class FifthFront extends React.Component {
  handleChangecamera = (event) => {
    event.preventDefault();
    const fifth = event.target.value;
    this.props.data(fifth);
  };

  render() {
    return (
      <div className="card border-white text-dark">
        <form>
          <div className="card-header">Camera(Main)?</div>
          <div className="card-body">
            <div className="form-group">
              <FormControl component="fieldset">
                <RadioGroup onChange={this.handleChangecamera}>
                  <FormControlLabel value="camera" control={<Radio />} label="Yes" />
                  <FormControlLabel value="0" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
class FifthBack extends React.Component {
  handleChangegame = (value) => {
    value.preventDefault();
    const cam = value.target.value;
    this.props.feature(cam);
  };

  render() {
    if (this.props.data === "camera") {
      return (
        <div className="card border-white text-dark">
          <form>
            <div className="card-header">Rate your Camera Usage</div>
            <div className="card-body">
              <div className="form-group">
                <FormControl component="fieldset">
                  <RadioGroup onChange={this.handleChangegame}>
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Pro"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Mediocore"
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="Low"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return <div className="card"><img  className="fimg" src="../images/mainlogo.jpg"/></div>;
    }
  }
}
//to work if necessary
// class SixthFront extends React.Component {
//   handleChangegame = (value) => {
//     console.log(value.target.value);
//   };

//   render() {
//     return (
//       <div className="card border-dark text-dark">
//         <form>
//           <div className="card-header">Please Select any of these features</div>
//           <div className="card-body">
//             <div className="form-group">
//               <FormControl component="fieldset">
//                 <RadioGroup onChange={this.handleChangegame}>
//                   <FormControlLabel
//                     value="2"
//                     control={<Radio />}
//                     label="Full View Display"
//                   />
//                   <FormControlLabel
//                     value="1"
//                     control={<Radio />}
//                     label="High Refresh Rate Panel"
//                   />
//                   <FormControlLabel
//                     value="0"
//                     control={<Radio />}
//                     label="Selfie"
//                   />
//                 </RadioGroup>
//               </FormControl>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
// class SixthBack extends React.Component {
//   handleChangegame = (value) => {
//     console.log(value.target.value);
//   };

//   render() {
//     return (
//       <div className="card border-white text-dark">
//         <form>
//           <div className="card-header">Please Select any of these features</div>
//           <div className="card-body">
//             <div className="form-group">
//               <FormControl component="fieldset">
//                 <RadioGroup onChange={this.handleChangegame}>
//                   <FormControlLabel
//                     value="2"
//                     control={<Radio />}
//                     label="Quad Array Camera"
//                   />
//                   <FormControlLabel
//                     value="1"
//                     control={<Radio />}
//                     label="NFC/IR"
//                   />
//                   <FormControlLabel
//                     value="0"
//                     control={<Radio />}
//                     label="Dolby/Stero Speakers/Audio Quality"
//                   />
//                 </RadioGroup>
//               </FormControl>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export {
  FirstBack,
  FirstFront,
  SecondFront,
  SecondBack,
  ThirdBack,
  ThirdFront,
  FourthBack,
  FourthFront,
  FifthBack,
  FifthFront
};
