// Teks awal
function panjang() {
let teks = "Merah Putih"
let panjang_teks = teks.length
alert(panjang_teks)
}

// ubah variable menjadi uppercase
function besar () {
let teks1 = "Merah Putih"
let upperCase = teks1.toUpperCase()
alert(upperCase)
}

// ubah variabel menjadi lowerCase
function kecil () {
    let teks2 = "Merah Putih"
    let lowerCase = teks2.toLowerCase()
    alert(lowerCase)

}

function ubah () {
    let teks3 = "Merah Putih"
    let ubahteks = teks3.replace("Putih","Muda")
    alert(ubahteks)
}


const tombol = document.getElementById("Teks")
tombol.addEventListener("click",panjang)

const klik = document.getElementById("Ubah")
klik.addEventListener("click",besar)

const click = document.getElementById("kecil")
click.addEventListener("click",kecil)

const tekan = document.getElementById("rubah")
tekan.addEventListener("click",ubah)
