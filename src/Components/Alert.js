import React from "react";

function Alert(props) {
  return (
props.Alert &&
    <>
    
      <div>
        <div
        className={`alert alert-${props.Alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {props.Alert.type} : {props.Alert.msg}
          
        </div>
      </div>
    </>
  );
}

export default Alert;
