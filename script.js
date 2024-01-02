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



console.log(password_length)
display()
