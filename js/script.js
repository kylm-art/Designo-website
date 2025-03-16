const register = document.querySelector('.register')

let log_tab
let input_name
let name_error
let input_firstname
let firstname_error
let input_email
let email_error
let input_phone
let phone_error
let submit
let name_delete
let firstname_delete
let email_delete
let phone_delete

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

function isValidPhoneNumber(phoneNumber) {
    const regex = /^\d{1}\s?\d{1}\s?\d{1}\s?\d{1}\s?\d{1}\s?\d{1}\s?\d{1}\s?\d{1}\s?\d{1}$/
    return regex.test(phoneNumber)
}

if (register) {
    log_tab = register.querySelector('.log')
}

if (log_tab) {
    input_name = log_tab.querySelector('#name')
    input_firstname = log_tab.querySelector('#firstname')
    input_email = log_tab.querySelector('#email')
    input_phone = log_tab.querySelector('#phone')
    submit = log_tab.querySelector('.btn button')
    name_error = log_tab.querySelector('.name_error p')
    firstname_error = log_tab.querySelector('.firstname_error p')
    email_error = log_tab.querySelector('.email_error p')
    phone_error = log_tab.querySelector('.phone_error p')
    name_delete = log_tab.querySelector('.name_error div')
    firstname_delete = log_tab.querySelector('.firstname_error div')
    email_delete = log_tab.querySelector('.email_error div')
    phone_delete = log_tab.querySelector('.phone_error div')
}

name_delete.addEventListener('click', function() {
    log_tab.querySelector('.name_error').style.display ='none'
})

firstname_delete.addEventListener('click', function() {
    log_tab.querySelector('.firstname_error').style.display ='none'
})

email_delete.addEventListener('click', function() {
    log_tab.querySelector('.email_error').style.display ='none'
})

phone_delete.addEventListener('click', function() {
    log_tab.querySelector('.phone_error').style.display ='none'
})

function registration() {
    let isGoodRegistration = true
    log_tab.querySelector('.name_error').style.display ='none'
    log_tab.querySelector('.firstname_error').style.display ='none'
    log_tab.querySelector('.email_error').style.display ='none'
    log_tab.querySelector('.phone_error').style.display ='none'

    if (input_name.value.trim() === "") {
        name_error.innerText = "This field is required"
        log_tab.querySelector('.name_error').style.display ='flex'
        isGoodRegistration = false
    }
    if (input_firstname.value.trim() === "") {
        firstname_error.innerText = "This field is required"
        log_tab.querySelector('.firstname_error').style.display ='flex'
        isGoodRegistration = false
    }
    if (!isValidEmail(input_email.value)){
        if (input_email.value.trim() === "") {
            email_error.innerText = "This field is required"
            log_tab.querySelector('.email_error').style.display ='flex'
        }
        else {
            email_error.innerText = "Invalid Email"
            log_tab.querySelector('.email_error').style.display ='flex'
        }
        isGoodRegistration = false
    }
    if (!isValidPhoneNumber(input_phone.value)) {
        if (input_phone.value.trim() === "") {
            phone_error.innerText = "This field is required"
            log_tab.querySelector('.phone_error').style.display ='flex'
        } else {
            phone_error.innerText = "Invalid Phone number"
            log_tab.querySelector('.phone_error').style.display ='flex'
        }
        isGoodRegistration = false
    }

    return isGoodRegistration
}

submit.addEventListener('click', function() {
    registration()
    if (registration()) {
        window.location.href = 'index.html'
        alert("You will be notified by mail ou by phone call")
    }
})