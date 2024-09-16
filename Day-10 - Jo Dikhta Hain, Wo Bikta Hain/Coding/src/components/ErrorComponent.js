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

// import React, { useState } from 'react';

// function MyButton({ buttonText, dropdownId }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleDropdownClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
        
//       <button onClick={handleDropdownClick}>
//         {isOpen ? null : buttonText}
//       </button>
//       {isOpen && (
//         <div>
//           {/* Render your dropdown content here */}
//           Dropdown content for {dropdownId}
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyButton;
