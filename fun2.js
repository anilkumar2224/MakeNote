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
var test=document.getElementById('0');
localStorage.setItem("instrr",test.textContent);
var deadline= document.getElementById('deadline');

// initialsing no of todos
if(localStorage.getItem('totall')==null){
    var item=0;
    localStorage.setItem("totall",item.toString());
}


// accessing selected todo id 
var a=parseInt(localStorage.getItem("clickd"));

if(a==0){
    inputText.value=localStorage.getItem("instrr");
    submit.style.display='none';
    inputText.style.pointerEvents='none';
    deadline.classList.add('hide');
    inputText.style.textAlign='center';
    inputText.style.height='80px';
    inputText.style.marginLeft='-10px';
}
else{
    inputText.value=localStorage.getItem("todo"+a.toString());
    submit.style.display='block';
    inputText.style.pointerEvents='auto';

}




 //  saving edited and created to-do  

    
submit.addEventListener('click',e=>{

 // for new notes
if(a==-1){

 // stroing incrementd total notes value 
x=parseInt(localStorage.getItem("totall"))+1;
localStorage.setItem("totall",x.toString());

// stroing new text at unique key
localStorage.setItem("todo"+x.toString(),inputText.value);

// creating new to-do html Element template
const html=`
<div class="boxx" id="box${x}">
<div  class="bro" id="${x}" style="margin-top:-8px;">${localStorage.getItem("todo"+x.toString())}</div>
<ul style="margin-top:3px;">
<li><input type="checkbox" id="c${x}" name="check" style="outline-color:white;" ></li>
<li style="padding-right: 10px;">  <i class="fa fa-clock-o" style="color:red;background: rgb(36, 36, 36);"></i></li>
<li id="t${x}">${deadline.value}</li> 
<li> <i class="fas fa-trash bottom"  id="d${x}" style="color: orange;" ></i></li> 
</ul>
<a href="edittodo.html" class="aa" id="${x}"></a>  
</div>`;

// stroing new html element in unique key value
var str=(x+2000).toString();
localStorage.setItem(str,html.trim());

// success toast
M.toast({html: 'saved successfully!', classes: 'rounded  black-text #1de9b6 teal accent-3 text-darken-5'});
return;

}
// for existed and edited to-do
else{

// stroing edited text in corrresponding old text key value
localStorage.setItem("todo"+a.toString(),inputText.value);  
x=a;

const html=`
<div class="boxx" id="box${x}">

<div class="bro" id="${x}">${localStorage.getItem("todo"+x.toString())}</div>
<ul style="margin-top:8px;">
<li><input type="checkbox" id="c${x}" name="check" style="outline-color:white;" ></li>
<li style="padding-right: 10px;"><i class="fa fa-clock-o" style="color:red;background: rgb(36, 36, 36);"></i></li>
<li id="t${x}">${deadline.value}</li> 
<li><i class="fas fa-trash bottom" id="d${x}" style="color: orange;"></i></li> 
</ul>
<a href="edittodo.html" class="aa"  id="${x}"></a>
</div>`;

// stroing edited html element in corrresponding old element key value
var str=(x+2000).toString();
localStorage.setItem(str,html);

// success toast
M.toast({html: 'saved successfully!', classes: 'rounded  black-text #1de9b6 teal accent-3 text-darken-5'});
return;

}

});






       
