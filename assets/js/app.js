window.onload = function () {
  main();
};

// start our main function
function main() {
  const controller_items = document.querySelectorAll(
    ".controller_items li[title]"
  );
  const controller_itemsInput = document.querySelectorAll(
    ".controller_items li[title] input"
  );

  // change font style
  [...controller_items].forEach((item) => {
    item.addEventListener("click", controller(item));
  });
  // change font size
  [...controller_itemsInput].forEach((item) => {
    item.addEventListener("keyup", controllerInput(item));
  });

  // change color
  controller_itemsInput[3].addEventListener("change", function (e) {
    const textArea = document.querySelector("#user-text");
    textArea.style.color = e.target.value;
  });
}

// controller
function controller(el) {
  const textArea = document.querySelector("#user-text");
  const titleValue = el.title;
  return function () {
    switch (titleValue) {
      case "bold":
        bold(textArea);
        break;
      case "italic":
        italic(textArea);
        break;
      case "underline":
        underline(textArea);
        break;
      case "left":
        left(textArea);
        break;
      case "center":
        center(textArea);
        break;
      case "right":
        right(textArea);
        break;
      case "justify":
        justify(textArea);
        break;
      case "reset-styles":
        resetStyle();
        break;
      case "clear-text":
        textArea.innerText = "";
        break;

      default:
        break;
    }
  };
}

// controller input
function controllerInput(el) {
  const textArea = document.querySelector("#user-text");
  const titleValue = el.className;
  return function () {
    switch (titleValue) {
      case "line-height":
        lineHeight(el, textArea);
        break;
      case "letter-spacing":
        letterSpacing(el, textArea);
        break;
      case "font-size":
        fontSize(el, textArea);
        break;
      default:
        break;
    }
  };
}

/********** utilities ************ */
// style for text bold
function bold(el) {
  if (el.style.fontWeight === "bold") {
    el.style.fontWeight = "";
  } else {
    el.style.fontWeight = "bold";
  }
}

// style for text italic
function italic(el) {
  if (el.style.fontStyle === "italic") {
    el.style.fontStyle = "";
  } else {
    el.style.fontStyle = "italic";
  }
}

// style for text underline
function underline(el) {
  if (el.style.textDecoration === "underline") {
    el.style.textDecoration = "";
  } else {
    el.style.textDecoration = "underline";
  }
}

// style for text left
function left(el) {
  if (el.style.textAlign === "left") {
    el.style.textAlign = "";
  } else {
    el.style.textAlign = "left";
  }
}

// style for text center
function center(el) {
  if (el.style.textAlign === "center") {
    el.style.textAlign = "";
  } else {
    el.style.textAlign = "center";
  }
}

// style for text right
function right(el) {
  if (el.style.textAlign === "right") {
    el.style.textAlign = "";
  } else {
    el.style.textAlign = "right";
  }
}

// style for text justify
function justify(el) {
  if (el.style.textAlign === "justify") {
    el.style.textAlign = "";
  } else {
    el.style.textAlign = "justify";
  }
}

// style for  line height
function lineHeight(el, textArea) {
  if (el.value <= 0) {
    el.value = "22";
    return (textArea.style.lineHeight = el.value + "px");
  } else {
    textArea.style.lineHeight = el.value + "px";
  }
}

// style for  letter Spacing
function letterSpacing(el, textArea) {
  if (el.value <= 0) {
    el.value = "0";
    return (textArea.style.letterSpacing = el.value + "px");
  } else {
    textArea.style.letterSpacing = el.value + "px";
  }
}

// style for  font size
function fontSize(el, textArea) {
  if (el.value <= 0) {
    el.value = "16";
    return (textArea.style.fontSize = el.value + "px");
  } else {
    textArea.style.fontSize = el.value + "px";
    textArea.style.lineHeight = "normal";
    textArea.style.letterSpacing = "normal";
  }
}

// reset all style and back default stayle
function resetStyle() {
  const textArea = document.querySelector("#user-text");
  const [lineHeight, letterSpacing, fontSize, color] = [
    ...document.querySelectorAll(".controller_items li[title] input"),
  ];
  lineHeight.value = "22";
  letterSpacing.value = "0";
  fontSize.value = "16";
  color.value = "#000000";

  textArea.classList.remove("textarea-style");
  textArea.classList.add("textarea-style");
  textArea.style = "";
}
