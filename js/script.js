// scrivere programma che stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
//console.log(i)

    let fizzBuzz;

    if (i % 3 === 0 && i % 5 === 0) {
        // per i multipli sia di 3 che di 5 stampare FIZZBUZZ
        fizzBuzz = "FizzBuzz";
    } else if (i % 3 === 0) {
        // per i multipli di 3 stampare FIZZ al posto del numero
        fizzBuzz = "Fizz";
    } else if (i % 5 === 0) {
        // per i multipli di 5 stampare BUZZ
        fizzBuzz = "Buzz";
    } else {
        fizzBuzz = i;
    }
    console.log(fizzBuzz);
};