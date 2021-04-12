// const response = fetch("https://radioprotecaonapratica.com.br/wp-json/wp/v2/posts?_embed")

function Get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    linha = document.createElement("tr");
    tdImagem = document.createElement("td");
    tdTitulo = document.createElement("td");
    tdResumo = document.createElement("td");
    tdData = document.createElement("td");
    tdAutor = document.createElement("td");
 
    tdImagem.innerHTML = usuario._embedded.wpfeaturedmedia 
    tdTitulo.innerHTML= usuario.title.rendered
    tdResumo.innerHTML = usuario.excerpt.rendered
    tdData.innerHTML = usuario.date
    tdAutor.innerHTML = usuario.link
     //substituir pelo textContent,
    // mascsó muda a forma de apresentar
    //Coloquei o link para testar a api,
    //quando coloco _embedded.wp:featuredmedia da erro por causa dos dois pontos e _embedded.author
    //mostra indefinido ou objeto objeto os outros eu consegui
    //por ter colocado usuario.title.rendered, e os outros fiz os testes e não veio
    //como por exemplo caption.rendered.media_details 
    
  
    linha.appendChild(tdImagem);
    linha.appendChild(tdTitulo);
    linha.appendChild(tdResumo);
    linha.appendChild(tdData);
    linha.appendChild(tdAutor);

    return linha;
}


function main() {
    let data = Get("https://radioprotecaonapratica.com.br/wp-json/wp/v2/posts?_embed");
    let usuarios = JSON.parse(data);
    let card = document.getElementById("card");
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        card.appendChild(linha);
    });
    
}

main()

function validar(){
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var text = document.getElementById("text");

    if(nome.value == ""){
       alert("Preencha todos os dados!")
       alert("Nome inválido");
       nome.focus();
       return nome;
     
    }
   
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
        alert("Email inválido");
        email.focus();
        return email;
      
     }

     if(text.value == ""){
        alert("Texto inválido");
        text.focus();
        return text;
      
     }

     else{
        alert("Formulário enviado com sucesso ;D.");
    
    }
     
    
}

function limpar(){
    nome.reset();
    email.reset();
    text.reset();
}



