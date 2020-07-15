import React from 'react'
import Header from "./header"
const About=()=>{
        return(
            <React.Fragment>
                <Header/>
                <div className="about">
                    <img className="aimage" src="../images/mainlogo.jpg"></img>
                </div>
                <div className="atext">
                    Hi, I have made this site to help people who are often confused buying phone as there are various braands, lots of specification etc.
                    The user just has to answer few daily life question and according to that best value of money smartphone will be displayed.This website completly made using React,Bootstrap and JSon and no backend Server
                    <div className="imp">
                        Note:- The website is not fully optimized for mobile platform,so if possible please try to use it on Desktop(Dont use desktop mode on mobile as there is some bug).There might be some bugs or css issue so i need your help via the feedback page.Please try to select wide range of 5-10k as the there is less data on smartphones ,I am constantly filling out data but it may take time.Thanks...
                    </div>
                    <div className="prasad">Made By:-Prasad Mascarenhas</div>
                </div>
                
            </React.Fragment>
        )
}
export default About;