function book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;

}


let container=document.querySelector("#container");
let form=document.querySelector("#form");
let formcontainer=document.querySelector("#formcontainer");

let dict={};
let button1=document.querySelector("#button1");
button1.addEventListener('click',add);

function read(bttn){
    console.log(this.parentNode);
    parent=this.parentNode;
    book1=dict[parent];
    if (book1.read){
        book1.read=false;
        this.innerHTML="Read";
    }
    else{
        book1.read=true;
        this.innerHTML="Unread";
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
    currForm=this.form;
    title=currForm.title.value;
    author=currForm.author.value;
    pages=currForm.pages.value;
    read_state=currForm.read.value;
    read_state=true;
    if(read_state=="not read"){
        read_state=false;
    }
    
    
    let book1 = new book(title,author,pages,read_state);
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
    if(read_state){
        readbttn.innerHTML="Unread";
    }
    

    let removebttn=document.createElement("button");
    removebttn.addEventListener('click',remv);
    removebttn.className+="button remove";

    div1.appendChild(readbttn);
    div1.appendChild(removebttn);
    removebttn.innerHTML="Remove";
    container.appendChild(div1);
    dict[div1]=book1;
    form.style.display="none";
    container.classList.remove("blur");
    

}

function visible(){
    form.style.display="block";
    container.classList.add("blur");
}