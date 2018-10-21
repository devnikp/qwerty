var total = 0;
var after = 0;
var theChange = 0;

function disc () {
  var discountN = document.getElementById("discount").value;
    document.getElementById("num").innerHTML = discountN;
}

document.getElementById('entry').onsubmit = enter;

function enter () {
  var entry = document.getElementById('newEntry').value;
  var discountN = document.getElementById("discount").value;
  var price;
  var theDisc = (100-discountN)/100;
  switch (entry){
      case "eggs": price = 12; break;
      case "milk": price = 16; break;
      case "bread": price = 6; break;
  }
  total = total + price;
  document.getElementById('entries').innerHTML += '<tr><td>' + entry + '</td><td>' + price + ' k' + '</td></tr>';
  document.getElementById('total').innerHTML = total;
  after = total * theDisc;
  document.getElementById('after').innerHTML = after;
  document.getElementById('newEntry').value = '';
  return false;
}

function change () {
  var payN = document.getElementById("cstpay").value;
  theChange = payN - total;
  document.getElementById('theChange').innerHTML = theChange;
}
