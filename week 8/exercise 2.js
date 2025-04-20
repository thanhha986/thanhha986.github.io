function formValid () {
    var f = document.frmRegister;
    var phone_pattern = /^(\(0\d{1,3}\)\d{7})|(0\d{9,10})$/;
    var email_pattern = /^[a-zA-Z]\W*(\.\w+)*\@\W+(\.\w{2,3})+$/;
    if(f.txtUsername.value=="") {
        alret("Username cant't be empty");
        f.txtUsername.focus();
        return false;
    }
    if(f.txtPassword1.value.length < 6) {
        alret("Password length must be from 6 to 20 characters");
        f.txtPassword1.focus();
        return false;
    }
    if(f.txtPassword1.value !=f.txtPassword2.value) {
        alert("Password doesn't match");
        f.txtpassword2.focus();
        return false;
    }
    if(phone_pattern.test(f.txtPhone.value) ==false) {
        alert("Invalid phone number");
        f.txtPhone.focus();
        return false;
    }
    if(email_pattern.test(f.txtEmail.value) == false) {
        alert("Invalid email address");
        f.txtEmail.focus();
        return false;
    }
    if(f.chkMusic.checked==false && f.chkReading.checked==false) {
        alert("You must select at least one favourite");
        f.chkMusic.focus();
        return false;
    }
    if(f.fillPicture.value=="") {
        alert("You must select your picture");
        f.fillPicture.focus();
        return false;
    }
    if(f.txtDescription.value=="") {
        alert("You must enter description");
        f.txtDescription.focus();
        return false;
    }
    alret("All registration information are correct");
    return true;
<form name="frmRegister" method="get" onsubmit="return formValid()">
</form>
}