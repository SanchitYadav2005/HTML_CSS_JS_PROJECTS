const button = document.querySelector("#btn");
const input_name = document.querySelector("#name");
const input_email = document.querySelector("#email");
const input_pass = document.querySelector("#password")
const list = document.querySelector('ul');
const li = document.createElement("li");
const clearBtn = document.querySelector('#clear')


button.addEventListener('click', function(e){
    e.preventDefault();
    checkPassword();
})

function checkPassword(){
    if (input_pass.value.length >= 8){
        li.innerText = `lenght of password is ${input_pass.value.length}`
        list.append(li);
    }else{
        li.innerText = 'password cannot be empty'
        list.append(li)
    }
}

clearBtn.addEventListener('click', function(){
    input_email.value = '';
    input_pass.value = '';
    input_name.value = '';
    list.innerHTML = '';
})