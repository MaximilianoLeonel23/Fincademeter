// Sección vinos
const newWineSection = document.getElementById("new-wines-section");

// Fetching API Rest de Python
const getWinesRequest = async () => {
  try {
    const res = await fetch("https://maxoleodev.pythonanywhere.com/productos");
    const data = res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Crear componente
const createWineProduct = (product) => {
  const { nombre, id, tipo_vino, descripcion, stock, precio } = product;
  const productCard = document.createElement("div");
  productCard.setAttribute("id", id);
  productCard.setAttribute("class", "new-wine-product");
  productCard.innerHTML = `<h4>${nombre}</h4>
  <p>${descripcion}</p>
  <p>${tipo_vino}</p>
  <span>$ ${precio}</span>
  `;
  return productCard;
};

// Renderizar lista de componentes
const renderProducts = (vinos) => {
  vinos.forEach((vino) => {
    const newProduct = createWineProduct(vino);
    newWineSection.appendChild(newProduct);
  });
};

getWinesRequest().then((vinos) => {
  if (vinos !== null) {
    renderProducts(vinos);
  }
});
