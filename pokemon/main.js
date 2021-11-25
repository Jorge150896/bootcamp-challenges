const myApp = document.getElementById('app');
const productsContainer = document.createElement('div');


const getPokemon = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  // https://pokeapi.co/api/v2/pokemon?limit=151
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results
  // console.log(results)
  return results


}
const getPokemonExtras = async (indice = 1) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${indice}`;
  const response = await fetch(url);
  const data = await response.json();
  const cambio =  data.sprites.other.home
  const habilidad1 =  Object.values(data.abilities[0])[0]
  const habilidad2 =  Object.values(data.abilities[1])[0]
  const habilidad1a =  Object.values(habilidad1)[0]
  const habilidad2b =  Object.values(habilidad2)[0]

  console.log(`Images ${  Object.values(cambio)[0]}`)
  console.log(`habilidad1 ${  habilidad1a}`)
  console.log(`habilidad2 ${  habilidad2b}`)
  return  [Object.values(cambio)[0],habilidad1a ,habilidad2b]

}

// const getPokemonhabilidad = async (indice = 1) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${indice}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   const habilidad1 =  Object.values(data.abilities[0])[0]
//   const habilidad2 =  Object.values(data.abilities[1])[0]
//   const habilidad1a =  Object.values(habilidad1)[0]
//   const habilidad2b =  Object.values(habilidad2)[0]
//   console.log(`habilidad1 ${  habilidad1a}`)
//   console.log(`habilidad2 ${  habilidad2b}`)
//   return  [habilidad1a ,habilidad2b]

// }
const createProductHtml = async ( valorespok2 = {},index ) => {

  const valorespok3 = await valorespok2
 
  const  pokemon = await getPokemonExtras(index + 1);
  // const  habilidad= await getPokemonhabilidad(index + 1);
  console.log(index); 
  console.log(valorespok3.name);
  console.log(pokemon[0]); 
  console.log(`final  ${pokemon[1]} Y ${pokemon[2]}`); 
 
  const productContainer = document.createElement('div');
  productContainer.classList.add('product');

  const productPriceHTML = document.createElement('p');
  const productImageHTML = document.createElement('p');
  const productNameHTML = document.createElement('p');

  productImageHTML.classList.add('product__image');

  productPriceHTML.innerText = `Habilidades:\n\n 1) ${pokemon[1]}\n 2) ${pokemon[2]} `;
  productNameHTML.innerText = `${valorespok3.name}`;
  productImageHTML.innerHTML = `<img src="${pokemon[0]}" width="100" >`;

  productContainer.append(productImageHTML, productNameHTML, productPriceHTML);
  return productContainer;
};

const productsHTML = async (valorespok = []) => {
  // console.log("Hola");
  const valorespok2 = await valorespok

  console.log(await valorespok2);

  valorespok2.forEach( (valorespok2, index) => {
    console.log( valorespok2); 
    const  productHtml =  createProductHtml(valorespok2,index).then(response => productsContainer.append(response)) ;
    // console.log(productHtml)
    
  });



};

const init = () => {

  productsContainer.classList.add('productsContainer');
  myApp.append(productsContainer);
  const  valorespok = getPokemon();
  productsHTML(valorespok);

};

const filterAndSort = {
  menorAMayor() {
    return [...products].sort((a, b) => a.price - b.price);
  },
  mayorAMenor() {
    return [...products].sort((a, b) => b.price - a.price);
  },
  limpiar() {
    return products;
  },
  porColor() {
    const select = document.getElementById('color');
    const { value: color } = select.options[select.selectedIndex];

    if (color === 'all') {
      return this.limpiar();
    } else {
      const filterByColor = products.filter(product => product.color === color);
      return filterByColor;
    }
  },
};

const filterOrSort = type => {
  productsContainer.innerHTML = '';
  const filteredProducts = filterAndSort[type]();
  productsHTML(filteredProducts);
};

init();

getPokemon();
getPokemonExtras();
getPokemonhabilidad();