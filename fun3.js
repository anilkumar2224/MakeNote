// variables
var inputText=document.getElementById('exampleFormControlTextarea1');
var box=document.getElementById('box0');
var form=document.getElementById('form');
var back=document.getElementById('back');
var backp=document.getElementById('backp');
var add=document.getElementById('add');
var grid=document.getElementById('grid');
var contain=document.getElementById('contain');
var submit=document.getElementById('btnsubmit');
var time=document.getElementById('time');
var search=document.querySelector('.search input');
var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


// initialsing no of notes
if(localStorage.getItem('total')==null){
    var item=0;
    localStorage.setItem("total",item.toString());
}

//going to back page
back.addEventListener('click',()=>{
    window.history.back();
  
});


// accessing selected note id 
 
var a=parseInt(localStorage.getItem("click"));

if(a==0){
    inputText.value=localStorage.getItem("instr");
    submit.style.display='none';
    document.getElementById('ll').style.display='none';
}
else{
    inputText.value=localStorage.getItem(a.toString());
    submit.style.display='block';
    inputText.style.pointerEvents='auto';
}


//  formating date and time
Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
}
 

//  saving edited and created notes   

submit.addEventListener('click',e=>{
    // accessing time while creating note

var d = new Date,
dformat = [
d.getDate().padLeft(),(months[d.getMonth()]),
d.getFullYear()].join(' ') +' ' +
[d.getHours().padLeft(),
d.getMinutes().padLeft()].join(':');
e.preventDefault();

// for new notes

if(a==-1){
    // stroing incrementd total notes value 
x=parseInt(localStorage.getItem("total"))+1;
localStorage.setItem("total",x.toString());

 // stroing new text at unique key
localStorage.setItem(x.toString(),inputText.value);

// creating new note html Element template
const html=`
<div class="box" id="box${x}">
<div  class="b" id="${x}">${localStorage.getItem(x.toString())}</div>
<ul>
<li id="t${x}">${dformat}</li> 
<li> <i class="fas fa-trash bottom"  id="d${x}" style="color: orange;" ></i></li> 
</ul>
<a href="edit.html" class="aa" id="${x}"></a>  
</div>`;
// stroing new html element in unique key value
var str=(x+1000).toString();
localStorage.setItem(str,html.trim());

// success toast
M.toast({html: 'saved successfully!', classes: 'rounded  black-text #1de9b6 teal accent-3 text-darken-5'});
return;
}

// for existed and edited note

else{

// stroing edited text in corrresponding old text key value

localStorage.setItem(a.toString(),inputText.value);  
x=a;
const html=`
<div class="box" id="box${x}">
<div class="b" id="${x}">${localStorage.getItem(x.toString())}</div>
<ul>
<li id="t${x}">${dformat}</li> 
<li> <i class="fas fa-trash bottom" id="d${x}" style="color: orange;"></i></li> 
</ul>
<a href="edit.html" class="aa"  id="${x}"></a>
</div>`;

// stroing edited html element in corrresponding old element key value
var str=(x+1000).toString();
localStorage.setItem(str,html);


// success toast
M.toast({html: 'saved successfully!', classes: 'rounded  black-text #1de9b6 teal accent-3 text-darken-5'});      

return;

}

});






       
