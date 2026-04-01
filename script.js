function login(event) {
  event.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // simulasi login (frontend only)
  if (user === "admin" && pass === "12345") {
    document.getElementById("message").style.color = "lightgreen";
    document.getElementById("message").innerText = "Login berhasil!";
  } else {
    document.getElementById("message").innerText = "Username / Password salah!";
  }
}
