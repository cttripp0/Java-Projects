const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const container = document.querySelector(".container");

function getInputText() {
  return input.value;
}

function reverseString(string) {
  string = string.split("");
  string = string.reverse();
  return string.join("");
}
let palindromeStatement;
let palindromeStatementCreated = false;

let checkPalindrome = function checkPalindrome(reverseString) {
  if (reverseString === input.value) {
    return true;
  } else {
    return false;
  }
}

function makePalindromeStatement() {
  if (palindromeStatementCreated === false) {
    palindromeStatement = document.createElement("p");
    container.appendChild(palindromeStatement);
    palindromeStatementCreated = true;
  }
  if (checkPalindrome(reverseString(getInputText())) === true) {
    palindromeStatement.innerText = "This word is a palindrome.";
  } else {
    palindromeStatement.innerText = "This word is not a palindrome.";
  }
}

submit.addEventListener("click", () => {
  checkPalindrome(reverseString(getInputText()));
  makePalindromeStatement();
});
