

function load_footer() {
    $.getJSON( "https://certificatedatascience.github.io/common_data.json", 
         function( data ) {
            $("#footer").html(data["footer"]);
          }
    );
}


$().ready(function(){
           load_footer();
});
