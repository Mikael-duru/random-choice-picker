const textArea = document.querySelector("#choiceInput");
const displayTags = document.querySelector(".tags");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if(e.key === "Enter"){
    setTimeout(() => {
      e.target.value = "";
    }, 10);

  selectRandomTag();
  }
})

function createTags(keyPressed){
  // split() creates an array, filter() removes white spaces in the array, and map() removes extra space in text.
  const tags = keyPressed.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim());

  displayTags.textContent = "";

  tags.forEach(tag => {
    const tagEl = document.createElement("span");
    tagEl.className = "tag";
    tagEl.textContent = tag;
    displayTags.appendChild(tagEl);
  })
};

function selectRandomTag(){
  const times = 30;

  // highlight and remove highlight on tags
  const intervalId = setInterval(() => {
    const randomTag = getRandomTag();

    highlightTags(randomTag);

    setTimeout(() => {
      removeTagHighlight(randomTag);
    }, 100);
  }, 100);

  // Random selection
  setTimeout(() => {
    clearInterval(intervalId);
    const randomTag = getRandomTag();
    highlightTags(randomTag);
  }, times * 100);
}

function getRandomTag(){
  const tagsEl = Array.from(document.querySelectorAll(".tag"));
  return tagsEl[Math.floor(Math.random() * tagsEl.length)];
}

function highlightTags(tag){
  tag.classList.add("highlight");
};

function removeTagHighlight(tag){
  tag.classList.remove("highlight");
};
