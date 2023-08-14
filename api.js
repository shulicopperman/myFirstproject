async function getData() {
  let responce = await fetch("https://randomuser.me/api");
  let result = await responce.json();
  console.log(result);
  const img = document.createElement("img");
  img.src = "https://randomuser.me/api/portraits/women/40.jpg";
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(img);
}

const button = document.getElementsByTagName("button")[0];
button.style.width = "50px";
button.style.height = "50px";
button.addEventListener("click", () => {
  getData();
});
