/*
    Projeto Page Hamburgueria - JavaScript
    Desenvolvido por: [Seu Nome]
    Data: [Data de Desenvolvimento]
    Descrição:
    Este projeto é uma página de hamburgueria que utiliza JavaScript para manipular o DOM e exibir informações sobre os produtos disponíveis. A página inclui funcionalidades como mostrar todos os produtos, mapear os produtos, somar os preços dos produtos e filtrar os produtos com base em critérios específicos.
    Funcionalidades:
    1. Mostrar Todos os Produtos: Exibe uma lista completa de todos os produtos disponíveis na hamburgueria. (usando forEach para iterar sobre os produtos e exibi-los no DOM)
    2. Mapear Produtos: Permite mapear os produtos para exibir informações específicas, como nome e preço. (usando map para criar um novo array com as informações desejadas-aplicar 10% de desconto no preço dos produtos)
    3. Somar Preços dos Produtos: Calcula a soma total dos preços de todos os produtos disponíveis. (usando reduce para acumular o valor total dos preços)
    4. Filtrar Produtos: Permite filtrar os produtos com base em critérios como preço, categoria ou ingredientes. (usando filter para criar um novo array com os produtos que atendem aos critérios de filtragem)
    Tecnologias Utilizadas:
    - HTML5 para a estrutura da página.
    - CSS3 para o estilo e layout da página.
    - JavaScript para a manipulação do DOM e implementação das funcionalidades.
    - GitHub para hospedar o código e compartilhar o projeto.
    Instruções de Uso:
    1. Clone o repositório do projeto no GitHub.
    2. Abra o arquivo index.html em um navegador web para visualizar a página da hamburgueria.
    3. Utilize os botões disponíveis para interagir com as funcionalidades da página.
*/

// Seleciona os elementos do DOM
const btnShowAll = document.querySelector('.btn-show-all');
const menuList = document.querySelector('.menu-list');
const btnMapAll = document.querySelector('.btn-map');
const btnReduce = document.querySelector('.btn-reduce');
const btnFilter = document.querySelector('.btn-filter');
// Função que usa forEach para mostrar todos os produtos
function showAllProducts(newListProducts, showDiscount = false) {
    // Limpa a lista antes de adicionar novos produtos
    menuList.innerHTML = ''

    // forEach percorre cada produto do array menuOptions
    newListProducts.forEach((product, index) => {
        // Para cada produto, criamos um elemento HTML (card)
        const card = document.createElement('li')

        card.classList.add('card')
        card.style.animationDelay = `${index * 0.15}s`;

        // Condicional: mostra o label apenas se showDiscount for true
        const discountLabel = showDiscount ? '<p class="discount-label">✨ 10% OFF</p>' : '';

        card.innerHTML = `
      <figure>
        <img src="${product.src}" alt="${product.name}">
      </figure>
      <h2>${product.name}</h2>
      <p class="item-price">R$ ${product.price.toFixed(2)}</p>
      ${discountLabel}`;
        // Adiciona o card à lista no HTML
        menuList.appendChild(card)
    });
}

// ===================================================
// SEGUNDA LÓGICA: MAP (Aplicar 10% de Desconto)
// ===================================================

function applyDiscount() {
    const discountedProducts = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAllProducts(discountedProducts, true) // true = mostrar o label de desconto
    
}

// ===================================================
// TERCEIRA LÓGICA: REDUCE (Somar Todos os Preços)
// ===================================================

function calculateTotalPrice() {
    // Limpa a lista antes de exibir o resultado
    menuList.innerHTML = ''

    // REDUCE: Soma todos os preços SEM desconto
    const totalWithoutDiscount = menuOptions.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);

    // REDUCE: Soma todos os preços COM desconto (10%)
    const totalWithDiscount = menuOptions.reduce((acc, curr) => {
        return acc + (curr.price * 0.9);
    }, 0);

    // Calcula quanto economiza
    const savings = totalWithoutDiscount - totalWithDiscount;

    // Cria um card com os totais
    const summaryCard = document.createElement('li');
    summaryCard.classList.add('card');
    summaryCard.classList.add('total-card');

    // Cria e exibe os totais e a economia no card na página.
    summaryCard.innerHTML = `
    <h2 class="total-title">
        💰 Resumo Financeiro
    </h2>

    <div class="total-grid">

        <div class="total-box">
            <h3>📋 Sem desconto</h3>

            <p class="total-value total-value-red">
                R$ ${totalWithoutDiscount.toFixed(2)}
            </p>
        </div>

        <div class="total-box">
            <h3>🏷️ Com 10% OFF</h3>

            <p class="total-value total-value-green">
                R$ ${totalWithDiscount.toFixed(2)}
            </p>
        </div>

    </div>

    <div class="savings-box">
        <h3>💚 Você economiza</h3>

        <p class="savings-value">
            R$ ${savings.toFixed(2)}
        </p>
    </div>
    `;

    menuList.appendChild(summaryCard);
}

// ===================================================
// QUARTA LÓGICA: FILTER (Filtrar Veganos)
// ===================================================

function filterVeganProducts() {
    // Limpa a lista antes de exibir os filtrados
    menuList.innerHTML = ''

    // FILTER: Cria um novo array apenas com produtos veganos
    const veganProducts = menuOptions.filter((product) => {
        return product.vegan === true;
    });

    // Se não houver produtos veganos
    if (veganProducts.length === 0) {
    const emptyMessage = document.createElement('li');

    emptyMessage.classList.add('empty-message');

    emptyMessage.innerHTML = `
        <h2>Nenhum hambúrguer vegano disponível 😢</h2>
    `;

    menuList.appendChild(emptyMessage);

    return;
}

    // Exibe os produtos veganos usando forEach
    veganProducts.forEach((product, index) => {
        const card = document.createElement('li');

        card.classList.add('card');
        card.style.animationDelay = `${index * 0.15}s`;

        card.innerHTML = `
      <figure>
        <img src="${product.src}" alt="${product.name}">
      </figure>
      <h2>${product.name}</h2>
      <p class="item-price">R$ ${product.price.toFixed(2)}</p>
      <p class="vegan-label">🌱 100% Vegano</p>`;

        menuList.appendChild(card);
    });
}



// Adiciona os ouvintes de clique nos botões

// Ouvinte para mostrar todos os produtos, usando forEach. Passamos o array completo menuOptions e false para não mostrar o label de desconto. Sempre que eu for passar dados preciso usar uma função anônima () => para chamar a função showAllProducts.
btnShowAll.addEventListener('click', () => showAllProducts(menuOptions));
// Ouvinte para aplicar desconto usando map
btnMapAll.addEventListener('click', applyDiscount);
// Ouvinte para calcular o preço total, preço com desconto e economia, usando reduce
btnReduce.addEventListener('click', calculateTotalPrice);
// Ouvinte para filtrar produtos veganos, usando filter
btnFilter.addEventListener('click', filterVeganProducts);
