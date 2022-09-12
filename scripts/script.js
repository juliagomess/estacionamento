var estacionamento = new Estacionamento(20);
var cont = 1;

function verificaHora(hora) {
  if(hora.length > 5 || hora.length < 5) {
    alert("Horário inválido (exemplo: XX:XX)");
    return false;
  }

  if(hora.charAt(2) != ':'){
    alert("Horário inválido (exemplo: XX:XX)");
    return false;
  }

  if(isNaN(hora.charAt(0)) || isNaN(hora.charAt(1)) || isNaN(hora.charAt(3)) || isNaN(hora.charAt(4))) {
    alert("Horário inválido (exemplo: XX:XX)");
    return false;
  }
  
  var h = parseInt(hora.slice(0, 2));
  var m = parseInt(hora.slice(3, 5));

  if(h > 23 || h < 0) {
    alert("Horário inválido (exemplo: XX:XX)");
    return false;
  }

  if(m > 59 || m < 0) {
    alert("Horário inválido (exemplo: XX:XX)");
    return false;
  }

  return true;
}

function entradaVeiculo() {
  var id = document.getElementById("id");
  var nome = document.getElementById("nome");
  var placa = document.getElementById("placa");
  var marca = document.getElementById("marca");
  var cor = document.getElementById("cor");
  var horaEntrada = document.getElementById("horaEntrada");
  var carro = document.getElementById("carro");
  var moto = document.getElementById("moto");

  if (nome.value == '' || placa.value == '' || marca.value == '' || cor.value == '' || horaEntrada.value == '') {
    alert("Você precisa preencher todos os campos");
    return;
  }

  if(!verificaHora(horaEntrada.value)) {
    return;
  }

  var veiculo;
  if (carro.checked) {
    veiculo = new Carro(cont, placa.value, marca.value, cor.value, nome.value);
  } else if (moto.checked) {
    veiculo = new Moto(cont, placa.value, marca.value, cor.value, nome.value);
  } else {
    alert("Tipo invalido");
    return;
  }

  estacionamento.estacionar(veiculo, horaEntrada.value);
  cont++;

  nome.value = '';
  placa.value = '';
  marca.value = '';
  cor.value = '';
  horaEntrada.value = '';
  id.value = cont;
  moto.disabled = false;
  carro.disabled = false;
  moto.checked = false;
  carro.checked = false;
}

function saidaVeiculo() {
  var id = document.getElementById("idSaida");
  var horaSaida = document.getElementById("horaSaida");

  if (id.value == '' || horaSaida.value == '') {
    alert("Você precisa preencher todos os campos");
    return;
  }

  if(!verificaHora(horaSaida.value)) {
    return;
  }

  estacionamento.liberar(id.value, horaSaida.value);

  id.value = '';
  horaSaida.value = '';
}

function relatorio() {
  estacionamento.gerarRelatorio();
}

function saldo() {
  estacionamento.getSaldo();
}

function desabilita() {
  var moto = document.getElementById("moto");
  var carro = document.getElementById("carro");
  if (carro.checked) {
    moto.disabled = true;
  } else if (moto.checked) {
    carro.disabled = true;
  } else {
    moto.disabled = false;
    carro.disabled = false;
  }
}