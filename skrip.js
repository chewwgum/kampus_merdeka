function kosong1() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
}

function kosong2() {
    let frm = document.getElementById("formulir");
    frm.a2.value = "";
}

function kosongAll() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
}

function Htambah() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    if (isNaN(a1) || a1 == '') {
        alert("Masukkan Angka")
    }
    else {
        let total = ParseInt(a1) + parseInt(a2);
        frm.hasil.value = total;
    }
}

function Hkurang() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    if (isNaN(a1) || a1 == '') {
        alert("Masukkan Angka")
    }
    else {
        let total = a1-a2;
        frm.hasil.value = total;
    }
}

function Hkali() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    if (isNaN(a1) || a1 == '') {
        alert("Masukkan Angka")
    }
    else {
        let total = a1*a2;
        frm.hasil.value = total;
    }
}

function Hbagi() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    if (isNaN(a1) || a1 == '') {
        alert("Masukkan Angka")
    }
    else {
        let total = a1/a2;
        frm.hasil.value = total;
    }
}

function Hpangkat() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    if (isNaN(a1) || a1 == '') {
        alert("Masukkan Angka")
    }
    else {
        let total = Math.pow(a1,a2);
        frm.hasil.value = total;
    }
}

