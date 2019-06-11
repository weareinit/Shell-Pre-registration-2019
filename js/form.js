const FORM_URL = "https://us-central1-preregistration-fc98c.cloudfunctions.net/widgets";

//select2 multi selection
$(document).ready(function() {
    $('.selectpicker').select2();
});

//Button events  
const cancelBtn = document.getElementById("cancel");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", submit);
cancelBtn.addEventListener("click", function() {
    window.location.href = "index.html";
});

//successful submition
function isSuccessful() {
    var form = document.getElementById('form-container');
    var success = document.getElementById('success');

    if (success.style.display === "none") {
        form.parentNode.removeChild(form);
        success.style.display = "flex", 3000
    } else {
        success.style.display = "none";
    }

}

//shows error message
function showError(id) {
    let errorMess = ''

    switch (id) {
        case 'custom':
            errorMess = "Your email address is not valid, try again"; //not so custom :D
            break;
        case 'fname':
            errorMess = 'Something\'s wrong! Make sure to add your first name'
            break;
        case 'lname':
            errorMess = 'Something\'s wrong! Make sure to add your last name'
            break;
        case 'email':
            errorMess = 'Something\'s wrong! Make sure to add your email address'
            break;

        case 'message':
            errorMess = 'Something\'s wrong! Please add some suggestions'
            break;
        case '#activity':
            errorMess = 'Something\'s wrong! Make sure to select at least one activity'
            break;
        case '#hardware':
            errorMess = 'Something\'s wrong! Make sure to select at least one hardware'
            break;
        case '#workshop':
            errorMess = 'Something\'s wrong! Make sure to select at least one workshop'
            break;
        case '#swag':
            errorMess = 'Something\'s wrong! Make sure to select at least one swag'
            break;
        default:
            errorMess = "something's wrong, check everything and try again."
            break;
    }

    $('html, body,div').animate({ scrollTop: 0 }, 'slow');
    $("#errorMessage").show()
    document.getElementById('error-text').innerHTML = errorMess;

}

//hides error message
function hideError() {
    $("#errorMessage").hide()
}

//gets an element by id and check if it's not empty
function getInputVal(id) {
    const input = document.getElementById(id);

    if (input.value.trim() == null || input.value.trim() == "") {
        throw showError(id);

    } else {
        if (id === 'email' && !(ValidateEmail(input.value.trim()))) {
            throw showError("custom");
        }

        hideError();
        return input.value;
    }
}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    // alert("You have entered an invalid email address!")
    return (false)
}

//copying needed values only and check if field is empty
function getArrayInputVal(id) {
    const array = [];

    for (const element of $(id)[0].selectedOptions) {
        array.push(element.text);
    }
    if (array === undefined || array.length == 0) {
        throw showError(id);
    } else {
        hideError();
        return array;
    }
}

//submit form
function submit() {

    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var email = getInputVal('email');
    var workshops = getArrayInputVal('#workshop').concat();
    var hardware = getArrayInputVal('#hardware'.concat());
    var activities = getArrayInputVal('#activity').concat();
    var swag = getArrayInputVal('#swag').concat();
    var message = getInputVal('message');

    function formVals(fname, lname, email, workshops, hardware, activities, swag, message) {

        return {
            fname: fname,
            lname: lname,
            email: email,
            workshop: workshops,
            hardware: hardware,
            activities: activities,
            swag: swag,
            message: message,
        }
    }

    try {
        var data = formVals(fname, lname, email, workshops, hardware, activities, swag, message);
        postData(data);
        isSuccessful();
    } catch (error) {
        showError("");
    }

}

//submit to database
function postData(data) {
    const Http = new XMLHttpRequest();

    Http.open("POST", FORM_URL);
    console.log(data)
    Http.send(JSON.stringify(data));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
}