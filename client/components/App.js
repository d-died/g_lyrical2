import React from "react";

// We kept this component very bare. 
// Looking back at SongList -- if the browser is showing the IndexRoute component, 
// it will pass down the props of SongList into the App component as "children"
// and display those props in this App component
export default ({ children }) => {
    return <div className="container">{ children }</div>
};