// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$(".search-button").click(function() {
  
  let input = $(".search-term").val();
  let api_url ="https://api.giphy.com/v1/gifs/search?q=" + input + "&rating=pg&api_key=dc6zaTOxFJmzC";
  console.log(input);
  fetch(api_url)
  
    .then(function(response) {
      return response.json();
    })
    .then(function(gifData) {
      let ranImg = Math.floor(Math.random() * gifData.data.length); 
      $(".main").html(`<img src="${gifData.data[ranImg].images.original.url}" alt="">`);
    });
});


$(".search-term").keyup(function(event) {
  if(event.keyCode === 13) {
    $(".search-button").click();
  }
});