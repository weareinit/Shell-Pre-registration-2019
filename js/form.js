//select2 multi selection
$(document).ready(function () {
    $('.selectpicker').select2();
});

//Button events  
const cancelBtn = document.getElementById("cancel");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", submit);
cancelBtn.addEventListener("click", function () {
    window.location.href = "index.html";
});

//Initialize Firebase
const config = {
    apiKey: "AIzaSyBx01mLugiaWjyNLml5NSVs-XX_LgmdP-M",
    authDomain: "shellpre-53931.firebaseapp.com",
    databaseURL: "https://shellpre-53931.firebaseio.com",
    projectId: "shellpre-53931",
    storageBucket: "shellpre-53931.appspot.com",
    messagingSenderId: "413474432056"
};

firebase.initializeApp(config);
var formRef = firebase.database().ref('preRegistration');

function isSuccessful() {
    var form = document.getElementById('form-container');
    var success = document.getElementById('success');

    if (success.style.display === "none") {
        form.parentNode.removeChild(form);
        success.style.display = "flex", 2000
    } else {
        success.style.display = "none";
    }

}

function showError() {
    $('html, body,div').animate({ scrollTop: 0 }, 'slow');
    $("#errorMessage").show()
}

function hideError() {
    $("#errorMessage").hide()
}

//gets an element by id and check if it's not empty
function getInputVal(id) {
    const input = document.getElementById(id);

    if (input.value.trim() == null || input.value.trim() == "") {
        showError();
        console.log("error " + id)

    } else {
        hideError();
        return input.value;
    }
}

//copying needed values only and check if field is empty
function getArrayInputVal(id) {
    const array = [];

    for (const element of $(id)[0].selectedOptions) {
        array.push(element.text);
    }

    if (array === undefined || array.length == 0) {
        console.log("error " + id)
        showError();

    } else {
        hideError();
        return array;
    }
}

//submit form
function submit() {

    console.log("Submitting data...");

    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var email = getInputVal('email');
    var message = getInputVal('message');
    var workshops = getArrayInputVal('#workshop').concat();
    var hardware = getArrayInputVal('#hardware'.concat());
    var activities = getArrayInputVal('#activity').concat();
    var swag = getArrayInputVal('#swag').concat();

    console.log("data inputs are corect...");

    try {
        saveToFirebase(lname, fname, email, workshops, hardware, activities, swag, message);
        // submitBtn.disabled = "disabled";
        // submitBtn.disabled = true;
        isSuccessful();
        console.log("submitted successfully");
    } catch (error) {
        showError();
    }

}

//constructor
function Profile(fname, lname, email, workshop, hardware, activities, swag, message) {
    return {
        fname: fname,
        lname: lname,
        email: email,
        workshop: workshop,
        hardware: hardware,
        activities: activities,
        swag: swag,
        message: message,
    }
}

//submit to database
function saveToFirebase(fname, lname, email, workshop, hardware, activities, swag, message) {
    var newFormRef = formRef.push();
    newFormRef.set(
        Profile(fname, lname, email, workshop, hardware, activities, swag, message));
}