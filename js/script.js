//Untuk menghandle proses penghitungan berat badan ideal dan menampilkan statusnya.
function handleSubmit(event) {
    event.preventDefault();

    // Mengambil nilai gender, umur, berat, dan tinggi dari input form.
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var age = parseFloat(document.querySelector('.input-umur').value);
    var weight = parseFloat(document.querySelector('.input-berat').value);
    var height = parseFloat(document.querySelector('.input-tinggi').value);
    
    // Menghitung berat badan ideal berdasarkan gender, tinggi, dan umur.
    var idealWeight = calculateIdealWeight(gender, height, age);
    var weightDifference = weight - idealWeight;
    var weightStatus = getWeightStatus(weightDifference);

    // Menampilkan hasil perhitungan berat badan ideal dan statusnya pada halaman.    
    document.querySelector('#berat-ideal').textContent = idealWeight.toFixed(2) + " kg";
    document.querySelector('#perbedaan-berat').textContent = weightDifference.toFixed(2) + " kg";
    document.querySelector('#status-berat').textContent = weightStatus;
    if (weightStatus === "Normal") {
        document.querySelector('#status-berat').textContent = "Anda memiliki berat badan ideal";
        document.querySelector('#status-berat').style.color = "#00ff00";
    } else if (weightStatus === "Gemuk") {
        document.querySelector('#status-berat').textContent = "Anda memiliki berat badan berlebih";
        document.querySelector('#status-berat').style.color = "#d30000";
    } else if (weightStatus === "Kurus") {
        document.querySelector('#status-berat').textContent = "Anda kekurangan berat badan";
        document.querySelector('#status-berat').style.color = "#ffc107";
    }
    // Menampilkan penjelasan berdasarkan status berat badan.
    document.querySelector('#penjelasan').textContent = weightStatus;
    if (weightStatus === "Normal") {
        document.querySelector('#penjelasan').textContent = "Memiliki berat badan ideal memberikan banyak manfaat antara lain Menurunkan risiko diabetes ,Menurunkan risiko kanker payudara, Meningkatkan kesehatan jantung, Meningkatkan kesuburan, Tidur lebih nyenyak, dan Umur lebih panjang. Maka dari itu jagalah berat badan anda dengan terus menerapkan gaya hidup sehat";
    } else if (weightStatus === "Gemuk") {
        document.querySelector('#penjelasan').textContent = "Kelebihan berat badan dapat meningkatkan berbagai risiko penyakit tertentu yang juga dipicu oleh asupan makanan yang berlebihan, kurangnya aktivitas fisik, kerentanan genetik, gangguan endokrin, obat-obatan, hingga penyakit psikiatri. Maka dari itu disarankan untuk menjaga pola makan yang sehat dan berolahraga secara teratur";
    } else if (weightStatus === "Kurus") {
        document.querySelector('#penjelasan').textContent = "Kekurangan berat badan jelas tidak baik untuk kesehatan. Hal ini dapat berkontribusi pada sistem kekebalan tubuh yang lemah, tulang yang rapuh dan rasa lelah. Selain itu, kekurangan berat badan juga berkaitan dengan penurunan fungsi kekebalan tubuh dan peningkatan risiko komplikasi dari operasi.";
    }
}

//Fungsi untuk menghapus input dan output secara keseluruhan ketika tombol reset ditekan
function handleReset() {
    document.querySelector('input[name="gender"]').checked = false;
    document.querySelector('.input-umur').value = '';
    document.querySelector('.input-berat').value = '';
    document.querySelector('.input-tinggi').value = '';
    document.querySelector('#berat-ideal').textContent = "";
    document.querySelector('#perbedaan-berat').textContent = "";
    document.querySelector('#status-berat').textContent = "";
    document.querySelector('#penjelasan').textContent = "";
    document.querySelector('#status-berat').style.color = "";
}

//Fungsi untuk mencari berat badan ideal jika diketahui jenis kelamin,tinggi dan juga umur
function calculateIdealWeight(gender, height, age) {
    var idealWeight;
    if (gender === "laki-laki") {
        idealWeight = (height - 100) - ((height - 100) * 0.1);
        if (age >= 30){
            idealWeight = idealWeight + 0.5
        }
    } else if (gender === "perempuan") {
        idealWeight = (height - 100) - ((height - 100) * 0.15);
        if (age >= 30) {
            idealWeight = idealWeight - 0.5;
        }
    }
    return idealWeight;
}

//Mengambil status berat badan dengan menghitung selisih dari berat badan ideal dan berat badan aktual
function getWeightStatus(weightDifference) {
    var weightStatus;
    if (weightDifference < -2) {
        weightStatus = "Kurus";
    } else if (weightDifference >= -2 && weightDifference <= 2) {
        weightStatus = "Normal";
    } else if (weightDifference > 2) {
        weightStatus = "Gemuk";
    }
    return weightStatus;
}
