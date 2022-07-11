function createNew() {
    // Variables
    let newItem = document.getElementById('input');
    var msg = new SpeechSynthesisUtterance();
    /* Trim the input to see if the string is empty
    i.e: If it's empty, then after removing the characters, it will be length 0*/
    spaceCheck = newItem.value.trim().length == 0; 
    if(spaceCheck){
        newItem.value = ''; 
        msg.text = 'Please enter a shopping item.'; 
        window.speechSynthesis.speak(msg);
        alert('Please enter a shopping item.');
    } else {
        // Variables
        let item = document.createElement('button');
        let newLine = document.createElement('br');
        let placeholder = document.getElementById('main');
        // Assigns the value to the new item on the list
        item.innerHTML = newItem.value;
        // Says the item
        msg.text = newItem.value + ' added to the list';
        window.speechSynthesis.speak(msg);
        // Erases the input
        newItem.value = ''; 
        // Gives the button its function function
        item.onclick = function() { msg.text = 'The item has been removed from the list'; window.speechSynthesis.speak(msg); item.remove(); newLine.remove(); };
        // Assigns a class to the new item
        item.className = 'item'
        // Adds the new item and a break line to the html
        placeholder.appendChild(item);
        placeholder.appendChild(newLine);
    }
    
}
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        createNew();
    }
});
  