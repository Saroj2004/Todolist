let inputBx = document.querySelector('#inputBx'); // Assuming inputBx is an ID
let list = document.querySelector('#list'); // Assuming list is an ID

inputBx.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (inputValue) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputValue}<i></i>`; // corrected the template literal and typo here

    listItem.addEventListener ("click",function(){
        this.classList.toggle('done');

    })

    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    })
    list.appendChild(listItem);
}
