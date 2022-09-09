class Estacionamento {
  constructor(num) {
    this.qntd = num;
    this.vagas = [];
    this.relatorio = [];
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
        this.relatorio.push(reg);
        this.vagas.splice(i, 1);
        break;
      }
    }
    console.log(this.vagas);
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

  }

  criaDiv(infos) {
    var div = document.createElement("div");
    var paragrafoNome = document.createElement("span");
    var paragrafoPlaca = document.createElement("span");
    var paragrafoHoraEntrada = document.createElement("span");
    var paragrafoHoraSaida = document.createElement("span");
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
  
    var rel = document.getElementById("relatorio");
    rel.append(div);
  }
  
}