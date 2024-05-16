document.addEventListener("htmx:afterRequest", function(event){

if(event.target.id === 'busca-produtos'){
    console.log(event.detail.xhr);

    const response = JSON.parse(event.detail.xhr.responseText)
    const produtosDiv = document.querySelector("#dados-produtos");

    let htmlDiv = "";
    let style = "";
    let indice = 0;
    let preco = 0;

    response.products.forEach(produto => {
        style = indice%2==0 ? 'table-secondary' : ''
        
        preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.price);
        
        htmlDiv += `
        <tr class="${style}">
         <td class="col-1"><img src="${produto.thumbnail}" width="100" class="img-thumbnail"></td>
         <td class="col-1">${produto.id}</td>
         <td class="col-8">${produto.title}</td>
         <td class="col-1">${preco}</td>
         <td class="col-1"><a href="#"><i style="color:red; font-size:20px" class="bi bi-trash-fill"></i></a></td>
        </tr>
        `
        indice++
    })

    produtosDiv.innerHTML = htmlDiv
}

});
