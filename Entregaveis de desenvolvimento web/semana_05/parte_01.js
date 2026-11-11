 // Parte 1

let pedidos = [
    { cliente: "Bia", valor: 120, status: "pago" },
    { cliente: "João", valor: 50, status: "pendente" },
    { cliente: "", valor: 30, status: "pago" },
    { cliente: "Rafa", valor: 75, status: "pago" }
];

let validos = pedidos.filter(p => p.cliente.trim() !== "" && p.valor > 0);
let pagos = validos.filter(p => p.status === "pago");
let total = pagos.reduce((soma, p) => soma + p.valor, 0);

pagos.forEach(p => console.log(p.cliente + " — R$ " + p.valor.toFixed(2)));
console.log("Total: R$ " + total.toFixed(2));
