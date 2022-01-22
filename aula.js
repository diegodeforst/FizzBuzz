// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não divisível por 3 ou 5 => entrada
// Não é um número => "Não é um número"
const resultado = FizzBuzz(15); // dentro dos () do FizzBuzz será o numero de checagem
console.log(resultado);

function FizzBuzz(entrada){
    if ( typeof entrada !== 'number') // se o tipo não for (!) igual == a 'number'
        return 'Não é um numero'; // retonar a mensagem 'Não é um numero'
    if ((entrada % 3 === 0) && (entrada % 5 === 0)) // A coferência do FizzBuzz, tem que vir antes do Fizz e do Buzz, pois se não ao reconhecer um ou outro, ele não ira executar o FizzBuzz, que pe ver os multiplos de 3 e 5
        return 'FizzBuzz';
    if (entrada % 3 === 0 ) //verificar multiplo de 3
        return 'Fizz';
    if (entrada % 5 === 0 )//verificar multiplo de 5
        return 'Buzz';
   
    return entrada;

}