import React, { useState } from "react";
import propTypes from "prop-types";

export default function TextChange(props) {
  const handleUpClick = () => {
    // console.log("upercase invokes");
    if (text === "") {
      props.showAlert("plese enter some Text", "warning");
    } else {
      let newtext = text.toUpperCase();
      setText(newtext);
      props.showAlert("converted to uppercase", "success");
    }
  };
  const handleLowClick = () => {
    // console.log("lowercase invokes");
    if (text === "") {
      props.showAlert("plese enter some Text", "warning");
    } else {
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("converted to lowercase", "success");
    }
  };

  const handleClearClick = () => {
    // console.log("textClear invokes");

    if (text === "") {
      props.showAlert("Text is already cleared", "warning");}
else{
    let newtext = "";
    setText(newtext);
    props.showAlert("Text cleared", "success");}
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log(event.target.value);
  };

  // setText("Ahsan");
  const [text, setText] = useState("");

  let modeCcHeading = props.modeC === "light" ? "dark" : "light"; // used in main div.container for heading

  let modeCcTareaBackground = props.modeC === "light" ? "white" : "#A0A0A0"; // used in TextArea Background Color
  // #A0A0A0 w3school
  let modeCcTareaTcolor = props.modeC === "light" ? "black" : "white"; // used in TextArea Text Color

  return (
    <>
      <div className={`container my-4 text-${modeCcHeading}`}>
        <h1>{props.text1}</h1>

        <div className="form-floating">
          <textarea
            style={{
              backgroundColor: modeCcTareaBackground,
              color: modeCcTareaTcolor,
            }}
            onChange={handleOnChange}
            value={text}
            className="form-control "
            placeholder="Leave a comment here"
            id="floatingTextarea"
            rows="10"
            // style={{ height: 100 }}
          ></textarea>
          {/* <label htmlFor="floatingTextarea">{props.text1}</label> */}
        </div>

        <button
          type="button"
          className="btn btn-primary mt-3 mx-1"
          onClick={handleUpClick}
        >
          UPPER CASE
        </button>

        <button
          type="button"
          className="btn btn-primary mt-3 mx-1"
          onClick={handleLowClick}
        >
          LOWER CASE
        </button>

        <button
          type="button"
          className="btn btn-primary mt-3 mx-1"
          onClick={handleClearClick}
        >
          Text Clear
        </button>
      </div>

      <div className={`container my-3 text-${modeCcHeading}`}>
        <h3>TEXT SUMMARY</h3>

        <p>
          there are {text.split(" ").filter((element) =>{return element.length!==0 }).length} words and {text.length} characters
        </p>

        <h3>PREVIEW</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

TextChange.defaultProps = {
  text1: "Enter text below",
};

TextChange.propTypes = {
  text1: propTypes.string,
};
