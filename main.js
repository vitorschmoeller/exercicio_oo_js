function Pessoa(nome,sobrenome,idade,sexo) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.sexo = sexo;
}

function Funcionario(nome,sobrenome,idade,sexo,cargo,salario){
    this.cargo = cargo;
    
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number'){
            _salario = valor


        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }
    Pessoa.call(this,nome,sobrenome,idade,sexo);
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Schmoeller", 23,"Homem","Desenvolvedor", 15000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
        
    }
}


const pessoa1 = new Pessoa("Hellen","Felix",30,"mulher");
console.log(pessoa1);

const funcionario1 = new Funcionario("Hellen","Felix",20,"Mulher","Analista de dados", 5000);
const funcionario2 = new Gerente("Vitor");
const funcionario3 = new Pessoa("Weslley","Kinderman",24,"Homem")
funcionario1.aumento()
console.log(funcionario1);
console.log(funcionario1.getSalario())
funcionario2.aumento()
console.log(funcionario2);
console.log(funcionario2.getSalario())

console.log(funcionario3)
