  let changeButton = document.querySelector("button")
  let wellcomeText = document.querySelector("h1");

  function getUser() {
    userName = prompt("Enter your Name: ");
    if (!userName){
        getUser();
    } else {
        localStorage.setItem("name", userName);
        wellcomeText.textContent = `Wellcome, ${userName}`;
    }
};

let Uname = localStorage.getItem("name");
if (!Uname) {
    getUser();
} else {
    wellcomeText.textContent = `Hello ${Uname}`;
}

changeButton.onclick = () => {
    getUser();
}