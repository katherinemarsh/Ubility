
var baseUrl = "https://maps.googleapis.com/maps/api/place/";
var myApiKey = "AIzaSyDUAyl-SGcPkqWyYVb4i3dmBeGvBz6RCLs";

function getPlaceInfo() {
  var urlExtend = baseUrl + "findplacefromtext/json?input=";
  var query = document.querySelector('#search-input').value;
  var words = query.split(' ');
  words.forEach(function(word) {
    urlExtend += word;
    if (word !== words[(words.length - 1)]) {
      urlExtend += "%20";
      alert("hi1");
    }
  });
  urlExtend += "&inputtype=textquery&fields=photos,formatted_address,name" +
  "&locationbias=circle:2000@35.910260,-79.055470&key=";
  urlExtend += "AIzaSyDUAyl-SGcPkqWyYVb4i3dmBeGvBz6RCLs";

    $.ajax({
        url:'https://jsonplaceholder.typicode.com/todos/1',
        type:"GET",
        success: function(result) {
            console.log(result);
        }
    });



    //onload
    Http.onreadystatechange=(e)=>{
      console.log(Http.responseText);
    }
  // });

}