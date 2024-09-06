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

export { ouputArrayMarkup, filterMarkup };
