document.addEventListener("htmx:afterRequest", function(event){

if(event.target.id === 'busca-produtos'){
    console.log(event.detail.xhr);

    const response = JSON.parse(event.detail.xhr.responseText)
    const produtosDiv = document.querySelector("#dados-produtos");

    let htmlDiv = "";
    let style = "";
    let indice = 0;

    response.products.forEach(produto => {
        style = indice%2==0 ? 'table-secondary' : ''
        htmlDiv += `
        <tr class="${style}">
         <td>${produto.id}</td>
         <td>${produto.title}</td>
         <td><a href="#"><i style="color:red; font-size:20px" class="bi bi-trash-fill"></i></a></td>
        </tr>
        `
        indice++
    })

    produtosDiv.innerHTML = htmlDiv
}

});
