function validateLogin() {
    // Kullanıcı adı ve şifreyi al
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var messageElement = document.getElementById("message");

    // Basit kullanıcı adı ve şifre doğrulama (bu güvenli değildir, örnek amaçlı)
    if (username === "admin" && password === "1234") {
        // Başarılı giriş mesajı
        messageElement.textContent = "Giriş başarılı!";
        messageElement.classList.remove("error");
        messageElement.classList.add("success");

        // Başarılı girişten sonra yönlendirme
        setTimeout(function () {
            window.location.href = "home_page.html"; // Ana sayfaya yönlendir
        }, 1000); // 1 saniye bekleyip yönlendir

        return false; // Formun gönderilmesini engelle
    } else {
        // Hatalı giriş mesajı
        messageElement.textContent = "Hatalı kullanıcı adı veya şifre!";
        messageElement.classList.remove("success");
        messageElement.classList.add("error");

        // Formun gönderilmesini engelle
        return false;
    }
}
