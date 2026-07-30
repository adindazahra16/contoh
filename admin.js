let linkUndangan = "";

function buatLink() {

    const nama = document.getElementById("nama").value.trim();

    if (nama === "") {

        alert("Masukkan nama tamu terlebih dahulu!");

        return;

    }

    linkUndangan =
    "https://adindazahra16.github.io/hmmmmm/?to=" +
    encodeURIComponent(nama);

    document.getElementById("hasil").innerHTML = `
        <p><b>Link Undangan:</b></p>
        <input type="text" id="link" value="${linkUndangan}" readonly>
    `;

    document.getElementById("copyBtn").style.display = "block";

}

function copyLink() {

    const link = document.getElementById("link");

    link.select();
    link.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(link.value);

    alert("Link berhasil disalin!");
}