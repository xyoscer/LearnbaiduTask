var  show = document.getElementById('show');
var search = document.getElementById('search');
 
//跨浏览器事件绑定
function addEventHandler(ele, event, hanlder) {
   if(ele.addEventListener){
   	   ele.addEventListener(event,hanlder,false);
   }else if(ele.attachEvent){
   	   ele.attachEvent("on"+event,hanlder);
   }else{
       ele["on" + event] = hanlder;
   }
}

addEventHandler(search,"click",showContent);
function showContent(){
	var text = "",arr1 = [],arr2 = [];
	var span = document.getElementsByTagName('span');
	var  inputValue = document.getElementById('inputValue').value.trim();
	var  searchValue = document.getElementById('searchValue').value;
	arr1 = inputValue.split('');
	arr2 = searchValue.split('');
	for(var i=0;i<arr1.length;i++){	
	    text += "<span>"+arr1[i]+"</span>";		   
		  show.innerHTML =text;
	}
   for(var j= 0;j<span.length;j++){
   	      for(var i=0;i<arr2.length;i++){
   	      	  if(arr2[i]==span[j].innerHTML)
                 span[j].style.color = "red";
   	      }
      
     }
	
     
}
