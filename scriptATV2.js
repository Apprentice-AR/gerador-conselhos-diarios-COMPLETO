const conselhos = [
    "Amigo(a), relaxa, TEMOS FEIJOADA!",
    "Todo dia é um novo dia para um novo você.",
    "E TAMBÉM TEMOS PÃO DE QUEIJO!!",
    "Ainda dá tempo, se esforce sempre!"
];
const conselhoTexto = document.getElementById('conselhoTexto');
const novoConselhoBtn = document.getElementById('novoConselhoBtn');

function gerarConselho() {
    //BUG INTENCIONAL AQUI
    const indice = Math.floor(Math.random * (conselhos.length + 1));
    conselhoTexto.textContent = conselhos[indice];
}
novoConselhoBtn.addEventListener('click', gerarConselho);