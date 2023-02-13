window.onload = function () {
  main();
};

// start our main function
function main() {
  const controller_items = document.querySelectorAll(".controller_items li");
  [...controller_items].forEach((item) => {
    item.addEventListener("click", controller(item));
  });
}

function controller(el) {
  const textArea = document.querySelector("#user-text");
  return function () {
    const titleValue = el.title;
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
      case "line-height":
        textArea.style.lineHeight = "normal";
        break;
      case "letter-spacing":
        textArea.style.letterSpacing = "normal";
        break;
      case "font-size":
        textArea.style.fontSize = "normal";
        break;
      case "color":
        textArea.style.color = "red";
        break;
      case "reset-styles":
        // please clear all style
        break;
      case "clear-text":
        textArea.innerText = "";
        break;

      default:
        console.log("not style");
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
