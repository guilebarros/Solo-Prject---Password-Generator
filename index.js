const characters =["A","B","C","D","E","F","G","H","I","J","K","L",
                "M","N","O","P","Q","R","S","T","U","V","W","X","Y",
                "Z","a","b","c","d","e","f","g","h","i","j","k","l",
                "m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                 "~","`","!","@","#","$","%","^","&","*","(",")","_",
                 "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]


const buttonGenerator = document.getElementById("button")

const passwordOne = document.getElementById("btn-1")
const passwordTwo = document.getElementById("btn-2")

const symbolCheck = document.getElementById("symbol-check")
const numberCheck = document.getElementById("number-check")

const lengthValue = document.getElementById("pass-length");
let passwordLength = 15; 

let useNumbers = false
let useSymbols = false

passwordOne.addEventListener("click", function () {
  copyToClipboard(passwordOne.textContent);
});

passwordTwo.addEventListener("click", function () {
  copyToClipboard(passwordTwo.textContent);
});


lengthValue.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      passwordLength = parseInt(lengthValue.value) 
      console.log('Enter key pressed! Value: ' + passwordLength);
      lengthValue.value = ""
    }
  })


symbolCheck.addEventListener('change', function() {
    if (this.checked) {
      console.log("Symbol is checked..");
      useSymbols = true
      console.log(useSymbols)
    } else {
      console.log("Symbol is not checked..");
      useSymbols = false
      console.log(useSymbols)

    }
  })

  numberCheck.addEventListener('change', function() {
    if (this.checked) {
      console.log("Numbox is checked..");
      useNumbers = true
      console.log(useNumbers)
    } else {
      console.log("Numbox is not checked..");
      useNumbers = false
      console.log(useNumbers)
    }
  })

buttonGenerator.addEventListener("click", function() {
    
    
    passwordOne.textContent = generateRandomPassword(passwordLength, useNumbers, useSymbols)
    passwordTwo.textContent = generateRandomPassword(passwordLength, useNumbers, useSymbols)

})

passwordOne.addEventListener("click", function () {
  copyToClipboard(passwordOne.textContent);
});

passwordTwo.addEventListener("click", function () {
  copyToClipboard(passwordTwo.textContent);
});



function copyToClipboard(text) {
  // Create a temporary element to hold the text
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Append the element to the DOM
  document.body.appendChild(textArea);

  // Select the text in the textarea
  textArea.select();

  try {
      // Use the Clipboard API to copy the text
      document.execCommand("copy");
      // alert("Text copied to clipboard: " + text);
  } catch (err) {
      console.error("Unable to copy text: ", err);
  } finally {
      // Clean up by removing the temporary element
      document.body.removeChild(textArea);
  }
}

function clearPasswords() {
  passwordOne.textContent = ""
  passwordTwo.textContent = ""
}

// function generateRandomPassword(passwordLength) {

//   let password = ""

//   for (let i = 0; i < passwordLength; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length)
//     password += characters [randomIndex]
//   }
//   return password
// }

function generateRandomPassword(passwordLength, useNumbers, useSymbols) {

  let characterSet = ["A","B","C","D","E","F","G","H","I","J","K","L",
  "M","N","O","P","Q","R","S","T","U","V","W","X","Y",
  "Z","a","b","c","d","e","f","g","h","i","j","k","l",
  "m","n","o","p","q","r","s","t","u","v","w","x","y","z",
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
   "~","`","!","@","#","$","%","^","&","*","(",")","_",
   "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"] 

  if (!useNumbers) {
    // Exclude numbers
    characterSet = characterSet.filter(char => isNaN(char));
  }

  if (!useSymbols) {

    characterSet = characterSet.filter(char => !/[~`!@#$%^&*()_\-+={}[\]|:;<>,.?/]/.test(char));
  }


  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }
  return password;
}
