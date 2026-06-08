const menuOptions = [

{ name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' },

{ name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' },

{ name: 'X-Bacon Egg', price: 39, vegan: false, src: './img/bacon-egg.png' },

{ name: 'Monstruoso', price: 50, vegan: false, src: './img/monstruoso.png' },

{ name: 'Big Vegano', price: 55, vegan: true, src: './img/xvegan.png' },

{ name: 'X-Vegan', price: 45, vegan: true, src: './img/monstruoso-vegan.png' },

]



/* 

// ===================================================
// SEGUNDA LÓGICA: MAP (Aplicar 10% de Desconto)
// ===================================================

// Seleciona o botão "Mapiar"
const btnMap = document.querySelector('.btn-map');

// Função que usa MAP para aplicar 10% de desconto
function applyDiscount() {
  // Limpa a lista antes de adicionar novos produtos
  menuList.innerHTML = '';

  // MAP cria um NOVO array transformando cada produto
  const productsWithDiscount = menuOptions.map((produto) => {
    // Calcula o preço com 10% de desconto
    const discountedPrice = produto.price * 0.9; // 90% do preço original

    // Retorna um NOVO objeto com o preço desconto
    return {
      ...produto, // Copia todos os dados do produto original
      price: discountedPrice // Sobrescreve o preço com o valor desconto
    };
  });

  // Agora exibimos os produtos com desconto
  productsWithDiscount.forEach((produto) => {
    const card = document.createElement('li');
    card.classList.add('card');

    card.innerHTML = `
      <figure>
        <img src="${produto.src}" alt="${produto.name}">
      </figure>
      <h2>${produto.name}</h2>
      <p class="item-price">R$ ${produto.price.toFixed(2)}</p>
      <p style="color: green; font-size: 12px; margin-top: 5px;">✨ 10% OFF</p>`;

    menuList.appendChild(card);
  });
}

// Adiciona um evento de clique no botão "Mapiar"
btnMap.addEventListener('click', applyDiscount);

*/

