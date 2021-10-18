const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const sexo = document.getElementById('sexo').value;
    const resultado = document.getElementById('resultado');


    if (nome !== '' && altura !== '' && peso !== '' && sexo !== '') {

        const valorIMC = (peso / (altura ** 2)).toFixed(1);

        let classificacao = '';
        var ideal = "";


        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso (Grau 3). Procure ter um IMC entre 18.5 a 25';
        } else if (valorIMC < 25) {
            classificacao = 'com o peso ideal. Parabéns!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.';
        } else {
            classificacao = 'com obesidade grau III.';
        }

        if (sexo == 'M') {

            if (altura < 1.57) {
                ideal == "Seu peso ideal e menor que 52KG";
            } else if (altura < 1.70) {
                ideal == "Seu peso ideal esta entre 52-69KG";
            } else if (altura < 1.80) {
                ideal == "Seu peso ideal esta entre 70-85KG";
            } else if (altura < 1.93) {
                ideal == "Seu peso ideal esta entre 86-100KG";
            }


        } else if (sexo == 'F') {

            if (altura < 1.50) {
                ideal == "Seu peso ideal e menor que 45KG";
            } else if (altura < 1.60) {
                ideal == "Seu peso ideal esta entre 45-53KG";
            } else if (altura < 1.75) {
                ideal == "Seu peso ideal esta entre 54-69KG";
            } else if (altura < 1.85) {
                ideal == "Seu peso ideal esta entre 70-82KG";
            }
        }

        resultado.textContent = `Olá, ${nome}! Com ${peso}kg e ${altura}m, seu IMC é ${valorIMC}. Atualmente, você está ${classificacao}. Peso de ${ideal}`;

    } else {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }

}
calcular.addEventListener('click', imc);
