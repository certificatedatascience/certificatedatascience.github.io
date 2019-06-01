
$().ready(function(){
    $.getJSON( "https://certificatedatascience.github.io/common_data.json", function( data ) {
    console.log(data);
    $("#footer").html(data["footer"]);
  });
});
