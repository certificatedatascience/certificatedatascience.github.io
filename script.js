

function load_footer() {
    $.getJSON( "https://certificatedatascience.github.io/common_data.json", 
         function( data ) {
            $("#footer").html(data["footer"]);
           // alert("show whatever");
         //   $("#sidebar_container").html("whatever");
          }
    );
}


