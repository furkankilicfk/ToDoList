let items = ["3 Litre Su İç", "Ödevleri Yap", "En Az 3 Saat Kodlama Yap", "Yemek Yap", "50 Sayfa Kitap Oku"]

let list = document.querySelector('#list')

items.forEach(item => {

    let li = document.createElement('li')
    let t = document.createTextNode(item)
    li.appendChild(t)

    list.appendChild(li)

    let span = document.createElement('span')
    let text = document.createTextNode('*')
    span.className = 'close'
    span.appendChild(text)
    li.appendChild(span)
    
    span.addEventListener('click', function(){
        let li = this.parentElement;
        li.style.display = 'none' }
    )
} )


let ulList = document.querySelector("ul");
ulList.addEventListener("click", function (item) {
    if (item.target.tagName = 'li') {
      item.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
    var li = document.createElement("li")
    var inputValue = document.getElementById("task").value
    var t = document.createTextNode(inputValue)
    li.appendChild(t)
    if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
      $(".error").toast("show")
    } else {
      $(".success").toast("show")
      document.getElementById("list").appendChild(li)
    }
    
document.getElementById("task").value = ""
     
var span = document.createElement("SPAN");
var txt = document.createTextNode("*");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

span.addEventListener('click', function(){
    let li = this.parentElement;
    li.style.display = 'none' 
      
    }
  
) }
