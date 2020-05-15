
$(document).ready(function(){

  $(".twentytwenty-container").twentytwenty();

})



function hold(e, f, t, g){
  var holder;
  e.addEventListener("touchstart", function(r){
        holder = setTimeout(function(){
              f.call(e, r);
              holder = true;
        }, t || 200)
  });
  e.addEventListener("touchend", function(r){
         clearTimeout(holder);
         holder === true && g && g.call(e, r);
  });
}

hold(
 document.querySelector(".sandyCaramel"), 
 function(){  
   this.classList.add("active");  
 }, 
 200,  
 function(){  
    this.classList.remove("active");
 }
);
hold(
 document.querySelector(".amber"), 
 function(){  
   this.classList.add("active");  
 }, 
 200,  
 function(){  
    this.classList.remove("active");
 }
);
hold(
 document.querySelector(".dustyCaramel"), 
 function(){  
   this.classList.add("active");  
 }, 
 200,  
 function(){  
    this.classList.remove("active");
 }
);
hold(
 document.querySelector(".savannahTouch"), 
 function(){  
   this.classList.add("active");  
 }, 
 200,  
 function(){  
    this.classList.remove("active");
 }
);