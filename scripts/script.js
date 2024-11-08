function myfunction() {
  let age = document.getElementById("ageBox").valueAsNumber;
  let vip = document.getElementById("vipCheck").checked;

  if (vip) {
    alert("Welcome in my best VIP customer");
  } else {
    if (age >= 18) {
      alert("Access granted");
    } else {
      alert("Access denied");
    }
  }
}
