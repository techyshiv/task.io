function display() {
    let username = document.getElementById("username").value;
    let date = document.getElementById("date").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (username && date && password && cpassword && email && phone && email && question && answer != "") {
        if (username.length >= 3) {
            console.log("Yes");
        } else {
            alert("UserName Cannot be less than 3");
        }
        if (password.length >= 8) {
            console.log("Yes");
        } else {
            alert("Password Cannot be less than 8 Chracters");
        }
        if (password == cpassword) {
            console.log("Yes");
        } else {
            alert("Password and Confrim Password Not Match");
        }
        if (emailRegex.test(email)) {
            if (phoneRegex.test(phone) == true) {
                $.getJSON("https://api.ipify.org?format=json",
                    function (data) {
                        let ip = data.ip;
                        console.log(ip);
                        let userdata = {
                            "UserName": username,
                            "Date of Birth": date,
                            "Password": password,
                            "ConfirmPassword": cpassword,
                            "Email": email,
                            "Phone": phone,
                            "Question": question,
                            "Answer": answer,
                            "Gender": gender,
                            "Ip Address": ip
                        }
                        console.log(userdata);
                        let htmlcontent = document.querySelector('html').innerHTML;
                        document.querySelector('html').innerHTML = `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"><div class="page-wrap d-flex flex-row align-items-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-12 text-center">
                                    <span class="display-1 d-block">Success!!!</span>
                                    <div class="mb-4 lead" id="success">Thanks for register your IP Address is : ${data.ip}</div>
                                    <a href="index.html" class="btn btn-link" onclick = home()>Back to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
    </script>
                    <script>
                    function home(){
                        document.querySelector('html').innerHTML = htmlcontent;
                    }
                    </script>
                    `;
                    })
            } else {
                alert("Mobile Number is Invalid");
            }
        } else {
            alert("Email is Invalid");
        }
    } else {
        alert("All Fields are mendatory");
    }
}