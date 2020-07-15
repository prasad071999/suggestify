import React, { Component } from "react";
import Header from "./header";
import { Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {
  FirstFront,
  FifthBack,
  SecondFront,
  SecondBack,
  ThirdFront,
  ThirdBack,
  FourthFront,
  FourthBack,
  FifthFront,
  FirstBack,
} from "./first";
import ReactCardFlip from "react-card-flip";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      count:0,
      isHidden:true,
      firstDone:0,
      secondDone:0,
      thirdDone:0,
      fourthDone:0,
      fifthDone:0,
      isFlipped: false,
      first: "",
      second: "",
      third: "",
      fourth: "",
      fifth: "",
      arrayvar: [],
      misc:[],
      display:"",
      gaming:"",
      battery_charg:"",
      looks_dur:"",
      camera:""


    };
    this.handleClick = this.handleClick.bind(this);
  }
  submit = () => {
    confirmAlert({
      title: 'Please Select your preferences',
      message: 'If not selected default value will be added',
      buttons: [
        {
          label: 'I agree',
          // onClick: () => alert('Click Yes')
        },
        
      ]
    });
  };
  componentDidUpdate() {
    console.log(this.state.count)
   
  }
  handleClick(e) {
    if (this.state.count>=4) {
      this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
      this.setState((prevState) => ({ isHidden: !prevState.isHidden }));
      this.submit();
    }
    
  }
 

  changeFirst = (value) => {
   
    
    this.setState({
      first: value,
    });
    this.setState((prevState) => ({
      arrayvar: [...prevState.arrayvar, value],
    }));
    if(this.state.firstDone===0){
      this.setState({
        firstDone:1,
        count:this.state.count+1
        
      })
      this.handleClick()
      //console.log("ran")
    }
    //this.handleClick()
    //console.log(this.state.count)
   
  };
  changeSecond = (value) => {
    if(this.state.secondDone===0){
      this.setState({
        secondDone:1,
        count:this.state.count+1
      })
      this.handleClick()
     // console.log("ran")
    }
    this.setState({
      second: value,
    });
    this.setState((prevState) => ({
      
      arrayvar: [...prevState.arrayvar, value],
    }));
    //this.handleClick()
   
   // console.log(this.state.count)
  };
  changeThird = (value) => {
    if(this.state.thirdDone===0){
      this.setState({
        thirdDone:1,
        count:this.state.count+1
      })
      this.handleClick()
      //console.log("ran")
    }
    this.setState({
      third: value,
    });
    this.setState((prevState) => ({
      arrayvar: [...prevState.arrayvar, value],
    }));
   // this.handleClick()
    
   // console.log(this.state.count)
  };
  changeFourth = (value) => {
    if(this.state.fourthDone===0){
      this.setState({
        fourthDone:1,
        count:this.state.count+1
      })
      //console.log("ran")
      this.handleClick()
    }
    this.setState({
      fourth: value,
    });
    this.setState((prevState) => ({
      arrayvar: [...prevState.arrayvar, value],
    }));
    
   
   // console.log(this.state.count)
  };
  changeFifth = (value) => {
    if(this.state.fifthDone===0){
      this.setState({
        fifthDone:1,
        count:this.state.count+1
      })
      this.handleClick()
      //console.log("ran")
    }
    this.setState({
      fifth: value,
    });
    this.setState((prevState) => ({
      arrayvar: [...prevState.arrayvar, value],
    }));
    
    
   // console.log(this.state.count)
  };
  feature1=(value)=>{
    this.setState({
      display: value,
    });
    
  }
  feature2=(value)=>{
    this.setState({
      gaming: value,
    });
    
  }
  feature3=(value)=>{
    this.setState({
      looks_dur: value,
    });
    
  }
  feature4=(value)=>{
    this.setState({
      battery_charg: value,
    });
    
  }
  feature5=(value)=>{
    this.setState({
      camera: value,
    });
  
  }

  
  render() {
    return (
      
      <div className="dip">
        <Header />
        
        <div className="container main">
          <i>
            <h2  className="bheader" align="center">
              Select the options as per your preference
            </h2>
          </i>
          <div className="row">
            <div className="col-sm-9 col-md-4 ">
              <ReactCardFlip
                class="flip"
                isFlipped={this.state.isFlipped}
                flipDirection="horizontal"
                flipSpeedBackToFront={1}
              >
                <FirstFront data={this.changeFirst.bind(this)} />
                <FirstBack data={this.state.first} feature={this.feature1}/>
              </ReactCardFlip>
            </div>
            <div className="col-sm-9 col-md-4 ">
              <ReactCardFlip
                isFlipped={this.state.isFlipped}
                flipDirection="horizontal"
                flipSpeedBackToFront={1}
              >
                <SecondFront data={this.changeSecond.bind(this)} />
                <SecondBack data={this.state.second} feature={this.feature2}/>
              </ReactCardFlip>
            </div>
            <div className="col-sm-9 col-md-4">
              <ReactCardFlip
                isFlipped={this.state.isFlipped}
                flipDirection="horizontal"
                flipSpeedBackToFront={1}
              >
                <ThirdFront data={this.changeThird.bind(this)} />
                <ThirdBack data={this.state.third} feature={this.feature3} />
              </ReactCardFlip>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9 col-md-4 offset-md-2">
              <ReactCardFlip
                isFlipped={this.state.isFlipped}
                flipDirection="horizontal"
                flipSpeedBackToFront={1}
              >
                <FourthFront data={this.changeFourth.bind(this)} />
                <FourthBack data={this.state.fourth} feature={this.feature4} />
              </ReactCardFlip>
            </div>
            <div className="col-sm-9 col-md-4">
              <ReactCardFlip
                isFlipped={this.state.isFlipped}
                flipDirection="horizontal"
                flipSpeedBackToFront={1}
              >
                <FifthFront data={this.changeFifth.bind(this)} />
                <FifthBack data={this.state.fifth} feature={this.feature5} />
              </ReactCardFlip>
            </div>
            
          </div>
          <div className="link">
          {
           !this.state.isHidden && <div className="button_cont " align="center">
           <Link
             className="example_e"
             to={{
               pathname: "/display",
            state: {
              val:this.props.location.state.val,
              arr:this.state.arrayvar,
              display:this.state.display,
              camera:this.state.camera,
              looks_dur:this.state.looks_dur,
              gaming:this.state.gaming,
              battery_charg:this.state.battery_charg
            },
             }}
           >
             Lets Go
           </Link>
         </div>
          }
          
        </div>
        </div>
      </div>
    );
  }
}

export default Body;
