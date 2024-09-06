const countriesList = {
  Asia: ["India", "Japan", "Thailand", "Singapore", "Georgia"],
  America: ["Peru", "Mexico", "Colombia", "Chile", "Brazil"],
  Europe: ["Russia", "United Kingdom", "Germany", "Spain", "Italy"],
  Australia: ["Australia", "New Zealand", "Cocos", "Fiji", "Kiribati"],
  Africa: ["Egypt", "Kenya", "Mali", "Angola", "Uganda"],
};

// OUTPUT ARRAY MARKUP
function ouputArrayMarkup(diamonds, discs, rings) {
  return ` <p>${diamonds}<span class="map-span-comma">,</span></p>
            <p>${discs}<span class="map-span-comma">,</span></p>
            <p>${rings}<span class="map-span-comma">,</span></p>`;
}

// filter countries markup
function filterMarkup(continent) {
  return `
   <p>${countriesList[continent][0]}</p>
            <p>${countriesList[continent][1]}</p>
            <p>${countriesList[continent][2]}</p>
            <p>${countriesList[continent][3]}</p>
            <p>${countriesList[continent][4]}</p>
  `;
}

// PUSH POP MARKUP
function pushPopMarkup(label, range) {
  return `<div class="gen-label-container">
              <p>${label}</p>
              <p>${range} <span>,</span></p>
            </div>`;
}

export { ouputArrayMarkup, filterMarkup, pushPopMarkup };
