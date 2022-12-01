// validate login inputs
// make links to other pages appear

//document.getElementById("login").addEventListener("click", function() {
//    var termsYes = document.getElementById("terms1");
//    var termsNo = document.getElementById("terms2");
//    var validator = document.getElementById("validator");    
//});

function signIn() {
    var enter1 = document.getElementById("enter1");
    var enter2 = document.getElementById("enter2");


    // check form inputs
    if (checkName() && checkAge() && checkTerms()) {
        enter1.style.visibility = "visible";
        enter2.style.visibility = "visible";
    } else {
        enter1.style.visibility = "hidden";
        enter2.style.visibility = "hidden";
    }
}

function checkName() {
    var name = document.getElementById("name");
    
    if (name.validity.valueMissing) {
        name.setCustomValidity("You have a name, don't you??");
        return false;
    } else {
        name.setCustomValidity("");
        return true;
    }
}

function checkAge() {
    var age = document.getElementById("age");

    if (age.validity.valueMissing) {
        age.setCustomValidity("Oops! You forgot to enter your age.");
        return false;
    } else if (parseInt(age.value) < 18) {
        age.setCustomValidity("Sorry, you must be at least 18 to enter.");
        return false;
    } else if (parseInt(age.value) > 110) {
        age.setCustomValidity("No way you're that old. Enter your age for reaal this time.");
        return false;
    } else if (parseInt(age.value) == NaN) {
        age.setCustomValidity("Please ener your age in digits (eg, 24)");
        return false;
    } else {
        age.setCustomValidity("");
        return true;
    }
}

function checkTerms() {
    var terms = document.getElementsByName("terms");
    var validator = document.getElementById("radioValidation");

    if (terms[0].checked == false && terms[1].checked == false) {
        validator.style.visibility = "visible";
        return false;
    } else if (terms[1].checked) {
        validator.style.visibility = "visible";
        document.getElementById("terms2").setCustomValidity('Must agree to my terms to enter.');
        return false;
    } else if (terms[0].checked) {
        validator.style.visibility = "hidden";
        document.getElementById("terms2").setCustomValidity('')
        return true;
    }
}
