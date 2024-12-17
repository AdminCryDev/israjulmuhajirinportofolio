function khodam() {
    let valueInput = document.getElementById("input").value;
    
    if (valueInput == "") {
        alert("mohon isi nama anda terlebih dahulu");
    } else {
        let listKhodam = ['aing maung', 'kuntil anak doyan kopi', 'tuyul racing', 'kosong', 'pocong kesandung batu', 'pesepak handal', 'sipaling jago di ranjang', 'keledai'];
        let randomKhodam = Math.floor(Math.random() * (7 - 0)) + 0;
        document.getElementById('hasil').innerHTML = listKhodam[randomKhodam];
    }

}