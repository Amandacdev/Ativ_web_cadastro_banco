class Poupanca extends Conta {
    constructor(numero, saldo, dataAniversario) {
        super(numero, saldo);
        this._dataAniversario = dataAniversario;
    }

    //chamar creditar quando for a data de aniversario do usuario e o incrementa à Poupança os juros do mês
    creditar(valor) {
        super.creditar(valor * 1.1);
    }

    bonificar() {
        this.saldo *= 1.2;
    }

    get aniversario() {
        return this._dataAniversario;
    }

    set aniversario(novaData) {
        this._dataAniversario = novaData;
    }

}

