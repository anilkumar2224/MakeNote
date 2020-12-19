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
sessionStorage.setItem("instr",test.textContent);
var search=document.querySelector('.search input');
var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var f1=document.querySelector('.search');
var f2=document.querySelector('.icon');

if(sessionStorage.getItem('total')==null){
    var item=0;
    sessionStorage.setItem("total",item.toString());
}
console.log(sessionStorage.getItem('total'));

var pass=document.getElementById("pass");
search.addEventListener('keyup',()=>{
    f1.classList.remove('hide');

const str=search.value.trim();
filterNote(str);
});
const filterNote=(str)=>{
    
Array.from(grid.children)
    .filter((note)=>!note.textContent.includes(str))
    .forEach((note)=>note.classList.add('filterd'));


    Array.from(grid.children)
       .filter((note)=>note.textContent.includes(str))
       .forEach((note)=>note.classList.remove('filterd'));

    Array.from(grid.children).forEach((note)=>{
          if(!note.classList.contains('filterd') && note.id!='box0' ){
            note.classList.add('size');
        }
    });
    
};
console.log(grid.children);
function display(){
   
      
    for(var i=1;i<=parseInt(sessionStorage.getItem('total'));i++){
       var fek= (i+100).toString();
    //     var stu=`'box${i}'`;
    //     console.log(stu);
    //    var abc= document.getElementById(stu);
    //    console.log(abc);
    //     abc.textContent=sessionStorage.getItem(i.toString());
    //     grid.innerHTML+=abc;
        console.log(sessionStorage.getItem(fek));
        if(sessionStorage.getItem(fek)!=null)
        {
        var abc=new DOMParser().parseFromString(sessionStorage.getItem(fek),'text/html');
   
      grid.prepend(abc.body);
      
     
        }
       
        
    }
   
    
    console.log("succsess");
    
}
var check;
var num;
 contain.addEventListener('click',e=>{
     console.log(e.target.id);
     num=e.target.id;
    sessionStorage.setItem("click",num);
    console.log(sessionStorage.getItem("click"));

    if(e.target.classList.contains('bottom')  ){
              console.log(e.target.id);
             var temp=e.target.id.substring(1,e.target.id.length);
            
        
           
                         if (confirm("Do you want to delete?")) {
                          sessionStorage.removeItem(temp);
                          var str=(parseInt(temp)+100).toString();
                          console.log(str);
                          sessionStorage.removeItem(str);
                            location.reload();
                       
                         } 
                        }



 });







// grid.addEventListener('click',e=>{
//     e.preventDefault();
//     console.log(e.target.id);
//     if(e.target.classList.contains('aa')){
      
//        var num=e.target.id;
     
        
//        console.log(num); 
//        localStorage.setItem("clicked",num); 
     
    

//        } 
// 

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
// var a=0;
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

// var x;

// var c=document.getElementById('c');


// Number.prototype.padLeft = function(base,chr){
//     var  len = (String(base || 10).length - String(this).length)+1;
//     return len > 0? new Array(len).join(chr || '0')+this : this;
// }
 

    
//         submit.addEventListener('click',e=>{
//             var d = new Date,
//             dformat = [
//            d.getDate().padLeft(),(months[d.getMonth()]),
//            d.getFullYear()].join(' ') +' ' +
//           [d.getHours().padLeft(),
//            d.getMinutes().padLeft()].join(':');
//             e.preventDefault();
//             if(a==1){
        
               

//             sessionStorage.setItem(num,inputText.value);  
//            x=parseInt(num);

         
         
           
//            var ss="t"+x.toString();
//             const html=`
//                         <div class="box" id="box${x}">
//                         <div class="b" id="${x}">${sessionStorage.getItem(x.toString())}</div>
//                         <ul>
//                         <li id="t${x}">${dformat}</li> 
//                       <li> <i class="fas fa-trash bottom" id="d${x}" style="color: orange;"></i></li> 
//                         </ul>
//                         </div>`;
//                         var str=(x+100).toString();
//                         console.log(html);
//                         sessionStorage.setItem(str,html);
//                    check.textContent=inputText.value;
//                    var tt=document.getElementById(ss);
//                    console.log(ss);
//                    tt.innerText=dformat;
                        
//             console.log("saved again");
//                a=1;
//                return;
//             }
//             else if(a==2){
//                 x=parseInt(sessionStorage.getItem("total"))+1;
//             console.log(x);
           
               
//                 sessionStorage.setItem("total",x.toString());
               
                   
//                         sessionStorage.setItem(x.toString(),inputText.value);
//                         const html=`
//                         <div class="box" id="box${x}">
//                         <div  class="b" id="${x}">${sessionStorage.getItem(x.toString())}</div>
//                         <ul>
//                         <li id="t${x}">${dformat}</li> 
//                       <li> <i class="fas fa-trash bottom"  id="d${x}" style="color: orange;" ></i></li> 
//                         </ul>
//                       </div>`;
                      
//                         var str=(x+100).toString();
//                         console.log(str);
                      

                        
//                     sessionStorage.setItem(str,html.trim());
//                     var abc=new DOMParser().parseFromString(sessionStorage.getItem(str),'text/html');
   
//                     grid.prepend(abc.body);
//                     console.log(sessionStorage.getItem(str));

//                     console.log("saved");
//                     a=2;
//                 return;
//             }
           
//          });






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