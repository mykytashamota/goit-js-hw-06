const categoryEl = document.querySelector("#categories");
console.log("Number of categories:", categoryEl.children.length);

const categoryItems = document.querySelectorAll("li.item");

categoryItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryCount = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryCount}`);
});
