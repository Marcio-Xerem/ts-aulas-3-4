class Pessoa {
    nome: string;
    dt_nascimento: Date;
    genero: string;
       
    constructor(n: string, dt: Date, gen: string) {
        this.nome = n;
        this.dt_nascimento = dt;
        this.genero = gen
    }    
}

const p = new Pessoa('Aluno 1', new Date(1990,6,29,0,0,0),'masculino');

console.log(p);