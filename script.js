const form = document.getElementById("uploadForm");
const materialsList = document.getElementById("materialsList");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const subject = document.getElementById("subject").value;
    const fileInput = document.getElementById("fileInput");

    if (fileInput.files.length === 0) {
        alert("Please select a file.");
        return;
    }

    const file = fileInput.files[0];
    const fileURL = URL.createObjectURL(file);

    // Create material card
    const materialDiv = document.createElement("div");
    materialDiv.classList.add("material-item");
    materialDiv.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>File:</strong> ${file.name}</p>
        <a href="${fileURL}" download class="download-btn">Download</a>
    `;

    materialsList.appendChild(materialDiv);

    // Clear form
    form.reset();

    alert("Material added successfully!");
});
