const elementos = [
    { tag: 'p', texto: 'Essa exercicio usa a função FOR!' },
    { tag: 'div', texto: 'A desestruturação de Elementos.' },
    { tag: 'footer', texto: 'Criando Tags.' },
    { tag: 'section', texto: 'E fazendo essas Frases serem chamadas.' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);