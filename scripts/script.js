var estacionamento = new Estacionamento(20);
var cont = 1;

function entradaVeiculo() {  
  var id = document.getElementById("id");
  var nome = document.getElementById("nome");
  var placa = document.getElementById("placa");
  var marca = document.getElementById("marca");
  var cor = document.getElementById("cor");
  var horaEntrada = document.getElementById("horaEntrada");

  var veiculo = new Veiculo(cont,placa.value,marca.value,cor.value,nome.value);
  estacionamento.estacionar(veiculo,horaEntrada.value);
  cont++;

  nome.value = '';
  placa.value = '';
  marca.value = '';
  cor.value = '';
  horaEntrada.value = '';
  id.value = cont;
}

function saidaVeiculo() {
  var id = document.getElementById("idSaida");
  var horaSaida = document.getElementById("horaSaida");

  estacionamento.liberar(id.value,horaSaida.value);

  id.value = '';
  horaSaida.value = '';
}

function relatorio() {
  estacionamento.gerarRelatorio();
}