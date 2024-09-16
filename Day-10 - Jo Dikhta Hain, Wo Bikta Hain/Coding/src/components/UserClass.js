import React  from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo : {
                name: "Dummy",
                Location: "Dummy",
            }
        }
        // console.log(this.props.name + "Child Construtor");
    }

    componentDidMount(){
        // console.log(this.props.name + "Child Mounted");

        // const data =  await fetch('https://api.github.com/users/Bipul777-artist');
        // console.log(this.props.name + "API Called");

        // const jsonData = await data.json();

        // this.setState({
        //     userInfo : jsonData
        //     })
        
        // console.log(this.props.name + "State Variable Value Changed");

        this.timer = setInterval (() => {
            console.log("Class Based Component Revision")
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Class Based Component Revision Done");
    }
    

    render() {

        // console.log(this.props.name + "Child Render");

        const { location} = this.props;
        const { avatar_url, name, company} = this.state.userInfo;


        return (
            <div className="user-section">
                <img src = {avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {company}</h3>
                <h4>Contact: 13318253</h4>
            </div>
        )
    }
}

export default UserClass;