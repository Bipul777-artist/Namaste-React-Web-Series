import {useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="error-page">
            <h1>Oops!!!</h1>
            <h2>Here's the cute kitten for you 😺
                Incase, you feel lost.
            </h2>
            <h3>
                {err.status} = {err.statusText}
            </h3>
        </div>
        
    )
};

export default Error;