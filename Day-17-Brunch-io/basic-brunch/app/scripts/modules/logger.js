import random from './random';

console.log('random is',random)
export default function logs(phrase) {
    setTimeout(function() {
        console.log(phrase);
        logs(phrase);
    }, random(1000,3000));
    console.log('logger')
}