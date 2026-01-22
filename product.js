const output = document.getElementById("output");

function print(title, data) {
  const section = document.createElement("div");
  section.innerHTML = `<h2>${title}</h2><pre>${JSON.stringify(
    data,
    null,
    2
  )}</pre>`;
  output.appendChild(section);
}
//Câu 1
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}
print("Câu 1: Constructor Product", "Đã khai báo Product");

//Câu 2
const products = [
  new Product(1, "iPhone 15", 35000000, 10, "Phones", true),
  new Product(2, "Samsung S23", 28000000, 0, "Phones", true),
  new Product(3, "MacBook Air", 32000000, 5, "Laptops", true),
  new Product(4, "Dell XPS", 30000000, 3, "Laptops", false),
  new Product(5, "AirPods Pro", 6500000, 20, "Accessories", true),
  new Product(6, "Magic Mouse", 2500000, 15, "Accessories", true),
];
print("Câu 2: Danh sách sản phẩm", products);

//Câu 3
const namePriceList = products.map((p) => ({
  name: p.name,
  price: p.price,
}));

print("Câu 3: Tên và giá sản phẩm", namePriceList);

//Câu 4
const inStockProducts = products.filter((p) => p.quantity > 0);
print("Câu 4: Sản phẩm còn hàng", inStockProducts);

//Câu 5
const hasProductOver30M = products.some((p) => p.price > 30000000);
print("Câu 5: Có sản phẩm giá > 30 triệu?", hasProductOver30M);

//Câu 6
const accessoriesProducts = products.filter(
  (p) => p.category === "Accessories"
);
const allAccessoriesAvailable = accessoriesProducts.every((p) => p.isAvailable);
print("Câu 6: Accessories đang bán?", allAccessoriesAvailable);

//Câu 7
const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.quantity,
  0
);
print("Câu 7: Tổng giá trị kho", totalInventoryValue);

//Câu 8
const productInfo = [];
for (const p of products) {
  productInfo.push(
    `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`
  );
}
print("Câu 8: for...of", productInfo);

//Câu 9
const productProperties = [];
for (const key in products[0]) {
  productProperties.push(`${key}: ${products[0][key]}`);
}
print("Câu 9: for...in", productProperties);

//Câu 10
const availableProductNames = products
  .filter((p) => p.isAvailable && p.quantity > 0)
  .map((p) => p.name);
print("Câu 10: Sản phẩm đang bán & còn hàng", availableProductNames);
