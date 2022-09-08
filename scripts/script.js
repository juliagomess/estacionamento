var estacionamento = new Estacionamento(20);
var cont = 1;

function entradaVeiculo() {
  var nome = document.getElementById("nome").value;
  var placa = document.getElementById("placa").value;
  var marca = document.getElementById("marca").value;
  var cor = document.getElementById("cor").value;
  var horaEntrada = document.getElementById("horaEntrada").value;

  var veiculo = new Veiculo(cont,placa,marca,cor,nome);

  estacionamento.estacionar(veiculo,horaEntrada);
}
