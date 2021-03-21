/**
 * Description: Load data from the server and place the returned HTML into the matched elements. .load()
 */
$( ".Header" ).load( "../components/header.html" );
$( ".topnav" ).load( "../components/nav.html" );
$( ".Footer" ).load( "../components/footer.html" );





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