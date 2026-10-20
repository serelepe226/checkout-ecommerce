
 // ===== SEÇÃO 1: CARRINHO (laços de repetição) =====

function calcularSubtotal(itens) {
  // TODO
}

function contarItens(itens) {
  // TODO
}


// ===== SEÇÃO 2: CUPOM (estruturas condicionais) =====

function aplicarCupom(subtotal, codigo) {
  if (codigo === "DESC10") {
    return Math.max(0, subtotal * 0.90);
  } else if (codigo === "DESC20" && subtotal >= 200) {
    return Math.max(0, subtotal * 0.80);
  } else if (codigo === "FRETEGRATIS") {
    return Math.max(0, subtotal - 15);
  } else {
    return subtotal;
  }
}
// DESC10 aplica 10% de desconto; DESC20 aplica 20% de desconto e só é válido para compras a partir de R$ 200; FRETEGRATIS aplica R$15,00 de desconto.


// ===== SEÇÃO 3: CHECKOUT (integração) =====

function finalizarCompra(itens, codigoCupom) {
  return { subtotal: 0, desconto: 0, total: 0 };
  // TODO: integrar carrinho e cupom
}


// ===== SEÇÃO 4: TESTES =====

const itens = [
  { nome: "Camiseta", preco: 50, quantidade: 2 },
  { nome: "Tênis", preco: 150, quantidade: 1 }
];

console.log(finalizarCompra(itens, "DESC10"));  // 90 & 15
console.log(aplicarCupom(100, "DESC10"));       // 90
console.log(aplicarCupom(250, "DESC20"));       // 200
console.log(aplicarCupom(100, "DESC20"));       // 100
console.log(aplicarCupom(100, "FRETEGRATIS"));  // 85
console.log(aplicarCupom(100, "INVALIDO"));     // 100