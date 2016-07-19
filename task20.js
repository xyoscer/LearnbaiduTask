var show = document.getElementById('show');
var search = document.getElementById('search');
 
//跨浏览器事件绑定
 
function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + event, hanlder);
    } else {
        ele["on" + event] = hanlder;
    }
}
 
addEventHandler(search, "click", showContent);
 
function showContent() {
    var text = "",
        arr1 = [],
        arr2 = [];
    var span = document.getElementsByTagName('span');
    var inputValue = document.getElementById('inputValue').value.trim();
    var searchValue = document.getElementById('searchValue').value;
    var p = inputValue.indexOf(searchValue);
    /**
      记录查找字符串中的第一个字符出现的位置，并根据这个位置算起，将后面的查找字符串
      的字符也进行高亮显示，这种情况只能匹配最新一次出现的相同字符，而且查找串的长度+第一次
      出现的字符的位置必须小于原串的长度。
    */
    arr1 = inputValue.split('');
    arr2 = searchValue.split('');
    for (var i = 0; i < arr1.length; i++) {
        text += "<span>" + arr1[i] + "</span>";
        show.innerHTML = text;
    }
    for (var j = p; j < arr2.length + p; j++) {
 
        span[j].style.color = "red";
    }
 
 
    //对查找的字符按照单个字符进行处理，每一个字符去与原串进行比较，相同则进行高亮显示
 
    /*arr1 = inputValue.split('');
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
    */
 
}
