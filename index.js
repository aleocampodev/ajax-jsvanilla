document.querySelector('#btnJson').addEventListener('click', bringingData);

function bringingData(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','catalogo.json',true) 

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            let res = document.querySelector('#res')
            res.innerHTML='';

            for(let item of data ){
                res.innerHTML += `
                    <tr>
                        <td>${item.titulo}</td>
                        <td>${item.artista}</td>
                    </tr>
                `
            }

        }

    }
     
}