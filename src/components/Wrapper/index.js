import React from "react";


function Wrapper(props) {
  return <main className="wrapper bg-primary">{props.children}</main>;
}

export default Wrapper;
