// //running our Ajax request
// $(document).ready(function(){
//   // Now we start the Ajax GET request. The first parameter is the URL with the data.
//   // The second parameter is a function that handles the response.
//   $.get("sentence.html", function(response) {
//     // Here we are getting the element on the page with the id of sentences and
//     // inserting the response
//     $("#sentences").html(response);
//   });
//
//   // to handle when an error occurs.
//   $.get("this_doesnt_exist.html", function(data) {
//   // This will not be called because the .html file request doesn't exist
//   doSomethingGood();
// }).fail(function(error) {
//   // This is called when an error occurs
//   console.log('Something went wrong: ' + error);
// });
//
// });





// We should wait for the page to load before running our ajax request
$(document).ready(function(){
  // Now we start the Ajax Get request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.
  $.get("https://api.github.com/repos/jquery/jquery/commits?sha=8f447576c918e3004ea479c278c11677920dc41a", function(response) {
    // Here we are getting the element on the page with the id of sentences and
    // insert the response
    $("#sentences").html(response);
  }).fail(function(error) {
  // This is called when an error occurs
  console.log('Something went wrong: ' + error);})

});
