class Veiculo {
  constructor(id,placa,marca,cor,nome) {
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