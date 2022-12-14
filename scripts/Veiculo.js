class Veiculo {
  constructor(id, placa, marca, cor, nome) {
    this.id = id;
    this.placa = placa;
    this.marca = marca;
    this.cor = cor;
    this.nome = nome;
  }

  setID(newID) {
    this.id = newID;
  }

  getID() {
    return this.id;
  }

  setPlaca(newPlaca) {
    this.placa = newPlaca;
  }

  getPlaca() {
    return this.placa;
  }

  setMarca(newMarca) {
    this.marca = newMarca;
  }

  getMarca() {
    return this.marca;
  }

  setCor(newCor) {
    this.cor = newCor;
  }

  getCor() {
    return this.cor;
  }

  setNome(newNome) {
    this.nome = newNome;
  }

  getNome() {
    return this.nome;
  }
}

class Carro extends Veiculo {
  calcularValorPago(horaEntrada, horaSaida) {
    var horaEnt = parseInt(horaEntrada.slice(0, 2));
    var minEnt = parseInt(horaEntrada.slice(3, 5));
    var horaSai = parseInt(horaSaida.slice(0, 2));
    var minSai = parseInt(horaSaida.slice(3, 5));

    var entrada = horaEnt * 60 + minEnt;
    var saida = horaSai * 60 + minSai;

    var total = saida - entrada;

    if(total < 0) {
      var tempMin = 60 - minEnt;
      var tempHora = 24 - horaEnt + 1;

      if(tempMin == 60) {
        tempMin = 0;
        tempHora = 24 - horaEnt;
      }
      
      entrada = tempHora * 60 + tempMin;
      
      total = entrada + saida;
    }

    if (total <= 15) {
      return 0;
    }

    if (total <= 60 || total < 240) {
      return 4;
    }

    if (total >= 240) {
      return 20;
    }
  }
}

class Moto extends Veiculo {
  calcularValorPago(horaEntrada, horaSaida) {
    var horaEnt = horaEntrada.slice(0, 2);
    var minEnt = horaEntrada.slice(3, 5);
    var horaSai = horaSaida.slice(0, 2);
    var minSai = horaSaida.slice(3, 5);

    var entrada = horaEnt * 60 + minEnt;
    var saida = horaSai * 60 + minSai;

    var total = saida - entrada;

    if(total < 0) {
      var tempMin = 60 - minEnt;
      var tempHora = 24 - horaEnt + 1;

      if(tempMin == 60) {
        tempMin = 0;
        tempHora = 24 - horaEnt;
      }
      
      entrada = tempHora * 60 + tempMin;
      
      total = entrada + saida;
    }

    if (total <= 30) {
      return 0;
    }

    if (total <= 60 || total < 240) {
      return 2;
    }

    if (total >= 240) {
      return 10;
    }
  }
}