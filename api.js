async function getData() {
  let responce = await fetch("https://randomuser.me/api");
  let result = await responce.json();
  console.log(result);
  const img = document.createElement("img");
  img.src = "";
}

const button = document.getElementsByTagName("button")[0];
button.style.width = "50px";
button.style.height = "50px";
button.addEventListener("click", () => {
  getData();
});
