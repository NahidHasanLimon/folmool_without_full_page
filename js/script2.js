function paymentFunction() {
  if (document.getElementById("cash").checked == true) {
    document.getElementById("cash-input").style.display = "block";
    document.getElementById("paypal-input").style.display = "none";
    document.getElementById("bkash-input").style.display = "none";
  }

  if (document.getElementById("paypal").checked == true) {
    document.getElementById("paypal-input").style.display = "block";
    document.getElementById("cash-input").style.display = "none";
    document.getElementById("bkash-input").style.display = "none";
  }

  if (document.getElementById("bkash").checked == true) {
    document.getElementById("bkash-input").style.display = "block";
    document.getElementById("cash-input").style.display = "none";
    document.getElementById("paypal-input").style.display = "none";
  }
}
function dropMenu() {
  document.getElementById("menu").style.height = "100%";
 
  
}

function crossMenu() {
 
  document.getElementById("menu").style.height = "0%";
  
}



