const signIn = () => {
  if (checkEmailTT() == 1 && checkSyntax()==1) {
    getInfo();
    window.location.href =
    "http://127.0.0.1:5500/login.html";
  }

};
const Log = ()=> {
  window.location.href =
    "http://127.0.0.1:5500/login.html";
}
// check cu phap cua email, pass va confirmpass;
const checkSyntax = () => {
  const email = document.getElementById("mail").value;
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  const passwordID = document.getElementById("error-pass");
  const mailID = document.getElementById("error-mail");
  // const confirmID = document.getElementById("confirm");
  const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexpass = /^(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

  if (regexemail.test(email)) {
    mailID.style.display = "none";
  } else {
    document.getElementById("error-mail").innerHTML = "Loi cu phap email";
    mailID.style.display = "block";
  }
  if (regexpass.test(pass)) {
    passwordID.style.display = "none";
  } else {
    document.getElementById("error-pass").innerHTML = "Vui lòng nhập đúng định dạng mật khẩu (8-32 kí tự, có chữ cái viết hoa và thường)";
    passwordID.style.display = "block";
  }

  if (pass != confirm) {
    document.getElementById("error-pass").innerHTML = "Mật khẩu xác nhận sai";
    passwordID.style.display = "block";
  }

  if (regexemail.test(email) == true && regexpass.test(pass) == true && pass==confirm) {
    return 1;
  } else {
    return 0;
  }
  // if (passwordID.style.display == "none" && mailID.style.display == "none") {
  //   getInfo();
  //   window.location.href =
  //     "http://127.0.0.1:5500/daotao/endOfIntern/login.html";
  // }
};



const checkEmailTT = () => {
  const email = document.getElementById("mail").value;
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const passwordID = document.getElementById("error-pass");
  const mailID = document.getElementById("error-mail");
  // Lấy danh sách các tài khoản từ LocalStorage
  var storedAccounts = localStorage.getItem("accounts");
  var accounts = storedAccounts ? JSON.parse(storedAccounts) : {};

  // Email mới cần kiểm tra
  var newEmail = email;

  // Kiểm tra xem email mới đã tồn tại trong danh sách tài khoản hay không
  if (accounts.hasOwnProperty(newEmail)) {
    document.getElementById("error-mail").innerHTML = "Email da ton tai";
    mailID.style.display = "block";
    return 0;
  } else {
    mailID.style.display = "none";
    return 1;
  }
};

const getInfo = () => {
  const email = document.getElementById("mail").value;
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  // Lấy danh sách các tài khoản từ LocalStorage
  var storedAccounts = localStorage.getItem("accounts");
  var accounts = storedAccounts ? JSON.parse(storedAccounts) : {};

  // Thêm tài khoản mới
  var newEmail = email;
  var newPassword = pass;
  accounts[newEmail] = newPassword;

  // Lưu danh sách mới vào LocalStorage
  localStorage.setItem("accounts", JSON.stringify(accounts));

  //Chuyen huong sang trang login.
 
};
// getInfo();


const Login = () =>{
  if(checkmail()== 1){
    window.location.href =
       "http://127.0.0.1:5500/login-sucess.html";
  }
}

const checkmail = () =>{
  const email = document.getElementById("log-email").value;
  const pass = document.getElementById("log-pass").value;
  const passwordID = document.getElementById("err-log-pass");
  const mailID = document.getElementById("err-log-email");

  // Lấy danh sách các tài khoản từ LocalStorage
var storedAccounts = localStorage.getItem("accounts");
var accounts = storedAccounts ? JSON.parse(storedAccounts) : {};

// Email và mật khẩu cần kiểm tra
var inputEmail =  email;
var inputPassword = pass;
console.log(accounts.hasOwnProperty(inputEmail))
// Kiểm tra xem email đã tồn tại trong danh sách tài khoản hay không
if (accounts.hasOwnProperty(inputEmail)) {
    mailID.style.display= "none";
    // Kiểm tra xem mật khẩu nhập vào có khớp với mật khẩu của email đó hay không
    if (accounts[inputEmail] === inputPassword) {
      passwordID.style.display= "none";
      mailID.style.display= "none";
      return 1;
    } else {
      passwordID.style.display= "block";
      return 0;
    }
} else {
  mailID.style.display= "block";
  passwordID.style.display= "none";
  return 0;
}




//   // Lấy danh sách các email từ LocalStorage
// var storedEmails = localStorage.getItem("emails");
// var emails = storedEmails ? JSON.parse(storedEmails) : [];

// // Email mới cần kiểm tra
// var newEmail = email;

// // Kiểm tra xem email mới đã tồn tại trong danh sách hay không
// var emailExists = emails.includes(newEmail);

// if (emailExists) {
//     passwordID.style.display= "none";
//     return 1;
// } else {
//    passwordID.style.display= "block";
//    return 0;
// }

}