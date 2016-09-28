function validatePassword()
{
    //find the values of our inputs
    var x = document.getElementById('newpassword1').value;
    var y = document.getElementById('newpassword2').value;

    //check length of x
    if (x.length < 8) {
        alert("New Password is less than 8 characters!")
    } else //check length of y
    if (y.length < 8) {
        alert("Confirm Password is less than 8 characters!")
    } else //check match
    if (x != y) {
        alert("Passwords do not match!")
    } else {
        //Passwords match
        alert("Passwords match!");
    }
}
