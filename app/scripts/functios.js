/**
 * Description: Load data from the server and place the returned HTML into the matched elements. .load()
 */
$( ".header" ).load( "../components/header.html" );
$( ".topnav" ).load( "../components/nav.html" );
$( ".footer" ).load( "../components/footer.html" );

$( ".404" ).load( "../components/404_page.html" );



/*
* adds checkout page class
*/ 

function checkoutPage() {
  document.getElementById("checkoutPage").classList.add("checkout_page");

  $( ".checkout_page" ).load( "../components/checkout_page.html" );
  $("#checkoutPage").css("display","block");
}

function checkoutPagePurchase() {
  $( ".checkout_page" ).load( "../components/checkout_page_purchase.html" );
}

function checkoutPageSuccess() {
  $( ".checkout_page" ).load( "../components/checkout_page_success.html" );
}


/*
* remove checkout page by adding display:none; 2 the ID.
*/ 

function checkoutPageClose() {
  document.getElementById("checkoutPage")
  $("#checkoutPage").css("display","none");
}





/*
*It includes openNav
*/
 // Add a class to a DIV with javascript.
function openNav() {
    document.getElementById("mySidenav").classList.add("openSidenav");
}
  
function closeNav() {
    document.getElementById("mySidenav").classList.remove("openSidenav");
}


/*
* Alert Block
*/

function toggleAlertBlock() {
  document.getElementById("alert_block_popup-1").classList.toggle("active");
}



/**
 * Error
 */

 function checkoutErrorPage() {
  $(".checkout_page").add("error_page.html");
}

