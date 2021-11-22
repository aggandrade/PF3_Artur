const calcular = document.getElementById('calcular');


function rendimento() {
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const juros = document.getElementById('juros').value;
    const n = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

    if (valor !== '' && juros !== '' && parcelas !== '' ) {
         
        const x = valor;
        let i = juros/100;
        const valorfinal = (((((1 + i) ** n) - 1)*x)/i).toFixed(2);

        resultado.textContent =`Olá ${nome}! Se você aplicar  R$${valor}, à uma taxa de ${juros}% ao mês, durante ${n} meses, acumulará uma poupança de R$${valorfinal}`

    }else {
        resultado.textContent = 'Para calcular o Rendimento , preencha todos os campos.';
    }

}

calcular.addEventListener('click', rendimento);