class Estacionamento {
  constructor(num) {
    this.qntd = num;
    this.vagas = [];
    this.relatorio = [];
    this.saldo = 0;
  }

  estacionar(veiculo, horario) {
    if(this.vagas.length >= this.qntd) {
      alert("Estacionamento cheio");
    } else {
      var novo = {
        veiculo: veiculo,
        horaEntrada: horario,
        horaSaida: '-',
      };
      this.vagas.push(novo);
      console.log(this.vagas);
    }
  }

  liberar(idVeiculo, horario) {
    for (var i = 0; i < this.vagas.length; i++) {
      if (this.vagas[i].veiculo.getID() == idVeiculo) {
        var reg = {
          veiculo: this.vagas[i].veiculo,
          horaEntrada: this.vagas[i].horaEntrada,
          horaSaida: horario,
        };
        this.saldo = this.saldo + this.vagas[i].veiculo.calcularValorPago(this.vagas[i].horaEntrada,horario);
        this.relatorio.push(reg);
        this.vagas.splice(i, 1);
        return;
      }
    }
    alert("ID não encontrado");
  }

  gerarRelatorio() {
    var rel = document.getElementById("relatorio");
    rel.innerHTML = '';
    for(var i=0; i<this.relatorio.length; i++) {
      this.criaDiv(this.relatorio[i]);
    } 
    for(var i=0; i<this.vagas.length; i++) {
      this.criaDiv(this.vagas[i]);
    }
  }

  getSaldo() {
    var mostra = document.getElementById("saldo");
    mostra.innerHTML='';

    var div = document.createElement("div");
    var paragrafoSaldo = document.createElement("span");
    var saldo = document.createTextNode("Saldo: R$" + this.saldo + ",00");

    paragrafoSaldo.append(saldo);
    div.append(paragrafoSaldo);

    mostra.append(div);
  }

  criaDiv(infos) {
    var div = document.createElement("div");
    var paragrafoNome = document.createElement("p");
    var paragrafoPlaca = document.createElement("p");
    var paragrafoHoraEntrada = document.createElement("p");
    var paragrafoHoraSaida = document.createElement("p");
    var linha = document.createElement("hr");
    var nome = document.createTextNode("Nome: " + infos.veiculo.getNome());
    var placa = document.createTextNode("Placa: " + infos.veiculo.getPlaca());
    var horaEntrada = document.createTextNode("Hora Entrada: " + infos.horaEntrada);
    var horaSaida = document.createTextNode("Hora Saida: " + infos.horaSaida);
  
    paragrafoNome.append(nome);
    paragrafoPlaca.append(placa);
    paragrafoHoraEntrada.append(horaEntrada);  
    paragrafoHoraSaida.append(horaSaida);
  
    div.append(paragrafoNome);
    div.append(paragrafoPlaca);
    div.append(paragrafoHoraEntrada);
    div.append(paragrafoHoraSaida);
    div.append(linha);
  
    var rel = document.getElementById("relatorio");
    rel.append(div);
  }
  
}