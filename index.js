const characters =["A","B","C","D","E","F","G","H","I","J","K","L",
                "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]


const buttonGenerator = document.getElementById("button")


const passwordOne = document.getElementById("btn-1")
const passwordTwo = document.getElementById("btn-2")

const symbolCheck = document.getElementById("symbol-check")
const numberCheck = document.getElementById("number-check")

const lengthValue = document.getElementById("pass-length");

lengthValue.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const passwordLength = lengthValue.value; // Get the input value
      console.log('Enter key pressed! Value: ' + passwordLength);
      // Now you can use the passwordLength variable for further processing
      lengthValue.value = "";
    }
  });


symbolCheck.addEventListener('change', function() {
    if (this.checked) {
      console.log("Symbol is checked..");
    } else {
      console.log("Symbol is not checked..");
    }
  });

  numberCheck.addEventListener('change', function() {
    if (this.checked) {
      console.log("Numbox is checked..");
    } else {
      console.log("Numbox is not checked..");
    }
  });

buttonGenerator.addEventListener("click", function() {
    passwordOne.textContent += "Howdy"
    passwordTwo.textContent += "Lula Livre"

})

