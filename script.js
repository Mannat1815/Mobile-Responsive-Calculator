function Makebutton() {
    let clutter = "";
    const calc_value = ["C",
    "del",	
    "CE",	
   " %",
    7	,
    8,
    9,	
    "/",
    4,
    5,
    6,
    "-",
    1,	
    2,
    3,
    "+",
    "+/-",	
    0,	
    ".",
    "="]; // Add your department names here

    for (let i = 0; i < 20; i++) {
        const buttonName = calc_value[i];

        clutter += `
        <div class="button">
           <p>${buttonName}</p>
       
    </div>`;
    }

    document.querySelector(".numbers").innerHTML = clutter;
}

Makebutton();
// Function to display and perform calculations

function operate(operation) {
    const display = document.querySelector(".display");
    let displayText = display.textContent;
  
    if (operation === "=") {
      // Calculate and display the result
      try {
        const result = eval(displayText);
        display.textContent = result;
      } catch (error) {
        display.textContent = "Error";
      }
    } else if (operation === "C") {
      // Clear the display
      display.textContent = "";
    } else if (operation === "del") {
      // Delete the last character
      display.textContent = displayText.slice(0, -1);
    } else {
      // Append the operation to the display
      display.textContent += operation;
    }
  }
  
  // Add event listeners to the buttons
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonName = button.querySelector("p").textContent;
      operate(buttonName);
    });
  });
  