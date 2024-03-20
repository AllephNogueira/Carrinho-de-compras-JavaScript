carrinhoLimpo();
let ProdutoTotal = 0;
adicionarProdutosNaLista();

function adicionarProdutosNaLista(){
    let novosProdutos = document.getElementById('produto');
    novosProdutos.innerHTML += `<option value="Xbox One - R$5000">Xbox One - R$5000,00</option>`;
}

function adicionar(){
    // Recuperar produtos
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]; // Quero oque esta depois do R$
    let quantidade = document.getElementById('quantidade').value;
    if (quantidade < 1){
        alert('Voce deve adicionar a quantidade de itens');
        return;
    }

    produtosNoCarrinho(quantidade, nomeProduto, valorUnitario)
      
}

function produtosNoCarrinho(quantidade, nomeProduto, valorUnitario){

   
    let valorTotal =  valorUnitario * quantidade; // PrecoUnitario * quantidade



    // Adicionando produtos no carrinho com quantidade preço, nome e valorUnitario
    let meuCarrinho = document.getElementById('lista-produtos');
    meuCarrinho.innerHTML +=
     // Aqui estou dizendo que meu carrinho vai incrementar.
     `<section class="carrinho__produtos__produto">
    <span class="texto-azul"></span> ${nomeProduto} <span class="texto-azul">${quantidade} x R$${valorUnitario} = ${valorTotal}</span><br>`;


    ProdutoTotal = ProdutoTotal + valorTotal;
    let precoFinal = document.getElementById('valor-total')
    precoFinal.textContent = (ProdutoTotal) // Valor total dos produtos.


    // Zerando o botao quantidade apos o usuario adicionar a quantidade que ele quer.

    document.getElementById('quantidade').value = 0;

}

// Funçoes para remover os itens do carrinho.
function carrinhoLimpo(){
    let meuCarrinho = document.getElementById('lista-produtos');
    meuCarrinho.innerHTML =  `<section class="carrinho__produtos__produto">
    <span class="texto-azul"> </span>   <span class="texto-azul"> </span><br>`;


    let precoFinal = document.getElementById('valor-total')
    precoFinal.textContent = '0';
}

function limpar(){
    carrinhoLimpo()
    if(confirm('Remover os itens do seu carrinho?')){
        alert('Voce removeu todos os itens do seu carrinho!')
    }
    
}