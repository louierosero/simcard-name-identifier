// Define mobile number prefixes as object
const prefixes = {
  smart: [
    "0813",
    "0900",
    "0907",
    "0908",
    "0909",
    "0910",
    "0911",
    "0912",
    "0913",
    "0914",
    "0918",
    "0919",
    "0920",
    "0921",
    "0928",
    "0929",
    "0930",
    "0931",
    "0938",
    "0939",
    "0940",
    "0946",
    "0947",
    "0948",
    "0949",
    "0950",
    "0951",
    "0955",
    "0960",
    "0961",
    "0970",
    "0971",
    "0980",
    "0981",
    "0989",
    "0992",
    "0998",
    "0999",
  ],
  globe: [
    "0817",
    "0905",
    "0906",
    "0915",
    "0916",
    "0917",
    "0926",
    "0927",
    "0935",
    "0936",
    "0937",
    "0956",
    "0966",
    "0975",
    "0977",
    "0994",
    "0995",
    "0997",
  ],
  sun: [
    "0922",
    "0923",
    "0924",
    "0925",
    "0931",
    "0932",
    "0933",
    "0934",
    "0942",
    "0943",
  ],
  absCbn: ["0937"],
  cherryMobile: ["0996"],
  nextMobile: ["0978", "0979"],
  extelcom: ["0973", "0974"],
};

// Button Event for Checking the Mobile Number.
document.getElementById("btnCheck").addEventListener("click", chkNumber);

function chkNumber(e) {
  // Value of the INPUT Field.
  const pNumbers = document.getElementById("pNumber").value.slice(0, 4);
  // Value for Display Result
  const results = document.getElementById("p-result");

  // Check if prefix exists in prefixes object
  if (prefixes.smart.includes(pNumbers)) {
    results.innerHTML = "( This is SMART or Talk N Text Number. )";
  } else if (prefixes.globe.includes(pNumbers)) {
    results.innerHTML = "( This is GLOBE or TM. )";
  } else if (prefixes.sun.includes(pNumbers)) {
    results.innerHTML = "( This is Sun Cellular Number. )";
  } else if (prefixes.absCbn.includes(pNumbers)) {
    results.innerHTML = "( This is ABS CBN Number. )";
  } else if (prefixes.cherryMobile.includes(pNumbers)) {
    results.innerHTML = "( This is Cherry Mobile Number. )";
  } else if (prefixes.nextMobile.includes(pNumbers)) {
    results.innerHTML = "( This is Next Mobile Number. )";
  } else if (prefixes.extelcom.includes(pNumbers)) {
    results.innerHTML = "( This is Extelcom Number. )";
  } else if (document.getElementById("pNumber").value.length < 4) {
    alert("Please enter at least 4 digits number.");
  } else {
    alert(
      "Sim Card Number did not found. \nMaybe you inserted an invalid number."
    );
  }

  e.preventDefault(); // Catching the ERROR!
}
