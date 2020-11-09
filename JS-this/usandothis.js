// Contexto global 
// é referenciado como um objeto global tanto que se der um console no this é possíver ver todos os objetos do document

console.log('verificando se o objeto document existe', this.document === document); // true

this.name = 'paulo';
console.log('verificando o name que criamos que no caso e o...', this.name);

// Em escopo de função
function f1(a){
    this.name = a;
    return this.name;
}

f1('gilma');

//escopo de func strict

// function f2(b){
//     "use strict"; // assume modo estrito
//     this.name = b;
//     return this;
// }
  
// f2('regis') === undefined; // true;

// Em Classes:

class myClass{
    constructor(){
        this.name = 'johnatan',
        this.age = '20',
        this.job = 'Front-End'
    }

    sayInformation(){
        console.log(`Olá eu sou ${this.name}, tenho ${this.age} e estou a procura de um trabalho como ${this.job}`)
    }
}

// Impossivel ele pegar da classe o nome nesse caso ele vai pegar o paulo por que esta no escopo global
console.log(this.name);

const saayy = new myClass();
saayy.sayInformation();