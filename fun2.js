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
sessionStorage.setItem("instrr",test.textContent);
console.log(sessionStorage.getItem("instrr"));

var deadline= document.getElementById('deadline');


if(sessionStorage.getItem('totall')==null){
    var item=0;
    sessionStorage.setItem("totall",item.toString());
}
console.log(sessionStorage.getItem('totall'));


// search.addEventListener('keyup',()=>{
//     f1.classList.remove('hide');

// const str=search.value.trim();
// filterNote(str);
// });
// const filterNote=(str)=>{
    
// Array.from(grid.children)
//     .filter((note)=>!note.textContent.includes(str))
//     .forEach((note)=>note.classList.add('filterd'));


//     Array.from(grid.children)
//        .filter((note)=>note.textContent.includes(str))
//        .forEach((note)=>note.classList.remove('filterd'));

//     Array.from(grid.children).forEach((note)=>{
//           if(!note.classList.contains('filterd') && note.id!='box0' ){
//             note.classList.add('size');
//         }
//     });
    
// };
// console.log(grid.children);
// function display(){
      
//     for(var i=1;i<=parseInt(sessionStorage.getItem('total'));i++){
//        var fek= (i+100).toString();
//     //     var stu=`'box${i}'`;
//     //     console.log(stu);
//     //    var abc= document.getElementById(stu);
//     //    console.log(abc);
//     //     abc.textContent=sessionStorage.getItem(i.toString());
//     //     grid.innerHTML+=abc;
//         console.log(sessionStorage.getItem(fek));
//         if(sessionStorage.getItem(fek)!=null)
//         {
//         var abc=new DOMParser().parseFromString(sessionStorage.getItem(fek),'text/html');
   
//       grid.prepend(abc.body);
      
     
//         }
       
        
//     }
   
    
//     console.log("succsess");
    
// }
var check;
var num;
 
// grid.addEventListener('click',e=>{
//     e.preventDefault();
//     if(e.target.classList.contains('box')||e.target.classList.contains('b')){
      
//         if(e.target.classList.contains('b'))
//         {
//             check=document.getElementById(e.target.id);
//         num=e.target.id;
            
//             console.log("one");
//         }
//     else if(e.target.classList.contains('box')){
//         console.log("two");
//         check=document.getElementById(e.target.id);
//         num=e.target.id.substring(3,e.target.id.length); 
       
//     }
     
        
//        console.log(num); 
//         contain.classList.add('hide');
//         f1.classList.add('hide');
//         f2.classList.add('hide');
// form.classList.remove('hide');
// backp.classList.remove('hide');
// c.classList.add('hide');
// if(num=="0"){
    
//     submit.style.display='none';
//     inputText.value=sessionStorage.getItem("instr");
//     inputText.style.pointerEvents='none';
   
// }else{
//     console.log(sessionStorage.getItem(num));
//     submit.style.display='block';
//     inputText.value=sessionStorage.getItem(num);
//     inputText.style.pointerEvents='auto';
    
// }


// a=1;

// } 
// else if(e.target.classList.contains('bottom')  ){
//       console.log(e.target.id);
//      var temp=e.target.id.substring(1,e.target.id.length);
    

   
//                  if (confirm("Do you want to delete?")) {
//                   sessionStorage.removeItem(temp);
//                   var str=(parseInt(temp)+100).toString();
//                   console.log(str);
//                   sessionStorage.removeItem(str);
//                     location.reload();
               
//                  } 

// }

// });

// box.addEventListener('click',e=>{
//     console.log(e.target.id);
//     var check=document.getElementById(e.target.id);
//     console.log(check);
// box.classList.add('hide');
// form.classList.remove('hide');
// backp.classList.remove('hide');
// add.classList.add('hide');
// console.log(sessionStorage['item1']);
// inputText.textContent=sessionStorage[item.toString()];
// });
// document.getElementById('btnsubmit').addEventListener('click',e=>{
//     e.preventDefault();
   
//         sessionStorage.setItem(item.toString(),inputText.value);
//     box.textContent=sessionStorage[item.toString()];
// alert("saved!");

// });
var a=parseInt(sessionStorage.getItem("clickd"));
console.log(sessionStorage.getItem("clickd"));
// back.addEventListener('click',e=>{
//     e.preventDefault();
//     form.classList.add('hide');
//     backp.classList.add('hide');
//     c.classList.remove('hide');
//     contain.classList.remove('hide');
//     inputText.innerHTML=null;
//     f1.classList.remove('hide');
//     f2.classList.remove('hide');
//     console.log(sessionStorage.getItem("total"));
//     a=0;
   

// });
if(a==0){
    inputText.value=sessionStorage.getItem("instrr");
    submit.style.display='none';
    inputText.style.pointerEvents='none';
    deadline.classList.add('hide');
    inputText.style.textAlign='center';
    inputText.style.height='80px';
    inputText.style.marginLeft='-10px';
}
else{
    inputText.value=sessionStorage.getItem("todo"+a.toString());
    submit.style.display='block';
    inputText.style.pointerEvents='auto';

}




 

    
        submit.addEventListener('click',e=>{
            
            
        
            
             if(a==-1){
                x=parseInt(sessionStorage.getItem("totall"))+1;
            console.log(x);
           
               
                sessionStorage.setItem("totall",x.toString());
               
                   
                        sessionStorage.setItem("todo"+x.toString(),inputText.value);
const html=`
<div class="boxx" id="box${x}">
<div  class="bro" id="${x}" style="margin-top:-8px;">${sessionStorage.getItem("todo"+x.toString())}</div>
<ul style="margin-top:3px;">
<li><input type="checkbox" id="c${x}" name="check" style="outline-color:white;" ></li>
<li style="padding-right: 10px;">  <i class="fa fa-clock-o" style="color:red;background: rgb(36, 36, 36);"></i></li>
<li id="t${x}">${deadline.value}</li> 
<li> <i class="fas fa-trash bottom"  id="d${x}" style="color: orange;" ></i></li> 
</ul>
<a href="edittodo.html" class="aa" id="${x}"></a>  
</div>`;
                      
                        var str=(x+200).toString();
                        console.log(str);
                      

                        
                    sessionStorage.setItem(str,html.trim());
                    var abc=new DOMParser().parseFromString(sessionStorage.getItem(str),'text/html');
   
                
                    console.log(sessionStorage.getItem(str));

                    console.log("saved");
                    M.toast({html: 'saved successfully!', classes: 'rounded  black-text #1de9b6 teal accent-3 text-darken-5'});
                return;
            }else{
                   

            sessionStorage.setItem("todo"+a.toString(),inputText.value);  
            x=a;
 
          
          
            
     
const html=`
<div class="boxx" id="box${x}">

<div class="bro" id="${x}">${sessionStorage.getItem("todo"+x.toString())}</div>
<ul style="margin-top:8px;">
<li><input type="checkbox" id="c${x}" name="check" style="outline-color:white;" ></li>
<li style="padding-right: 10px;"><i class="fa fa-clock-o" style="color:red;background: rgb(36, 36, 36);"></i></li>
<li id="t${x}">${deadline.value}</li> 
<li><i class="fas fa-trash bottom" id="d${x}" style="color: orange;"></i></li> 
</ul>
<a href="edittodo.html" class="aa"  id="${x}"></a>
</div>`;
                         var str=(x+200).toString();
                         console.log(html);
                         sessionStorage.setItem(str,html);
                  
                         
             console.log("saved again");
             M.toast({html: 'saved successfully!', classes: 'rounded  black-text #1de9b6 teal accent-3 text-darken-5'});
                return;
             
            }
           
         });






       