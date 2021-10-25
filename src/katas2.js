function add(numero1, numero2){

    return numero1 + numero2;
}

console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function multiply(numero1, numero2){
    let multiplicacao = 0;

    for(let contador = 1; contador <= numero2; contador++){
        multiplicacao = add(numero1, multiplicacao);
    }

    return multiplicacao;
}
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function power(numero1, numero2){
    let exponenciacao = numero1;

    for( let contador = 1; contador < numero2; contador++){
        exponenciacao = multiply(numero1, exponenciacao);
    }

    return exponenciacao;
}
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function factorial(numero){
    let fatorial = 1;

    for(let contador = 1; contador <= numero; contador++){
        fatorial = multiply(fatorial,contador);
    }

    return fatorial;
}
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fibonacci (numero){
    let fibo, numeroAux = 1, numeroAux1 = 0,index = 0;

   while(index < numero-1){
       fibo = add(numeroAux,numeroAux1);
       numeroAux1 = numeroAux;
       numeroAux = fibo;
       index++;
    }
    return fibo;

}

console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
