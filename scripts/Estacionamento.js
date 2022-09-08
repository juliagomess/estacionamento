class Estacionamento {
  constructor(num) {
    this.qntd = num;
    this.vagas = [];
    this.relatorio = [];
  }

  estacionar(veiculo, horario) {
    if(this.vagas.length >= 20) {
      alert("Estacionamento cheio");
    } else {
      var novo = {
        veiculo: veiculo,
        horaEntrada: horario,
      };
      this.vagas.push(novo);
      console.log(vagas);
    }
  }

  liberar(idVeiculo, horario) {
    for (var i = 0; i < this.vagas.length; i++) {
      if (this.vagas[i].veiculo.getID == idVeiculo) {
        this.vagas.splice(i, 1);
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