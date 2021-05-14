import React, { useState } from "react";

function ButtonChange() {

  let initialBtnTxt="Click To Add To Favorites";
  let initialBtnColor="beforeclick";
  const [btnText, setBtnText] = useState(initialBtnTxt);
  const [btnColor, setBtnColor] = useState(initialBtnColor);

  const changeBtnState = () => {
    setBtnText((btnText) => {
      if (btnText === "Click To Add To Favorites") {
        return "Added To Favorites";
      } else {
        return "Click To Add To Favorites";
      }
    });

    setBtnColor((btnColor) => {
      if (btnColor === "beforeclick") {
        return "afterclick";
      } else {
        return "beforeclick";
      }
    });
  };

  return (
    <>
      <div className={btnColor}>
        <button onClick={changeBtnState}>{btnText}</button>
      </div>
    </>
  );
}

export default ButtonChange;
