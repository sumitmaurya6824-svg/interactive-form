function validate() {

  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let p = document.getElementById("pass").value;

  console.log("Username:", n);
  console.log("Email:", e);
  console.log("Password:", p);

  if (n == "") {
    document.getElementById("nerr").innerHTML = "Enter username";
    return false;
  }

  if (e == "") {
    document.getElementById("eerr").innerHTML = "Enter email";
    return false;
  }

  if (p.length < 6) {
    document.getElementById("perr").innerHTML = "Min 6 characters";
    return false;
  }

  console.log("Form submitted successfully ✅");
  alert("Form submitted successfully");
}
