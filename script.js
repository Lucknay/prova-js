const botao = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');
const valor_conta = document.querySelector('#valorConta');
const qualidade_servico = document.querySelector('#qualidadeServico');

const calcularGorjeta = (valor, percentual, callback) => {
    const gorjeta = valor * percentual; 
    const total = valor + gorjeta; 
    callback(gorjeta, total);  
};

const exibirResultado = (gorjeta, total) => {
    resultado.innerHTML = `
        <p>Gorjeta sugerida: R$ ${gorjeta.toFixed(2)}</p>
        <p>Total a pagar: R$ ${total.toFixed(2)}</p>
    `;
};

botao.addEventListener('click', () => {
    const valor = parseFloat(valor_conta.value); 

    if (valor < 0 || isNaN(valor)) { 
        alert('Digite um valor válido.');
    } else {
        const percentual = parseFloat(qualidade_servico.value); 
        calcularGorjeta(valor, percentual, exibirResultado); 
    }
});
