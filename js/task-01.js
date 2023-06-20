// ------------ Number of categories ------------

const categories = document.querySelector("#categories");
const categoryItems = categories.querySelectorAll("li.item");
console.log("Number of categories:", categoryItems.length);

// ------------ Categories ------------

categoryItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryCount = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryCount}`);
});
