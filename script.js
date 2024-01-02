password = ""
var chars = "azertyuiopqsdfghjklmwxcvbn0123456789!@#$%&()+=AZERTYUIOPQSDFGHJKLMWXCVBN";
var password_length = document.getElementById("fgliss").value;



for(let i = 0; i<password_length;i++){
    var random = Math.floor(Math.random() * chars.length);
    password += chars.substring(random, random+1);
}


function display(){
    document.getElementById('text').value = password
}


const copyContent = async () => {
    try{
        await navigator.clipboard.writeText(password);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err)
    }
}

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("text");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

console.log(password_length)
display()
