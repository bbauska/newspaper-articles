$(document).ready(function(){
  var a = 8;
  for(var i=0;i<8;i++){
    a--;
    $("#posicionador").append('<div class="periodico" style="left:'+(i*6)+'px; top:'+(i*6)+'px; z-index: '+a+'; background-color: #e2e2e2;"><h2>DAILY NEWS</h2><p>Article goes here. How many paragraphs is my question??
    What is yours? I have so much more to ask.</p></div>');
  }
  
  setTimeout(function(){
    $("#posicionador").addClass("aparece");
    setInterval(anima, 2000);
  }, 2000);
  function anima(){
    $("#periodico").addClass("muevesolapa");
    setTimeout(function(){
      $("#periodico *").hide();
    },500);
  }
});
