const getAllUsers = async () => {
  try {
    const res = await fetch(
      "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users",
      { method: "GET" }
    );
    console.log(await res.json());
  } catch (err) {
    console.error(err);
  }
};
 
const getIDuser = async () => {
  const id = document.getElementById("ID").value;
  try {
    const res = await fetch(
      "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/" + id,
      { method: "GET" }
    );
    console.log(await res.json());
  } catch (err) {
    console.error(err);
  }
};

const DeleteUserByID = async () => {
  const id = document.getElementById("ID").value;
  try {
    const res = await fetch(
      "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/" + id,
      { method: "DELETE" }
    );
    console.log("User with ID " + id + " has been deleted!");
  } catch (error) {
    console.error(error);
  }
};

const UpdateUserByID = async () => {
  const id = document.getElementById("ID").value;
  const email = document.getElementById("Email").value;
  const pass = document.getElementById("Password").value;
  const updatedData = {
    email: email,
    password: pass,
  };

  try {
    const res = await fetch(
      "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Đảm bảo gửi dữ liệu dưới dạng JSON
        },
        body: JSON.stringify(updatedData),
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const createUserByID = async () => {
  const id = document.getElementById("ID").value;
  const email = document.getElementById("Email").value;
  const pass = document.getElementById("Password").value;
  const createData = {
    email: email,
    password: pass,
  };

  try {
    const res = await fetch(
      "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/" ,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Đảm bảo gửi dữ liệu dưới dạng JSON
        },
        body: JSON.stringify(createData),
      }
    );
  } catch (error) {
    console.error(error);
  }
};

 const checkID = async ()=>{
  const id = document.getElementById("ID").value;
  // URL của API chứa dữ liệu JSON
var apiUrl = "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/";
// ID cần kiểm tra
var desiredId = id;

try {
    // Lấy dữ liệu từ API
    var response = await fetch(apiUrl);
    var data = await response.json();

    // Kiểm tra xem ID có tồn tại trong JSON từ API hay không
    var idExists = data.some(obj => obj.id === desiredId);

    if (idExists) {
        return 1;
    } else {
        return 0;
    }
} catch (error) {
    console.error("Lỗi khi lấy dữ liệu từ API:", error);
}

 }

 const check = () =>{
  const id = document.getElementById("ID").value;
  if(id === ""){
    return 0;
  } else return 1;
 }


 const checkGet1= () => {
  if(check()){
    document.getElementById("error").style.display= "none";
    getIDuser();
  } else {
    document.getElementById("error").innerHTML= " Hãy nhập ID cần lấy thông tin!";
    document.getElementById("error").style.display= "block";
  }
 }
 const checkGet2= () => {
  if(check()){
    document.getElementById("error").style.display= "none";
    DeleteUserByID();
  } else {
    document.getElementById("error").innerHTML= " Hãy nhập ID cần xóa !";
    document.getElementById("error").style.display= "block";
  }
 }