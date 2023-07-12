function addPost(data){
    data.forEach( obj =>{
        const h3 = document.getElementById("posts").appendChild(document.createElement("h3"));
        h3.textContent=obj.title;
        const p = document.getElementById("posts").appendChild(document.createElement("p"));
        p.textContent=obj.body;
        const hr = document.getElementById("posts").appendChild(document.createElement("hr"));
    });
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => addPost(data));