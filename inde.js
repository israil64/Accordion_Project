const myItemDiv = document.getElementsByClassName("item");

const myOpenIcon = document.getElementsByClassName("iconOpen");

const myCloseIcon = document.getElementsByClassName("iconClose");

// when i click on the item then item should be open
for (let i = 0; i < myItemDiv.length; i++) {
  myCloseIcon[i].style.display = "none";

  myItemDiv[i].addEventListener("click", () => {
    const result = myItemDiv[i].classList.toggle("active");
    if (result == true) {
      myCloseIcon[i].style.display = "block";
      myOpenIcon[i].style.display = "none";
    } else {
      myCloseIcon[i].style.display = "none";
      myOpenIcon[i].style.display = "block";
    }
  });
}
