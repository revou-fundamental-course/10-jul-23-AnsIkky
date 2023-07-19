// Memanggil DOM bagian input dan tombol(button)
const myForm = document.getElementById("myForm");
const genderS = document.getElementsByName("jenis_kelamin");
const bHeight = document.getElementById("bHeight");
const age = document.getElementById("age");
const bWeight = document.getElementById("bWeight");
const calcBtn = document.getElementById("calcBtn");
const resBtn = document.getElementById("resBtn");


// Memanggil DOM bagian kalkulasi hasil dan info hasil
const bmiRes = document.getElementById("bmiResult");
const resH3 = document.getElementById("resH3");
const resH4 = document.querySelector(".resultDataText h4");
const resImg = document.querySelector(".resultData .resImg");
const infoH3 = document.querySelector(".resultInfo h3");
const infoPara = document.querySelectorAll(".resultInfo p");
const infoH5 = document.querySelectorAll(".resultInfo h5");


// Menjumlahkan total BMI jika tombol "Hitung BMI ditekan"
myForm.onsubmit = e => {
  bmiRes.innerHTML = (bWeight.value / (Math.pow((bHeight.value / 100), 2))).toFixed(2);
  bmiCalculation();
  bmiInfo();
  e.preventDefault();
}

// Membuat tombol Reset
resBtn.addEventListener("click", function() {
  bmiRes.innerHTML = "0.0";
  resH3.innerHTML = "Disini akan ditampilkan index BMI anda";
  resH4.innerHTML = "Berapakah index BMI anda?"
  resImg.innerHTML = `<img src="assets/img/normal/06.png" alt="hasil_bmi">`;
  bmiRes.style.backgroundColor = `#c2bab0`;
  infoH3.innerHTML = " ";
  infoH5[0].innerHTML = " ";
  infoH5[1].innerHTML = " ";
  infoPara[0].innerHTML = " ";
  infoPara[1].innerHTML = " ";
  infoPara[2].innerHTML = " ";
})

 // Mengambil value dari input radio button (jenis kelamin)
function getGenders() {
  for(let i = 0; i < genderS.length; i++) {
    if (genderS[i].checked) {
      return (genderS[i].value);
    }
  }
}







// Fungsi-fungi pemanggilan DOM
function bmiCalculation () {
  // membuat nomor acak untuk url gambar random
  const randomNum = Math.floor((Math.random() * 5) + 1);


  // membuat pernyataan hasil BMI menggunakan if, if else dan else
  if(bmiRes.innerHTML < 18.5) {
    resH3.innerHTML = "berat badan Kurang";
    resH4.innerHTML = "Anda kekurangan berat badan"
    resImg.innerHTML = `<img src="assets/img/sad/0${randomNum}.png" alt="hasil_bmi">`;
    bmiRes.style.backgroundColor = `#cf2222`;
  }
  else if(bmiRes.innerHTML >= 18.5 && bmiRes.innerHTML <= 24.99) {
    resH3.innerHTML = "Berat badan Normal";
    resH4.innerHTML = "Anda memiliki berat badan ideal"
    resImg.innerHTML = `<img src="assets/img/happy/0${randomNum}.png" alt="hasil_bmi">`;
    bmiRes.style.backgroundColor = `#22cf48`;
  }
  else if(bmiRes.innerHTML >= 25.0 && bmiRes.innerHTML <= 29.9) {
    resH3.innerHTML = "Berat bada Lebih";
    resH4.innerHTML = "Anda memiliki berat badan berlebih";
    resImg.innerHTML = `<img src="assets/img/normal/0${randomNum}.png" alt="hasil_bmi">`;
    bmiRes.style.backgroundColor = `#cfcf22`;
  }
  else if (bmiRes.innerHTML >= 30.0 && bmiRes.innerHTML < Infinity) {
    resH3.innerHTML = "Kegemukan";
    resH4.innerHTML = "Anda mengalami obesitas";
    resImg.innerHTML = `<img src="assets/img/sad/0${randomNum}.png" alt="hasil_bmi">`;
    bmiRes.style.backgroundColor = `#cf2222`;
  }
  else if(bmiRes.innerHTML == Infinity) {
    bmiRes.innerHTML = "😕";
    resH3.innerHTML = "Ada data yang tidak di isi";
    resH4.innerHTML = "Tolong isi data yang kosong untuk menampilkan hasil";
    bmiRes.style.backgroundColor = '#d851b7';
  }
  else {
    bmiRes.innerHTML = "😟"
    resH3.innerHTML = "Tolong isi data anda";
    resH4.innerHTML = "Jika kosong tidak akan menampilkan hasil";
    bmiRes.style.backgroundColor = '#51d8d2';
  }
}


function bmiInfo() {
  if(bmiRes.innerHTML < 18.5) {
    infoH3.innerHTML = 'Hasil kurang dari 18,5';
    infoH5[0].innerHTML = `Jenis Kelamin: ${getGenders()}`;
    infoH5[1].innerHTML = `Umur: ${age.value}`;
    infoPara[0].innerHTML = 'Anda berada dalam kategori underweight atau kekurangan berat badan.';
    infoPara[1].innerHTML = 'Jika BMI anda berada dalam kategori ini, maka Anda dianjurkan untuk menaikkan berat badan Anda hingga batas normal.';
    infoPara[2].innerHTML = 'Cara yang dapat dilakukan untuk menaikkan berat badan anda dengan cepat adalah surplus kalori, artinya asupan kalori lebih banyak daripada kebutuhan kalori sebenarnya. Beberapa sumber makanan tinggi kalori yang bisa dikonsumsi meliputi keju, alpukat, granola, kacang almond, dan daging tanpa lemak. Selain itu, orang yang kekurangan berat badan tetap perlu berolahraga secara rutin yang berfokus untuk meningkatkan massa oto.';
  }
  else if(bmiRes.innerHTML >= 18.5 && bmiRes.innerHTML <= 24.99) {
    infoH3.innerHTML = 'Hasil BMI diantara 18,5 dan 24,9';
    infoH5[0].innerHTML = `Jenis Kelamin: ${getGenders()}`;
    infoH5[1].innerHTML = `Umur: ${age.value}`;
    infoPara[0].innerHTML = 'Anda berada dalam kategori berat badan normal atau ideal.';
    infoPara[1].innerHTML = 'Jika BMI anda berada dalam kategori ini, sebisa mungkin jagalah agar berat badan anda tidak turun maupun naik secara signifikan.';
    infoPara[2].innerHTML = 'Beberapa tips aman untuk mempertahankan berat badan agar tetap ideal diantaranya; menyusun meal plan, bergerak aktif atau olahraga, tetap makan dengan menu berbeda, jangan melewatkan sarapan, istirahat yang cukup, penuhi kebutuhan cairan, hingga kurangi stress.';
  }
  else if(bmiRes.innerHTML >= 25.0 && bmiRes.innerHTML <= 29.9) {
    infoH3.innerHTML = 'Hasil BMI diantara 25 dan 29';
    infoH5[0].innerHTML = `Jenis Kelamin: ${getGenders()}`;
    infoH5[1].innerHTML = `Umur: ${age.value}`;
    infoPara[0].innerHTML = 'Anda berada dalam kategori overweight atau berat badan berlebih.';
    infoPara[1].innerHTML = 'Jika BMI anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
    infoPara[2].innerHTML = 'Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.';
  }
  else if(bmiRes.innerHTML >= 30.0 && bmiRes.innerHTML < Infinity) {
    infoH3.innerHTML = 'Hasil BMI lebih dari 29.9';
    infoH5[0].innerHTML = `Jenis Kelamin: ${getGenders()}`;
    infoH5[1].innerHTML = `Umur: ${age.value}`;
    infoPara[0].innerHTML = 'Anda berada dalam kategori obesitas.';
    infoPara[1].innerHTML = 'Sama seperti kategori overweight (berat badan berlebih), anda dianjurkan untuk menurunkan berat badan.';
    infoPara[2].innerHTML = 'Mengatur pola makan dan olahraga menjadi beberapa solusi yang dianjurkan jika ingin mengatasi keadaan obesitas.';
  }
}






// MEMBUAT MENU POPUP
const popUpBtn = document.querySelector(".popUp");
const popUpBg = document.querySelector(".popUpBg");

popUpBtn.onclick = () => {
  popUpBg.classList.toggle('active');
}