const labels = {
  en: {
    mainTitle: "UnitXpert",
    type: "Conversion Type",
    value: "Enter Value",
    from: "From",
    to: "To",
    history: "Conversion History",
    placeholder: "Enter value",
    convertBtn: "Convert",
    swapTitle: "Swap Units",
    themeToggle: "Toggle Theme",
    langToggle: "Change Language"
  },
  hi: {
    mainTitle: "यूनिट एक्सपर्ट",
    type: "रूपांतरण प्रकार",
    value: "मान दर्ज करें",
    from: "से",
    to: "पर",
    history: "रूपांतरण इतिहास",
    placeholder: "मान दर्ज करें",
    convertBtn: "परिवर्तित करें",
    swapTitle: "इकाइयाँ बदलें",
    themeToggle: "थीम बदलें",
    langToggle: "भाषा बदलें"
  },
  bn: {
    mainTitle: "ইউনিট এক্সপার্ট",
    type: "রূপান্তর প্রকার",
    value: "মান লিখুন",
    from: "থেকে",
    to: "প্রতি",
    history: "রূপান্তর ইতিহাস",
    placeholder: "মান লিখুন",
    convertBtn: "রূপান্তর করুন",
    swapTitle: "ইউনিট বদলান",
    themeToggle: "থিম পরিবর্তন করুন",
    langToggle: "ভাষা পরিবর্তন করুন"
  },
  ta: {
    mainTitle: "யூனிட் எக்ஸ்பெர்ட்",
    type: "மாற்றம் வகை",
    value: "மதிப்பை உள்ளிடு",
    from: "இருந்து",
    to: "வரை",
    history: "மாற்றம் வரலாறு",
    placeholder: "மதிப்பை உள்ளிடு",
    convertBtn: "மாற்று",
    swapTitle: "அலகுகளை மாற்றவும்",
    themeToggle: "தீம் மாற்றவும்",
    langToggle: "மொழியை மாற்றவும்"
  },
  kn: {
    mainTitle: "ಯುನಿಟ್ ಎಕ್ಸ್ಪರ್ಟ್",
    type: "ಪರಿವರ್ತನೆ ಪ್ರಕಾರ",
    value: "ಮೌಲ್ಯ ನಮೂದಿಸಿ",
    from: "ಇಂದ",
    to: "ಗೆ",
    history: "ಪರಿವರ್ತನೆ ಇತಿಹಾಸ",
    placeholder: "ಮೌಲ್ಯ ನಮೂದಿಸಿ",
    convertBtn: "ಪರಿವರ್ತಿಸು",
    swapTitle: "ಘಟಕಗಳನ್ನು ಬದಲಿಸಿ",
    themeToggle: "ಥೀಮ್ ಬದಲಿಸಿ",
    langToggle: "ಭಾಷೆಯನ್ನು ಬದಲಿಸಿ"
  }
};

let lang = "en";

const unitOptions = {
  length: ["meters", "feet", "kilometers", "miles"],
  weight: ["kilograms", "pounds", "grams", "ounces"],
  temperature: ["Celsius", "Fahrenheit", "Kelvin"],
  volume: ["liters", "milliliters", "gallons", "cups"],
  speed: ["m/s", "km/h", "mph"],
  area: ["sq meters", "sq kilometers", "sq feet", "sq miles"]
};

const conversions = {
  length: {
    meters: { meters: v => v, feet: v => v * 3.28084, kilometers: v => v / 1000, miles: v => v / 1609.34 },
    feet: { meters: v => v / 3.28084, feet: v => v, kilometers: v => v / 3280.84, miles: v => v / 5280 },
    kilometers: { meters: v => v * 1000, feet: v => v * 3280.84, kilometers: v => v, miles: v => v / 1.60934 },
    miles: { meters: v => v * 1609.34, feet: v => v * 5280, kilometers: v => v * 1.60934, miles: v => v }
  },
  weight: {
    kilograms: { kilograms: v => v, pounds: v => v * 2.20462, grams: v => v * 1000, ounces: v => v * 35.274 },
    pounds: { kilograms: v => v / 2.20462, pounds: v => v, grams: v => v / 0.00220462, ounces: v => v * 16 },
    grams: { kilograms: v => v / 1000, pounds: v => v * 0.00220462, grams: v => v, ounces: v => v * 0.035274 },
    ounces: { kilograms: v => v / 35.274, pounds: v => v / 16, grams: v => v / 0.035274, ounces: v => v }
  },
  temperature: {
    Celsius: { Celsius: v => v, Fahrenheit: v => (v * 9 / 5) + 32, Kelvin: v => v + 273.15 },
    Fahrenheit: { Celsius: v => (v - 32) * 5 / 9, Fahrenheit: v => v, Kelvin: v => (v - 32) * 5 / 9 + 273.15 },
    Kelvin: { Celsius: v => v - 273.15, Fahrenheit: v => (v - 273.15) * 9 / 5 + 32, Kelvin: v => v }
  },
  volume: {
    liters: { liters: v => v, milliliters: v => v * 1000, gallons: v => v / 3.78541, cups: v => v * 4.22675 },
    milliliters: { liters: v => v / 1000, milliliters: v => v, gallons: v => v / 3785.41, cups: v => v / 236.588 },
    gallons: { liters: v => v * 3.78541, milliliters: v => v * 3785.41, gallons: v => v, cups: v => v * 16 },
    cups: { liters: v => v / 4.22675, milliliters: v => v * 236.588, gallons: v => v / 16, cups: v => v }
  },
  speed: {
    "m/s": { "m/s": v => v, "km/h": v => v * 3.6, mph: v => v * 2.23694 },
    "km/h": { "m/s": v => v / 3.6, "km/h": v => v, mph: v => v / 1.60934 },
    mph: { "m/s": v => v / 2.23694, "km/h": v => v * 1.60934, mph: v => v }
  },
  area: {
    "sq meters": { "sq meters": v => v, "sq kilometers": v => v / 1e6, "sq feet": v => v * 10.7639, "sq miles": v => v / 2.59e6 },
    "sq kilometers": { "sq meters": v => v * 1e6, "sq kilometers": v => v, "sq feet": v => v * 1.076e7, "sq miles": v => v / 2.59 },
    "sq feet": { "sq meters": v => v / 10.7639, "sq kilometers": v => v / 1.076e7, "sq feet": v => v, "sq miles": v => v / 27878400 },
    "sq miles": { "sq meters": v => v * 2.59e6, "sq kilometers": v => v * 2.59, "sq feet": v => v * 27878400, "sq miles": v => v }
  }
};

const typeSelect = document.getElementById("type");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const inputValue = document.getElementById("inputValue");
const resultBox = document.getElementById("result");
const historyList = document.getElementById("historyList");
const mainTitle = document.getElementById("mainTitle");
const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");
const themeToggle = document.getElementById("themeToggle");
const langToggle = null; // Removed reference to non-existent element
const languageSelect = document.getElementById("languageSelect");

function populateUnits() {
  const selectedType = typeSelect.value;
  console.log("Selected Type:", selectedType);
  console.log("Available Units:", unitOptions[selectedType]); 

  if (!unitOptions[selectedType]) {
    console.error("Unknown unit type:", selectedType);
    return;
  }

  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  unitOptions[selectedType].forEach(unit => {
    fromUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
    toUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
  });
}

function convert() {
  const value = parseFloat(inputValue.value);
  if (isNaN(value)) {
    resultBox.textContent = "";
    return;
  }
  const from = fromUnit.value;
  const to = toUnit.value;
  const type = typeSelect.value;
  const result = conversions[type][from][to](value);
  resultBox.textContent = `${value} ${from} = ${result.toFixed(4)} ${to}`;
}

function finalizeConversion() {
  if (!resultBox.textContent) return;
  addToHistory(resultBox.textContent);
}

function addToHistory(text) {
  const li = document.createElement("li");
  li.textContent = text;
  historyList.prepend(li);
}

swapBtn.onclick = () => {
  [fromUnit.value, toUnit.value] = [toUnit.value, fromUnit.value];
  convert();
};

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

languageSelect.addEventListener("change", () => {
  lang = languageSelect.value;
  updateLabels();
});

function updateLabels() {
  const l = labels[lang];
  mainTitle.textContent = l.mainTitle || "UnitXpert";
  document.getElementById("labelType").textContent = l.type;
  document.getElementById("labelValue").textContent = l.value;
  document.getElementById("labelFrom").textContent = l.from;
  document.getElementById("labelTo").textContent = l.to;
  document.getElementById("historyTitle").textContent = l.history;
  inputValue.placeholder = l.placeholder;
  convertBtn.textContent = l.convertBtn;
  swapBtn.title = l.swapTitle;
  themeToggle.textContent = l.themeToggle;
  // Removed langToggle.textContent assignment as element does not exist

  languageSelect.value = lang;
}

inputValue.addEventListener("input", convert);
fromUnit.addEventListener("change", convert);
toUnit.addEventListener("change", convert);
typeSelect.addEventListener("change", () => {
  populateUnits();
  convert();
});
convertBtn.addEventListener("click", finalizeConversion);
window.onload = () => {
  populateUnits();
  updateLabels();
  convert();
};