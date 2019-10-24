document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!

  const listContainerEl = document.getElementsByClassName("list-container")[0];
  listContainerEl.addEventListener("submit", function(event) {
    event.preventDefault();

    const favInput = document.getElementsByClassName("favorite-input")[0];
    const favVal = favInput.value;
    favInput.value = "";

    const sfPlaces = document.getElementById("sf-places");
    const li = document.createElement("li");
    li.textContent = favVal; 
    sfPlaces.appendChild(li);
  });



  // adding new photos

  // --- your code here!

  const photoShowButton = document.getElementsByClassName("photo-show-button")[0];
  const photoForm = document.getElementsByClassName("photo-form-container")[0];

  photoShowButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    photoForm.classList.toggle("hidden");
  })

  const dogPhotosUl = document.getElementsByClassName("dog-photos")[0];
  photoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const photoURLInput = document.getElementsByClassName("photo-url-input")[0];
    const photoURL = photoURLInput.value;
    photoURLInput.value = ""; 

    const li = document.createElement("li"); 
    const img = document.createElement("img"); 
    img.setAttribute("src", photoURL); 
    li.append(img); 
    dogPhotosUl.append(li);
  })

});
