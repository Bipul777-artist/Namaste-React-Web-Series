import { useEffect } from "react";



const User = ({name, location}) => {

    useEffect(() => {
        const timer =  setInterval(() => {
            console.log("FC Revision");
        }, 1000)

        return () => {
            clearInterval(timer);
            console.log("FC Revision Done");
        }

    }, [])

    return (
        <div className="user-section">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: 13318253</h4>
            
        </div>
    )
}

export default User;