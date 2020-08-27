function check_submit() {
    const text = document.querySelector('input[type="text"]');
    const password = document.querySelector('input[type="password"]');
    const submit = document.querySelector('input[type="submit"]');
    
    if(text.value != '' && password.value != ''){
        submit.removeAttribute('disabled');
        submit.setAttribute('style', 'opacity: 1');
    }
    else {
        submit.setAttribute('disabled', true);
        submit.setAttribute('style', 'opacity: 0.5');
    }
}


