var greeting = [not initialized];
var name = ‘[not initialized]’;
var message = ‘[not initialized]’;
var welcome = greeting + name + message;
var sign = ‘[not initialized]’;
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById(getId);

function setTextContentById(getId, setText) {
  // Get the element that has an id of greeting
  var el = document.getElementById(getId);
  // Replace the content of that element with the personalized welcome message
  el.textContent = setText;
}

var el = document.getElementById(getSign);

function updateUserSign(getSign, signText) {
  // Get the element that has an id of greeting
  var elSign = document.getElementById(getSign);
  // Replace the content of that element with the personalized welcome message
  elSign.textContent = signText;
}

var el = document.getElementById(getTiles);

function updateTiles(getTiles, tileText) {
  // Get the element that has an id of greeting
  var elTiles = document.getElementById("tiles");
  // Replace the content of that element with the personalized welcome message
  elTiles.textContent = tileText;
}

var el = document.getElementById(getSubTotal);

function updateSubTotal(getSubTotal) {
  // Get the element that has an id of greeting
  var elSubTotal = document.getElementById("subTotal");
  // Replace the content of that element with the personalized welcome message
  elSubTotal.textContent = "$" + subTotal;
}

var el = document.getElementById(getShipping);

function updateShipping(getShipping) {
  // Get the element that has an id of greeting
  var elShipping = document.getElementById("shipping");
  // Replace the content of that element with the personalized welcome message
  elShipping.textContent = "$" + shipping;
}

var el = document.getElementById(getTotal);

function updateTotal(getTotal) {
  // Get the element that has an id of greeting
  var elGrandTotal = document.getElementById(getTotal);
  // Replace the content of that element with the personalized welcome message
  elGrandTotal.textContent = "$" + grandTotal;
}