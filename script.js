$(document).ready(function(){
    $("select").hover(function(){
      $(this).css("background-color", "red");
      }, function(){
      $(this).css("background-color", "white");
    });
  });
