const message= document.getElementById('message');

message.addEventListener('click', bringData);

function bringData(){
   const httpAssync= new XMLHttpRequest();
   httpAssync.open("GET","ajax_info.txt",true);

   httpAssync.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
         document.querySelector('#answer').innerHTML = this.responseText;
       }
   } 

   httpAssync.send();

}

