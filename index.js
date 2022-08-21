function playAudio(index){
   
  console.log("sound: " + index);
  var audio = new Audio("audio/sound" + index + ".wav");
  audio.play();
}

function random(a, b){
    var rndm = a+Math.floor(Math.random() * (b-a+1) + a);
    console.log("random num generated in random function: " + rndm);
    return rndm;
  }
  
 
  
  // tile input
  const inp = document.getElementById("inp");
  const button_go = document.getElementById("button_go");
  const button_tiles = document.getElementById("tiles");
  var index = 8;
  console.log("index value during declaration: " + index);
  
  button_go.addEventListener("click", function(){

    console.log("index value after button click: " + index);

    if(inp.value){
     
      let n = inp.value;
      console.log("order of matrix: " + n);
      
      button_tiles.innerHTML = "";
     
      let add = "";
      for (var i = 0; i<n; i++){
       
        add += `<div class = row>`;
      
        for (var j = 0; j<n; j++){

            row = document.getElementsByClassName("row");
            
            var key = i*n + (j+1);
            add += `<div class = "tile tile-spec" id = "tile_id" + ${key} + > </div>`;
        }
        add += `</div>`;
    }
    button_tiles.innerHTML += add;
  

    // HOVER

    // color changes 
    const tiles = document.querySelectorAll('.tile');

    // run hover function call for each tile using "for each" function
    tiles.forEach(function(tile_id){

      //play song and show highlighted tile on hovering
      tile_id.addEventListener("mouseover", function(){
        console.log("index value on hovering: " + index);

        // first note
        if(index >= 7){
          index = random(0, 7);
          
        }
        else{
          index++;
        }
  
        // random color generation
        var colour = "#" + Math.floor(Math.random()*16777215).toString(16);
        console.log("color generated: " + colour);
        tile_id.style.backgroundColor = colour;

        // playing audio
        tile_id.addEventListener('mouseover', playAudio(index));
       
        
      });
  
  
    });
  
    }
  });