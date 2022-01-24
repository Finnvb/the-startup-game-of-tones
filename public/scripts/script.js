let usp1 = document.getElementById("usp1");
let usp2 = document.getElementById("usp2");
let usp3 = document.getElementById("usp3");
let uspText = document.getElementById("uspText");
let backgroundImage = document.getElementById("bgImage");

usp1.addEventListener("click", changeText);
usp2.addEventListener("click", changeText);
usp3.addEventListener("click", changeText);

function changeText(event) {

  if (event.target.id == "usp1") {
    uspText.innerHTML =
      "<span>Aqcuire</span> the <span>tools</span> to <span>discover</span><br> and <span>express</span> your<span> own musical style</span>";

    backgroundImage.setAttribute("class", "background-image");
  } else if (event.target.id == "usp2") {
    uspText.innerHTML =
      "<span>Develop</span> a <span>dynamic perspective</span> by<br> connecting <span>concious connections</span> between<br> <span>theory</span> and <span>practice</span>";
    uspText.style.height = "100px";

    backgroundImage.setAttribute("class", "background-image1");
  } else if (event.target.id == "usp3") {
    uspText.innerHTML =
      "<span>Broaden</span> your <span>musical knowledge</span><br> through a <span>comprehensive approach</span>";

    backgroundImage.setAttribute("class", "background-image2");
  }
}
