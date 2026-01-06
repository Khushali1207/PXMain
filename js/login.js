fetch("http://localhost:8080/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: email.value,
    password: password.value
  })
})
.then(res => res.json())
.then(data => {
  alert("Login successful");
});
