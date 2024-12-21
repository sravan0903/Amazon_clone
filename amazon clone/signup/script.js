var charactersSet = /^[a-zA-Z\s-, ]+$/;
function SignUpValidation(){
    var customerName = document.getElementById('customer-name').value;
    var customerNumber = document.getElementById('customer-number').value;
    var customerPassword = document.getElementById('customer-password').value;
    if(!customerName.match(charactersSet)){
        alert("Enter valid name!")
        return false;
    }
    else if(customerNumber.length>10 || customerNumber.length<10){
        alert("Enter a valid mobile number");
        return false;
    }
    else if(isNaN(customerNumber)){
        alert("Enter valid number");
        return false;
    }
}