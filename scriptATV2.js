const conselhos = [
    "Amigo(a), relaxa, TEMOS FEIJOADA!",
    "Todo dia é um novo dia para um novo você.",
    "E TAMBÉM TEMOS PÃO DE QUEIJO!!",
    "Ainda dá tempo, se esforce sempre!"
];
const conselhoTexto = document.getElementById('conselhoTexto');
const novoConselhoBtn = document.getElementById('novoConselhoBtn');

function gerarConselho() {
    //BUG CORRIGIDO: Removemos o "+ 1"
    const indice = Math.floor(Math.random() * conselhos.length);
    conselhoTexto.textContent = conselhos[indice];
}
novoConselhoBtn.addEventListener('click', gerarConselho);