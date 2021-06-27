function book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;

}


let container=document.querySelector("#container");
let dict={};


function read(bttn){
    console.log(this.parentNode);
    parent=this.parentNode;
    book1=dict[parent];
    if (book1.read){
        book1.read=false;
    }
    else{
        book1.read=true;
    }
    parent.children[0].innerHTML="Title"+": "+book1.title+""
              +"<br>Author"+": "+book1.author+""
              +"<br>Pages"+": "+book1.pages+""
              +"<br>Read"+": "+book1.read+"";
}

function remv(){
    console.log(this.parentNode);
    let par=this.parentNode;
    par.remove();
}

function add(){
    let book1 = new book("anshu","anshu",50,false);
    let div1=document.createElement("div");
    let div=document.createElement("div");
    console.log(div);
    div.innerHTML="Title"+": "+book1.title+""
                +"<br>Author"+": "+book1.author+""
                +"<br>Pages"+": "+book1.pages+""
                +"<br>Read"+": "+book1.read+"";
    div1.appendChild(div);
    let readbttn=document.createElement("button");
    readbttn.addEventListener('click',read);
    readbttn.className+="button";
    readbttn.innerHTML="Read";

    let removebttn=document.createElement("button");
    removebttn.addEventListener('click',remv);
    removebttn.className+="button remove";

    div1.appendChild(readbttn);
    div1.appendChild(removebttn);
    removebttn.innerHTML="Remove";
    container.appendChild(div1);
    dict[div1]=book1;

}