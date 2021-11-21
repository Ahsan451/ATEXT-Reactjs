import React from "react";

export default function Alert(props) {

    // to capitalize the first letter of the first word of alert
    const capitalize = (word) => {
        const aWord = word.toLowerCase();
        return aWord.charAt(0).toUpperCase() + aWord.slice(1);
    }

  return (
    props.alert && (
      <div className={`alert alert-${props.alert.aType}`} role="alert">
        {/* <strong>Success!</strong> success alert—check it out! */}
        <strong>{capitalize(props.alert.aType)}</strong> : {capitalize(props.alert.aMessage)}
      </div>
    )
  );
}
