function check_submit() {
    const text = document.querySelector('input[type="text"]');
    const password = document.querySelector('input[type="password"]');
    const submit = document.querySelector('input[type="submit"]');
    
    if(text.value != '' && password.value != ''){
        submit.removeAttribute('disabled');
        submit.setAttribute('style', 'background-color: rgb(255, 99, 71, 1);');
    }
    else {
        submit.setAttribute('disabled', true);
        submit.setAttribute('style', 'background-color: rgb(255, 99, 71, 0.5);');
    }
}


