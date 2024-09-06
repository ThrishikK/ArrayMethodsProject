import { ouputArrayMarkup, filterMarkup } from "./markup.js";

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

// INITIAL RENDERING
// MAPPING
mapArrayElements();
filterBtnStyles("Asia");
filterCountries("Asia");
