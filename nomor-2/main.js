const submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const formData = {
        nama: document.getElementById("nama").value,
        email: document.getElementById("email").value,
        pekerjaan: document.getElementById("pekerjaan").value,
        telepon: document.getElementById("telepon").value,
    };
    const urlEncodedData = new URLSearchParams(formData).toString();
    const jsonString = JSON.stringify(formData, null, 2);
    const resultDiv = document.getElementById("result");
    
    resultDiv.innerHTML = `
                <h1>Data yang Disubmit</h1>
                <h4>Object JSON:</h4>
                <pre>${jsonString}</pre>
                <h4>URL Encoded String:</h4>
                <p>${urlEncodedData}</p>
            `;
});
