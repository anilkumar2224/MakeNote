// variables
var inputText=document.getElementById('exampleFormControlTextarea1');
var box=document.getElementById('box0');
var form=document.getElementById('form');
var back=document.getElementById('back');
var backp=document.getElementById('backp');
var add=document.getElementById('add');
var grid=document.getElementById('grid');
var aa=document.getElementsByClassName('aa');
var contain=document.getElementById('contain');
var submit=document.getElementById('btnsubmit');
var time=document.getElementById('time');
var test=document.getElementById('0');
localStorage.setItem("instr",test.textContent);
var search=document.querySelector('.search input');
var num;






// voice recognition function

function runSpeechRecognition() {
            
  // get input reference
  var output = document.getElementById("sea");

console.log("i am here");
      // new speech recognition object
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
      var recognition = new SpeechRecognition();
 output.focus();
      // This runs when the speech recognition service starts
      recognition.onstart = function() {
          console.log("listening, please speak...");
      };
      
      recognition.onspeechend = function() {
          console.log("stopped listening, hope you are done...");
          recognition.stop();
      }
    
      // This runs when the speech recognition service returns result
      recognition.onresult = function(event) {
          var transcript = event.results[0][0].transcript;
          output.value=transcript;
          var input=output.value.toLowerCase().trim();
         
          filterNote(input);
      };
    
       // start recognition
       recognition.start();
}


// search functionality

search.addEventListener('keyup',()=>{
const str=search.value.toLowerCase().trim();
filterNote(str);
});

// filtering searched notes

const filterNote=(str)=>{
  // filtering notes
Array.from(grid.children)
    .filter((note)=>!note.textContent.toLowerCase().includes(str))
    .forEach((note)=>note.classList.add('filterd'));

// showing un filtered note
    Array.from(grid.children)
       .filter((note)=>note.textContent.includes(str))
       .forEach((note)=>note.classList.remove('filterd'));

    Array.from(grid.children).forEach((note)=>{
          if(!note.classList.contains('filterd') && note.id!='box0' ){
            note.classList.add('size');
        }
    });
    
};

//  converting  stored document  into html elements & dispalying on screen 
function display(){
   
    for(var i=1;i<=parseInt(localStorage.getItem('total'));i++){
       var index= (i+1000).toString();
        if(localStorage.getItem(index)!=null)
        {
        var abc=new DOMParser().parseFromString(localStorage.getItem(index),'text/html');
   
      grid.prepend(abc.body);
        }     
    }
   
    
}

// click events to notes
 contain.addEventListener('click',e=>{
     num=e.target.id;
    //  storing the id of selected note
    localStorage.setItem("click",num);

    // deleting note
if(e.target.classList.contains('bottom')  ){      
 var temp=e.target.id.substring(1,e.target.id.length);    

if (confirm("Do you want to delete?")) {
localStorage.removeItem(temp);
var str=(parseInt(temp)+1000).toString();
localStorage.removeItem(str);
location.reload();                       
 } 

}

 });


// displying my logo


 function draw() {
var ctx =document.getElementById('canvas1').getContext('2d');
 if (canvas1.getContext) {
                            
                              
ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(25, 75);
ctx.lineTo(75,100);
ctx.lineTo(42,75);
ctx.fillStyle='rgb(0, ' + Math.floor(255 - 42.5 * 0) + ', ' + 
Math.floor(255 - 42.5 * 0) + ')';
ctx.fill();
ctx.beginPath();
ctx.moveTo(85, 50);
ctx.lineTo(135, 75);
ctx.lineTo(85,100);
ctx.lineTo(118,75);
ctx.closePath();
ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * 0) + ', ' + 
                    Math.floor(255 - 42.5 * 0) + ')';
ctx.stroke();

}
}
draw();
