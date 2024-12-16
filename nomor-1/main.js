const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const urlEncodedString = new URLSearchParams(formData).toString();
    const result = document.getElementById("result");

    result.innerHTML = `
                <h1>Data Formulir</h1>
                <p><strong>Nama:</strong> ${formData.get("nama")}</p>
                <p><strong>Email:</strong> ${formData.get("email")}</p>
                <p><strong>Telepon:</strong> ${formData.get("telepon")}</p>
                <h2>URL Encoded:</h2>
                <pre>${urlEncodedString}</pre>
            `;
});