function validate() {

  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let p = document.getElementById("pass").value;

  if (n == "") {
    document.getElementById("nerr").innerHTML = "Enter name";
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

  alert("Form submitted successfully");
}
