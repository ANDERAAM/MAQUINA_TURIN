function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}
/*<h10>lo sentimos profesor, tuvimos problemas usando la funcion timeout y no pudimos cambiar todo 
      lentamente 1 por uno pero el codigo esta hecho para hacer los cambios poco a poco lastimosamente
       la funcion (y otras alternativas) no funcionaron
    </h10>*/
function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
      //  your code here
    i++;                    //  increment the counter
    if (i < 10) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 3000)
}
var notepases=0;
function recargar() {
  location.reload();
}
function turing() {
      var bandera = 0; 
      var valor= document.getElementById("string_turing");
      var string_turing = valor.value;
      var vacio = "#";
      if(notepases==1){
        recargar();
      }
      //alert(string_turing);
      //revisar si no hay intrusos y crear los cuadros
      for(var j=0; j < string_turing.length; j++){
        if(string_turing[j] != 'a' && string_turing[j] != 'b'){
          bandera = 1; 
        }
    
        $( "#numerosid"+j+"" ).after( $( "<div class='numeros' id='numerosid"+(j+1)+"'></div>" ) );
      }
      //insertar primer modelo sin verificar
      for(var k=0;k< string_turing.length;k++){
        
        $( "#numerosid"+(k+1)+"" ).append( $( "<p id='texto"+(k+1)+"'>"+string_turing[k]+"</p>" ) );
        $("#numerosid"+(k+1)+"").load("#numerosid"+(k+1)+"");
      }
      var i=0;
      setTimeout(function(){ 
      //empieza el cambio
        if(bandera == 0){
            string_turing = string_turing + vacio;
            
              while(bandera == 0){
              //timeout fallido, intentamos y no para la funcion
              //setTimeout(function(){alert("Hello"); 
                if(string_turing[i]=="b"){
                    string_turing[i]=="a";
                    
                    //wait(200); otro ttime out que no funciono.
                    //$("#numerosid"+(i+1)+"").addClass('load').wait(2000).addClass('done'); este funciona solo en la primera vuelta, luego se para.
                   //aqui se cambiaria uno por uno.
                    $( "#texto"+(i+1)+"" ).replaceWith( "<p>a</p>" );
                    $( "#numerosid"+(i+1)+"" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
                   

                    
                }
                if(string_turing[i]=="a"){
                  $( "#texto"+(i+1)+"" ).replaceWith( "<p>a</p>" );
                  //alert(i);
                }
                if(string_turing[i]==vacio){
                  //alert("llegaste");
                  bandera = 1;
                }

                //$( ".numeros" ).after( $( "<p >1</p>" ) );
                cs = string_turing.substring(0,string_turing.length-1);
                i++;
              //}, 2000);
            }

      } else{
        alert("no recibimos mas letras a parte de a y b");
        recargar();
      }
          //$("#numerosid1").animate({margin: "300 px"});
    
    
    
    
      }, 3000);

      
      notepases++;



}
function turingp2(){
  
  var sw1 = 0;
  alert(string_turing);
  
    
    
}
function recargar() {
  location.reload();
}
//botones