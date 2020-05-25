const message  = document.getElementById('message');

message.addEventListener('click', bringData);

function bringData(){
   const httpasync= new XMLHttpRequest();

   httpAsync.open('GET','archivo.txt',true);

   httpAsync.send();

   httpAsync.onreadystatechange = funcion(){
      if(this.readyState == 4 && this.status == 200){

      }
   }


}

