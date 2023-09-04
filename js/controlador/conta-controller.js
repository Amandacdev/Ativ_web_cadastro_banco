class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();

        this.tipoConta = document.querySelector('#seletorTipos');
        this.elementoNumero = document.querySelector('#numero');
        this.elementoSaldo = document.querySelector('#saldo');
        this.elementoDataAniversario = document.querySelector('#dataAniversario');

    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }
   
    inserir(evento) {
        evento.preventDefault();

        switch (this.tipoConta.value)
        {
            case 'Conta Regular':{
                if(this.elementoNumero.value == "" || this.elementoSaldo.value =="") {
                    alert("Insira as informações no campos corretos.");
                    break;
                }
                const conta = new Conta(this.elementoNumero.value,
                    Number(this.elementoSaldo.value));
                this.repositorioContas.adicionar(conta);
                this.inserirContaNoHTML(conta);
                console.log('Criou conta do tipo regular');
                break;
            }
            case 'Conta Bonificada':{
                if(this.elementoNumero.value == "" || this.elementoSaldo.value =="") {
                    alert("Insira as informações no campos corretos.");
                    break;
                }
                const conta = new ContaBonificada(this.elementoNumero.value,
                    Number(this.elementoSaldo.value));
                this.repositorioContas.adicionar(conta);
                this.inserirContaNoHTML(conta);
                console.log('Criou conta do tipo bonificada');
                break;
            }
            case 'Conta Poupança':{
                if(this.elementoNumero.value == "" || this.elementoSaldo.value =="" || this.elementoDataAniversario.value == "") {
                    alert("Insira as informações no campos corretos.");
                    break;
                }

                else{
                    const conta = new Poupanca(this.elementoNumero.value,
                        Number(this.elementoSaldo.value), this.elementoDataAniversario.value);
                    this.repositorioContas.adicionar(conta);
                    this.inserirContaNoHTML(conta);
                        console.log('criou tipo 3');
                }
            }
        }
    }

    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.saldo;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
       
    }
}
