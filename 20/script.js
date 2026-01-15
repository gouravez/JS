const button = document.getElementById("clickButton");
const username = document.getElementById("username");
const name = document.getElementById("name");

button.addEventListener("click", () => {
  console.log(username.value);
  localStorage.setItem("name", username.value);
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("name");
  name.innerText = value;
});
