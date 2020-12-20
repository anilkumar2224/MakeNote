
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
var search=document.querySelector('.search input');
var num;
var idd;
var x;
var iddd;

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
      
    for(var i=1;i<=parseInt(localStorage.getItem('totall'));i++){
       var fek= (i+2000).toString();
   
    document.getElementById('fw').classList.add('hide');
        if(localStorage.getItem(fek)!=null)
        {
        var abc=new DOMParser().parseFromString(localStorage.getItem(fek),'text/html');


        // adding checked todo at the bottom
        var bbb="c"+i;
        if(abc.getElementById(bbb.toString()).checked){

            grid.append(abc.body);
          
            document.getElementById('fw').classList.remove('hide'); 
        }
        else{
            grid.prepend(abc.body);
            document.getElementById('fw').classList.add('hide');
        }

        }
       
        
    }
   

    
}

// click events to notes
 contain.addEventListener('click',e=>{
    
     num=e.target.id;
    iddd=e.target.id.substring(1,e.target.id.length);
    // accessing checked todo id
     idd="c"+iddd;
      //  storing the id of selected todo
    localStorage.setItem("clickd",num);

// deleting note
if(e.target.classList.contains('bottom')  ){

num=e.target.id.substring(1,e.target.id.length);

    if (confirm("Do you want to delete?")) {

    var str=(parseInt(num)+2000).toString();
    localStorage.removeItem(str);
    num="todo"+num;
    localStorage.removeItem(num);
    location.reload();

    } 
}
// checking the todo and adding animation
 else if(e.target.id.includes("c")){

var check=document.getElementById(idd);
if(check.checked==true){
document.getElementById(iddd).style.textDecoration='line-through';
x=parseInt(iddd);
const html=`
<div class="boxx" id="box${x}">
<div class="bro" id="${x}" style="text-decoration:line-through;margin-top:-8px">${localStorage.getItem("todo"+x.toString())}</div>
<ul style="margin-top:5px;">
<li><input type="checkbox" id="c${x}" name="check" style="outline-color:white;" checked></li>
<li style="padding-right: 10px;"><i class="fa fa-clock-o" style="color:green;background: rgb(36, 36, 36);"></i></li>
<li id="t${x}"><em style="background: rgb(36, 36, 36);">completed </em></li> 
<li><i class="fas fa-trash bottom" id="d${x}" style="color: orange;"></i></li> 
</ul>
<a href="edittodo.html" class="aa"  id="${x}"></a>
</div>`;
// storing completed todo at the corresponding old todo key
var str=(x+2000).toString();
localStorage.setItem(str,html);
location.reload();
}
else{
document.getElementById(iddd).style.textDecoration='none';
x=parseInt(iddd);

const html=`
<div class="boxx" id="box${x}">
<div class="bro" id="${x}" style="text-decoration:none;margin-top:-8px">${localStorage.getItem("todo"+x.toString())}</div>
<ul style="margin-top:5px;">
<li><input type="checkbox" id="c${x}" name="check" style="outline-color:white;" ></li>
<li style="padding-right: 10px;"><i class="fa fa-clock-o" style="color:red;background: rgb(36, 36, 36);"></i></li>
<li id="t${x}">00:00:0000</li> 
<li><i class="fas fa-trash bottom" id="d${x}" style="color: orange;"></i></li> 
</ul>
<a href="edittodo.html" class="aa"  id="${x}"></a>
</div>`;
// storing unchecked todo at the corresponding old todo key
var str=(x+2000).toString();
localStorage.setItem(str,html);
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

