import {
  ouputArrayMarkup,
  filterMarkup,
  pushPopMarkup,
  shiftArrayMarkup,
  unshiftArrayMarkup,
  reduceMarkup,
} from "./markup.js";

// INITIALIZATIONS
const mapForm = document.querySelector(".map-form");
const outputArray = document.querySelector(".output-array");
const submitMapBtn = document.querySelector(".submit-map-btn");
const filterButtonsContainer = document.querySelector(
  ".filter-buttons-container"
);
const filteredCountriesContainer = document.querySelector(
  ".filtered-countries-container"
);
const rightArray = document.querySelector(".right-array");
const leftArray = document.querySelector(".left-array");

const pushPopBtn = document.querySelector("#push-btn");
const shiftBtn = document.querySelector("#shift-btn");
const shiftArrayContainer = document.querySelector(".shift-array-container");
const shiftSpan = document.querySelector("#shift-span");
const unshiftArrayContainer = document.querySelector(
  ".unshift-array-container"
);
const unshiftBtn = document.querySelector("#unshift-btn");
const reduceOutputContainer = document.querySelector(
  ".reduce-output-container"
);

const reduceSelect = document.querySelector("#reduce-select");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const methodsLinksContainer = document.querySelector(
  ".methods-links-container"
);
// MAPPING FUNCTION
function mapArrayElements() {
  const mapInput1 = document.querySelector("#map-input-1").value;
  const mapInput2 = document.querySelector("#map-input-2").value;
  const mapInput3 = document.querySelector("#map-input-3").value;
  if (mapInput1 === "" || mapInput2 === "" || mapInput3 === "") {
    alert("Please enter all the input values of the Array to map result.");
    return;
  }
  // ALL VALUES GIVEN BY THE USER
  const resultMarkup = ouputArrayMarkup(
    "💎".repeat(Number(mapInput1)),
    "📀".repeat(Number(mapInput2)),
    "💍".repeat(Number(mapInput3))
  );
  outputArray.innerHTML = "";
  outputArray.insertAdjacentHTML("beforeend", resultMarkup);
}

// MAP FORM PREVENTION DEFAULT
mapForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

// MAP BUTTON SUBMITTING
submitMapBtn.addEventListener("click", mapArrayElements);

// FILTERING COUNTRIES

// filter function
function filterCountries(continentName) {
  filteredCountriesContainer.innerHTML = "";
  const result = filterMarkup(continentName);
  filteredCountriesContainer.insertAdjacentHTML("beforeend", result);
}

// filter buttons styles
function filterBtnStyles(dataAttribute) {
  const allBtns = document.querySelectorAll(".filter-btn");
  allBtns.forEach((eachBtn) => {
    eachBtn.classList.remove("filter-button-selected");
    eachBtn.classList.remove("filter-button");
  });

  allBtns.forEach((eachBtn) => {
    eachBtn.dataset.filterBtn === dataAttribute
      ? eachBtn.classList.add("filter-button-selected")
      : eachBtn.classList.add("filter-button");
  });
}

// filter btn event
filterButtonsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("filter-btn")) {
    const dataAttribute = e.target.dataset.filterBtn;
    filterBtnStyles(dataAttribute);
    filterCountries(dataAttribute);
  }
});

// PUSH AND POP METHOD
const genLabelObject = [
  { genTitle: "The Silent Generation", genRange: "Born: 1928–1945" },
  { genTitle: "Baby Boomers", genRange: "Born: 1946–1964" },
  { genTitle: "Generation X (Gen X)", genRange: "Born: 1965–1980" },
  { genTitle: "Millennials (Gen Y)", genRange: "Born: 1981–1996" },
  { genTitle: "Generation Z (Gen Z)", genRange: "Born: 1997–2012" },
  { genTitle: "Generation Alpha", genRange: "Born: 2013–2025 (projected)" },
];

let separatorIndex = 0;
let genLabObjLen = genLabelObject.length;

function firstGenLabelRun() {
  genLabelObject.forEach(({ genTitle, genRange }) => {
    const result = pushPopMarkup(genTitle, genRange);
    rightArray.insertAdjacentHTML("beforeend", result);
  });
}

function addingPushPopMarkup(index) {
  const leftArrayObj = genLabelObject.slice(0, index);
  const rightArrayObj = genLabelObject.slice(index, genLabObjLen);
  leftArrayObj.forEach(({ genTitle, genRange }) => {
    const result = pushPopMarkup(genTitle, genRange);
    leftArray.insertAdjacentHTML("beforeend", result);
  });
  rightArrayObj.forEach(({ genTitle, genRange }) => {
    const result = pushPopMarkup(genTitle, genRange);
    rightArray.insertAdjacentHTML("beforeend", result);
  });
}

function clearPushPopMarkup() {
  leftArray.innerHTML = "";
  rightArray.innerHTML = "";
}

function pushAndPop() {
  let pushPopBtnAttr = pushPopBtn.dataset.pushPop;
  clearPushPopMarkup();
  if (pushPopBtnAttr === "push") {
    if (separatorIndex < genLabObjLen) {
      separatorIndex += 1;
      addingPushPopMarkup(separatorIndex);
    } else {
      pushPopBtn.setAttribute("data-push-pop", "pop");
      separatorIndex -= 1;
      pushPopBtn.textContent = "Pop";
      addingPushPopMarkup(separatorIndex);
    }
  } else {
    if (separatorIndex !== 0) {
      separatorIndex -= 1;
      addingPushPopMarkup(separatorIndex);
    } else {
      pushPopBtn.setAttribute("data-push-pop", "push");
      separatorIndex += 1;
      pushPopBtn.textContent = "Push";
      addingPushPopMarkup(separatorIndex);
    }
  }
}

pushPopBtn.addEventListener("click", pushAndPop);

// SHIFT AND UNSHIFT METHODS
// SHIFT METHOD
const shiftArrayItems = [
  "Cerebrum,",
  "Cerebellum,",
  "Brain stem,",
  "Amygdala,",
  "Thalamus,",
  "Occipital lobe,",
  "Temporal lobe,",
];

shiftBtn.addEventListener("click", () => {
  shiftArrayContainer.innerHTML = "";
  const shiftedElemet = shiftArrayItems.shift();
  shiftSpan.textContent = shiftedElemet;
  if (shiftArrayItems.length > 0) {
    const result = shiftArrayMarkup(shiftArrayItems);
    shiftArrayContainer.insertAdjacentHTML("beforeend", result);
  } else {
    shiftArrayContainer.insertAdjacentHTML(
      "beforeend",
      "<p>Array is Empty</p>"
    );
    shiftSpan.textContent = "[-----]";
  }
});
// UNSHIFT METHOD
const unshiftArray = ["Amaravathi", "Chennai", "Banglore", "Dispur", "Delhi"];

function unshiftArrayLoop() {
  unshiftArrayContainer.insertAdjacentHTML(
    "beforeend",
    unshiftArrayMarkup(unshiftArray)
  );
}

function addingElemntUnshiftArr() {
  const inputElement = document.querySelector(".unshit-array-input");
  const inputVal = inputElement.value;
  if (Number(inputVal) === 0) {
    alert("Plaease ENter Valid Unshift Value");
  } else {
    unshiftArray.unshift(inputVal);
    unshiftArrayContainer.innerHTML = "";
    inputElement.value = "";
    unshiftArrayLoop();
  }
}

unshiftBtn.addEventListener("click", addingElemntUnshiftArr);

// reduce method
const reduceArray = [9, 18, 27, 36, 45];

function reducingArrayFun(value) {
  reduceOutputContainer.innerHTML = "";
  reduceOutputContainer.insertAdjacentHTML(
    "beforeend",
    reduceMarkup(reduceArray, value)
  );
}

reduceSelect.addEventListener("change", function (e) {
  reducingArrayFun(e.target.value);
});

// HAMBURGER TOGGLING
function toggleHamburger() {
  // hamburgerIcon.style.display = "none";
  if (
    methodsLinksContainer.classList.contains(
      "methods-links-container-reappeared"
    )
  ) {
    methodsLinksContainer.style.display = "none";
    methodsLinksContainer.classList.remove(
      "methods-links-container-reappeared"
    );
  } else {
    methodsLinksContainer.style.display = "flex";
    methodsLinksContainer.classList.add("methods-links-container-reappeared");
  }
}

hamburgerIcon.addEventListener("click", toggleHamburger);

// INITIAL RENDERING
// MAPPING
mapArrayElements();
filterBtnStyles("Asia");
filterCountries("Asia");
firstGenLabelRun();
unshiftArrayLoop();
reducingArrayFun("Add");
