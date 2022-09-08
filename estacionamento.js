class estacionamento {
    constructor() {
        this.vagas = [];
        this.relatorio = [];
    }

    estacionar(veiculo, horario) {
        var novo = {
            veiculo: veiculo,
            horaEntrada: horario,
        };
        this.vagas.push(novo);
    }

    liberar(idVeiculo, horario) {
        for(var i=0; i<this.vagas.length; i++) {
            if(this.vagas[i].veiculo.id == idVeiculo) {
                this.vagas.splice(i,1);
                var reg = {
                    veiculo: this.vagas[i].veiculo,
                    horaEntrada: this.vagas[i].horaEntrada,
                    horaSaida: horario,
                };
                this.relatorio.push(reg);
                break;
            }
        }
    }

    gerarRelatorio() {

    }

    getSaldo() {
        
    }
}