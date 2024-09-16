
import User  from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);

        // console.log("Parent Construtor");

    }

    async componentDidMount(){
        // console.log("Parent Mounted");

    }

    componentDidUpdate() {
        // console.log("Parent Component Updated");
    }

    componentDidUpdate() {
        // console.log(this.props.name + " Component Updated")

        // this.timer = setInterval(() => {
        //     console.log("Class Based Component Revision");
        // }, 1000);

    }

    


    render(){

        // console.log("Parent Render");

        return (
            <div>
                <h1>About Section</h1>
    
                <User name ={"Frontend Developer"} location ={"Product Base Company"}/>
                {/* <UserClass name ={"Frontend Developer"} location ={"Start-Up"} /> */}
                
            </div>
        )
    }
}

export default About;