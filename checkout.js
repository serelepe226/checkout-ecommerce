
 // ===== SEÇÃO 1: CARRINHO (laços de repetição) =====

function calcularSubtotal(itens) {
  let subtotal = 0;

  for (const item of itens) {
    subtotal += item.preco * item.quantidade;
  }
  // Calcula o valor total dos produtos antes dos descontos.

  return subtotal;
}

function contarItens(itens) {
  let total = 0;

  for (const item of itens) {
    total += item.quantidade;
  }

  return total;
}
// Conta todas as unidades presentes no carrinho.


// ===== SEÇÃO 2: CUPOM (estruturas condicionais) =====

function aplicarCupom(subtotal, codigo) {
  codigo = codigo.trim().toUpperCase();

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


// ===== SEÇÃO 3: CHECKOUT (integração) =====

function finalizarCompra(itens, codigoCupom) {
  const subtotal = calcularSubtotal(itens);
  const valorFinal = aplicarCupom(subtotal, codigoCupom);
  const desconto = subtotal - valorFinal;

  return {
    subtotal,
    desconto,
    total: valorFinal
  };
}


// ===== SEÇÃO 4: TESTES =====

const itens = [
  { nome: "Camiseta", preco: 50, quantidade: 2 },
  { nome: "Tênis", preco: 150, quantidade: 1 }
];

console.log(finalizarCompra(itens, "DESC10"));