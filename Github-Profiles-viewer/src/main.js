import react, {  useCallback, useEffect, useState } from "react";
import reactDom from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

function GithubProfile(){
  return(
    <div>
      <Header/>
      <Body/>
    </div>
  )
}


reactDom.createRoot(document.getElementById("root")).render(<GithubProfile />);
