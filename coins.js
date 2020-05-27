document.querySelector('#dolar').addEventListener('click', function(){
    bringingData('dolar');
})
document.querySelector('#uf').addEventListener('click', function(){
    bringingData('uf');
})


function bringingData(value){
   let url = `https://mindicador.cl/api/${value}`;
    const api = new XMLHttpRequest();
    api.open('GET',url,true);
    api.send();

   api.onreadystatechange = function(){
       if(this.status == 200 && this.readyState == 4){
           
        let data= JSON.parse(this.responseText);
        console.log(data);

        let rest= document.querySelector('#rest');
        rest.immerHTML = '';

        let i = 0;


        for (let items of data.serie)
            i++;
            rest.innerHTML += `
                <tr>
                    <td>${items.fecha.substring(0,10)}</td>
                    <td>${items.valor}</td>
                </tr>
            `

        if(i>13){
            break;
        }

       }
   }
}