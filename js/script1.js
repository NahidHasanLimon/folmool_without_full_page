// check if html loaded
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// if loaded
function ready() {
  // remove  Item
  var removeCartItemButtons = document.getElementsByClassName("delete-button");

  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  // if quantity change
  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  // if quantity increase

  var plus = document.getElementsByClassName("m-plus");

  for (var i = 0; i < plus.length; i++) {
    var input = plus[i];
    input.addEventListener("click", inputIncreased);
  }

  // if quantity decrease
  var minus = document.getElementsByClassName("m-minus");

  for (var i = 0; i < minus.length; i++) {
    var input = minus[i];
    input.addEventListener("click", inputDecreased);
  }

  updateCartTotal();
}

// remove  Item function
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

// quantity change function
function quantityChanged(event) {
  var input = event.target;

  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }

  updateCartTotal();
}

// quantity increase function

function inputIncreased(event) {
  var input = event.target.parentElement.parentElement.getElementsByClassName(
    "cart-quantity-input"
  )[0];
  input.value = parseFloat(input.value) + 1;
  updateCartTotal();
}

// quantity decrease function
function inputDecreased(event) {
  var input = event.target.parentElement.parentElement.getElementsByClassName(
    "cart-quantity-input"
  )[0];
  var show = parseFloat(input.value);

  if (isNaN(show) || show <= 1) {
    input.value = 1;
  } else {
    show = show - 1;

    input.value = show;
  }
  updateCartTotal();
}

// update item Total and main Total
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("item-list")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-item");

  var total = 0;

  for (i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("m-unit")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];

    var price = parseFloat(priceElement.innerText.replace("BDT", ""));

    var quantity = quantityElement.value;

    document.getElementsByClassName("m-amount")[i].innerText = price * quantity;
    total = total + price * quantity;
  }
  document.getElementsByClassName("s-total")[0].innerText = total;
  document.getElementsByClassName("total")[0].innerText = total;
}

