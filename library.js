function book(title,author,pages,read,date){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.date=date;
    if (read){
        this.done="Completed"
    }
    else{
        this.done="Incomplete"
    }

}


let numbAddClicks=0;
let rot=90;
let container=document.querySelector("#container");
let form=document.querySelector("#form");
let formcontainer=document.querySelector("#card");


let dict={};
let button1=document.querySelector("#button1");
button1.addEventListener('click',add);
read_state=true;
book1 = new book("Harry Potter","JK Rowling",70,read_state,"28/02/2001");
div1=document.createElement("div");
div=document.createElement("div");
console.log(div);
div.innerHTML="<div class='title1'>"+"Title"+": "+book1.title+""+"</div>"
+"<div class='author'>Author"+": "+book1.author+""+"</div>"
+"<div class='pages'>Pages"+": "+book1.pages+""+"</div>"
+"<div class='date'>Date"+": "+book1.date+""+"</div>"
+"<div class='read1'>Read"+": "+book1.done+"";
div1.appendChild(div);
readbttn=document.createElement("button");
readbttn.addEventListener('click',readUpdate);
readbttn.className+="button readbook";


readbttn.innerHTML="Read";

if(read_state){
    readbttn.innerHTML="Unread";
}


removebttn=document.createElement("button");
removebttn.addEventListener('click',remv);
removebttn.className+="button remove";



div1.appendChild(readbttn);
div1.appendChild(removebttn);
removebttn.innerHTML="Remove";
container.appendChild(div1);
dict[div1]=book1;



let info=document.querySelector("#info");
let intro=document.createElement("span");
intro.className+="intro";
intro.innerHTML="Virtual Library";
info.appendChild(intro);

let totalBooks=1;
let totalBooktag=document.createElement("span");
totalBooktag.innerHTML="Total Books: " +""+totalBooks+"";
totalBooktag.className+="totalbooks"
info.appendChild(totalBooktag);

let totalPages=70;
let totalPagetag=document.createElement("span");
totalPagetag.innerHTML="Total Pages: " +""+totalPages+"";
totalPagetag.className+="totalpages"
info.appendChild(totalPagetag);

let totalRead=1;
let totalReadtag=document.createElement("span");
totalReadtag.innerHTML="Total Read: " +""+totalRead+"";
totalReadtag.className+="totalread"
info.appendChild(totalReadtag);

function readUpdate(){
    console.log(this.parentNode);
    parent=this.parentNode;
    book1=dict[parent];
    if (book1.read){
        book1.read=false;
        this.innerHTML="Read";
        book1.done="Incomplete"
    }
    else{
        book1.read=true;
        this.innerHTML="Unread";
        book1.done="Completed"
    }
    parent.children[0].innerHTML="<div class='title1'>"+"Title"+": "+book1.title+""+"</div>"
    +"<div class='author'>Author"+": "+book1.author+""+"</div>"
    +"<div class='pages'>Pages"+": "+book1.pages+""+"</div>"
    +"<div class='date'>Date"+": "+book1.date+""+"</div>"
    +"<div class='read1'>Read"+": "+book1.done+"";

    pages=parseInt(dict[parent].pages)
    readStateValue=dict[parent].read;
   
    if(readStateValue){
        totalPages+=pages;

        totalRead+=1;

    }
    else{
        totalPages+=-pages;

        totalRead+=-1;

    }

 
    totalPagetag.innerHTML="Total Pages: " +""+totalPages+"";
    totalReadtag.innerHTML="Total Read: " +""+totalRead+"";
}


function remv(){
    console.log(this.parentNode);
    let par=this.parentNode;
    pages=parseInt(dict[par].pages);
    readStateValue=dict[par].read;
    totalPages+=-pages;
    totalBooks+=-1;
    if(readStateValue){
        totalRead+=-1;

    }
    
    par.remove();
    totalBooktag.innerHTML="Total Books: " +""+totalBooks+"";
    totalPagetag.innerHTML="Total Pages: " +""+totalPages+"";
    totalReadtag.innerHTML="Total Read: " +""+totalRead+"";
}




function add(){

   
    currForm=this.form;
    title=currForm.title.value;
    author=currForm.author.value;
    if(title==""){
        alert("Title field cannot be blank");
        return
    }
    if(author==""){
        alert("Author field cannot be blank");
        return
    }
    if (currForm.pages.value){
        pages=parseInt(currForm.pages.value);
    }
    else{
        pages=0;
    }
    console.log(currForm.pages.value);
    readStateValue=currForm.read.value;
    date=currForm.publishiondate.value;

    read_state=true;
    totalRead+=1;
    totalPages+=pages;
    totalBooks+=1;
 
    if(readStateValue=="Not read"){
        totalRead+=-1;

        read_state=false;
    }
    
    
    let book1 = new book(title,author,pages,read_state,date);
    div1=document.createElement("div");
    div=document.createElement("div");
   
    div.innerHTML="<div class='title1'>"+"Title"+": "+book1.title+""+"</div>"
    +"<div class='author'>Author"+": "+book1.author+""+"</div>"
    +"<div class='pages'>Pages"+": "+book1.pages+""+"</div>"
    +"<div class='date'>Date"+": "+book1.date+""+"</div>"
    +"<div class='read1'>Read"+": "+book1.done+"";
    div1.appendChild(div);
    readbttn=document.createElement("button");
    readbttn.addEventListener('click',readUpdate);
    readbttn.className+="button readbook";
    readbttn.innerHTML="Read";
    if(read_state){
        readbttn.innerHTML="Unread";
        
    }


    removebttn=document.createElement("button");
    removebttn.addEventListener('click',remv);
    removebttn.className+="button remove";

    div1.appendChild(readbttn);
    div1.appendChild(removebttn);
    removebttn.innerHTML="Remove";
    container.appendChild(div1);
    dict[div1]=book1;

    formcontainer.style.display="none";
    container.classList.remove("blur");
    totalBooktag.innerHTML="Total Books: " +""+totalBooks+"";
    totalPagetag.innerHTML="Total Pages: " +""+totalPages+"";
    totalReadtag.innerHTML="Total Read: " +""+totalRead+"";
    

}

function visible(bttn){
    console.log(bttn.style);
    bttn.style = 'transform: rotate(' + rot + 'deg)';
    rot =90-rot;

    if (numbAddClicks%2==0){
    
        formcontainer.style.display="block";
        container.classList.add("blur");

    }
    else
    {   
        
        formcontainer.style.display="none";
        container.classList.remove("blur");
    }
    numbAddClicks+=1;
    
}


