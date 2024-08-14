# Namaste React 

/* Header
//   -- Logo 
//      -- Nav Items
//  * Body
//      -- menu
//      -- Restaurant Container
            // -- Restaurant Cards
                    -- Img
                    -- Name, Description, ETA, Rating.
//    * Footer
        // -- Copy rights
        // -- links
        ---   Address and Contact
*/

Two types of Import/Export

- Default Import/Export

export default component_name;
import component_name from "path"

- Named import/export

export component_name;
import {component_name} from "path"


# Parcel 

    -Dev Build
    - Local Server
    - HMR = Hot Modue Reload
    - File Watching Algo - Written in C++
    - Caching - Faster Build
    -  Image Optimisation
    - Minification
    - Bundling
    - Compress
    - Consistent Hashing (Read more about this)
    - Code Splitting
    - Differential Bundling - Support Older Version
    - Diagnostic
    - Error Handling
    - Hosting on HTTPS 
    - Tree Shaking - Remove Unused Code
    - Different dev and prod bundles


# React Hooks
 -- Normal JS Utility Functions
 -- UseState()
 -- UseEffect()
 

# Redux ToolKit
 - Install @reduxjs/toolkit and react-redux
 - Build Our Store
 - Connect store to app
 - Slice (Cart Slice)
 - Dispatch (Action)
 - Subscribe To Store (Selector)


#- Set Up Testing in Our App 

- Install React Testing Library
- Install Jest
- Instal Babel dependencies
- Configure Babel
- Configure Parcel Config File to disable default babel transpilation which is being used by Parcel. 
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - To make JSX work in test cases.
- Include @babel/preset-react inside Babel config 
- Import screen and render as named import from RTL
- Install @testing-library/jest-dom
- Import "@testing-library/jest-dom"
