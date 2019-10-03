$( "document" ).ready(function() {
 $("#button").click(function(){
     var stuffPutIn = $(".input").val();
     var arrayOne = [];
     $(stuffPutIn).split(" ");
     alert(stuffPutIn);

 });


});