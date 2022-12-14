let low = 'abcdefghijklmnopqrstuvwxyz';
let up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let digits = '0123456789';
let symbols = '!@#$%^&*()-_.';

let check_up = document.getElementById('upcase');
let check_low = document.getElementById('lowcase');
let check_digit = document.getElementById('digits');
let check_symbol = document.getElementById('symbols');
let button = document.querySelector('.button');
let output = document.querySelector('.output');

let password = ''; 

button.onclick = function() {
    passlen = document.getElementById('passlen').value;
    
    if (check_up.checked) { password += low; }
    if (check_low.checked) { password += up; }
    if (check_digit.checked) { password += digits; }
    if (check_symbol.checked) { password += symbols; }

    var shuffled = password.split('').sort(function(){return 0.5-Math.random()}).join('');

    password = '';

    for (i = 0; i < passlen; i++) { password += shuffled[i];}
    
    output.innerHTML = password;
    password = ''
    shuffled = ''
}

