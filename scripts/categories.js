const items = [
  {
    src: "../images/top-product-img/men1.webp",
    title: "luga",
    type: "men",
  },
  {
    src: "../images/top-product-img/men2.webp",
    title: "luga",
    type: "men",
  },
  {
    src: "../images/top-product-img/men3.webp",
    title: "luga",
    type: "men",
  },
  {
    src: "../images/top-product-img/women1.webp",
    title: "luga",
    type: "women",
  },
  {
    src: "../images/top-product-img/women2.webp",
    title: "luga",
    type: "women",
  },
  {
    src: "../images/top-product-img/women3.webp",
    title: "luga",
    type: "women",
  },
  {
    src: "../images/top-product-img/kids1.webp",
    title: "luga",
    type: "kids",
  },
  {
    src: "../images/top-product-img/kids2.webp",
    title: "luga",
    type: "kids",
  },
];
const list = Array.from(document.querySelector(".tab").children);
const grid = document.querySelector(".c-grid");

const title = document.querySelector(".title");
function populateContent(items) {
  // function to remvoe current grid items first before populating newItems

  (function removeContent() {
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
  })();

  items.map((item) => {
    const article = document.createElement("article");
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", item.src);
    article.appendChild(imgEl);
    const info = document.createElement("div");
    info.setAttribute("class", "info");
    const title = document.createElement("h2");
    title.innerHTML = item.title;
    const price = document.createElement("h4");
    price.innerHTML = 1000;
    info.appendChild(title);
    info.appendChild(price);
    article.appendChild(info);
    const btn = document.createElement("button");
    btn.setAttribute("class", "cartBtn");
    btn.innerHTML = "Add to cart";
    article.appendChild(btn);
    grid.appendChild(article);
  });
}

window.onload = function () {
  title.innerHTML = "all";
  populateContent(items);
};

for (let i = 0; i < list.length; i++) {
  const item = list[i];
  item.addEventListener("click", function () {
    title.innerHTML = item.innerHTML;
    if (i == 0) {
      populateContent(items);
    } else if (i == 1) {
      const menItems = items.filter((item) => item.type === "men");
      populateContent(menItems);
    } else if (i == 2) {
      const womenItems = items.filter((item) => item.type === "women");
      populateContent(womenItems);
    } else {
      const kidsItems = items.filter((item) => item.type === "kids");
      populateContent(kidsItems);
    }
  });
}
