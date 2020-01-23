console.log("Hello again");

<<<<<<< Updated upstream
var a = 1;
var b = 2;

var c = a + b;

}
=======
function validateForm(e) {
  e.preventDefault(); // stop the submit button from refreshing the page
  console.log("validating....");

  console.log("user name: " + validateUsername());
  console.log("email: " + validateEmail());
  console.log("password: " + validatePassword());
  console.log("first name: " + validateFirstName());
  console.log("last name: " + validateLastName());

  if (validateUsername() && validateEmail() && validatePassword() && validateFirstName() && validateLastName()) {
    var _newUser = getUserName();
    // add code to update registeredUsers array with new user and call render function
    // TODO
    registeredUsers.push(_newUser);

    if (registeredUsers.length > 5) {
      registeredUsers.shift();
    }
    renderRegisteredUsers();
    document.registration.reset(); // reset form input fields
  }
}

function renderRegisteredUsers() {
  var ul = document.getElementById("registered-users");
  ul.innerHTML = "";
  registeredUsers.forEach(function(registeredUser) {
    var _newUser = document.createElement("li");
    _newUser.innerHTML = registeredUser;
    document.getElementById("registered-users").appendChild(_newUser);
  });
}

/**
 * this function supposely validates submitted username
 * @returns [Boolean] true when valid, false otherwise
 */
function validateUsername() {
  var _userName = getUserName();

  return !checkSpace(_userName);
}

/**
 * this function supposely validates submitted email
 * @returns [Boolean] true when valid, false otherwise
 */
function validateEmail() {
  var _email = getEmail();

  if (checkSpace(_email) === true) {
    return false;
  }

  // check for @
  var atSymbol = _email.indexOf("@");
  if (atSymbol < 1) {
    return false;
  }

  // check if there is a dot located less than 2 symbols away from the @ sign
  var dot = _email.indexOf(".");
  if (dot <= atSymbol + 2) {
    return false;
  }

  // check that the dot is not at the end
  if (dot === _email.length - 1) {
    return false;
  }

  return true;
}

/**
 * this function supposely validates submitted password
 * if password and confirmPassword do not match, return false
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function validatePassword() {
  var _password = getPassword();
  var _confirmPassword = getConfirmPassword();

  if (_password.length < 8) {
    console.log("password not long enough");
    return false;
  }
  if (_password !== _confirmPassword) {
    console.log("password does not match");
    return false;
  }

  return true;
}

/**
 * this function supposely checks whether the sample is an empty string
 * or there is space within it
 * @param [String] sample text to be evaluated
 * @returns [Boolean] true when valid, false otherwise
 */
function checkSpace(sample) {
  return sample === "" || sample.indexOf(" ") > -1;
}

/**
 * this function looks under the form with name "registration"
 * look under the "username" input field and returns the value of it
 * returns nothing if no value is found
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function getUserName() {
  if (typeof document.registration.username.value === "undefined") {
    return "";
  } else {
    return document.registration.username.value;
  }
}

function getEmail() {
  // TODO
  if (typeof document.registration.email.value === "undefined") {
    return "";
  } else {
    return document.registration.email.value;
  }
}

function getPassword() {
  // TODO
  if (typeof document.registration.password.value === "undefined") {
    return "";
  } else {
    return document.registration.password.value;
  }
}

function getConfirmPassword() {
  // TODO
  if (typeof document.registration.password_confirm.value === "undefined") {
    return "";
  } else {
    return document.registration.password_confirm.value;
  }
}

function getFirstName() {
  if (typeof document.registration.firstname.value === "undefined") {
    return "";
  } else {
    return document.registration.firstname.value;
  }
}
function getLastName() {
  if (typeof document.registration.lastname.value === "undefined") {
    return "";
  } else {
    return document.registration.lastname.value;
  }
}

function getPhonenumber() {
  if (typeof document.registration.phonenumber.value === "undefined") {
    return "";
  } else {
    return document.registration.phonenumber.value;
  }
}

function validateFirstName() {
  var _firstName = getFirstName();

  if (_firstName === "") {
    console.log("first name required");
    return false;
  }
  return true;
}

function validateLastName() {
  var _lastName = getLastName();

  if (_lastName === "") {
    console.log("last name required");
    return false;
  }
  return true;
}
>>>>>>> Stashed changes
