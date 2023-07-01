const inputIcon2 = document.querySelector(".input__icon2");
const inputPassword = document.querySelector(".input__field2");

inputIcon2.addEventListener("click", () => {
    inputIcon2.classList.toggle("ri-eye-off-line");
    inputIcon2.classList.toggle("ri-eye-line");
    inputPassword.type = inputPassword.type === "text" ? "password" : "text";
});

