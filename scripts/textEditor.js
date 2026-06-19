// Variables
const getElement = (elementId) => {
  return document.getElementById(String(elementId));
};

const documentWriter = getElement("documentWriter");
const editorSettings = getElement("editorSettings");

// Page creator

let pageList = [];

const page = {
  element: null,
  create(pageId, parentElement) {
    const newPage = document.createElement("section");
    newPage.id = pageId;
    newPage.className = "documentPage";
    parentElement.appendChild(newPage);

    this.element = newPage;
    pageList.push(newPage);
  },
};

// Function List
const editorActions = {
  addSection() {
    console.log("Add Section: ");
  },
  addTitle() {
    console.log("Add Title: ");
  },
  addHeader() {
    console.log("Add Header: ");
  },
  boldText() {
    console.log("Text Bold: ");
  },
  underlineText() {
    console.log("Text Underline: ");
  },
  italicText() {
    console.log("Italicize Text: ");
  },
};

// Button Registration

editorSettings.addEventListener("click", (clickEvent) => {
  const clickId = clickEvent.target.id;
  if (typeof editorActions[clickId] === "function") {
    editorActions[clickId]();
  }
});
