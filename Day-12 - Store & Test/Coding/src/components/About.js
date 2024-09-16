
import User  from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

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
            <div className=" text-center ml-10 border-2 border-rounded p-4">
                <h1 className=" font-semibold">About Section</h1>
    
                <User name ={"Frontend Developer"} location ={"Product Base Company"}/>
                <div>
                    <UserContext.Consumer>

                        {({loggedInUser}) => <h1>LoggedInUser: {loggedInUser}</h1>}

                    </UserContext.Consumer>
                    
                </div>
                {/* <UserClass name ={"Frontend Developer"} location ={"Start-Up"} /> */}
                
            </div>
        )
    }
}

export default About;