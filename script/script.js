function handleSubmit(event) {
    event.preventDefault();

    var gender = document.querySelector('input[name="gender"]:checked').value;
    var weight = parseFloat(document.querySelector('.input-berat').value);
    var height = parseFloat(document.querySelector('.input-tinggi').value);
    
    var idealWeight = calculateIdealWeight(gender, height);
    var weightDifference = weight - idealWeight;
    var weightStatus = getWeightStatus(weightDifference);

    document.querySelector('#berat-ideal').textContent = idealWeight.toFixed(2) + " kg";
    document.querySelector('#perbedaan-berat').textContent = weightDifference.toFixed(2) + " kg";
    document.querySelector('#status-berat').textContent = weightStatus;
    if (weightStatus === "Normal") {
        document.querySelector('#status-berat').style.color = "#00ff00";
    } else if (weightStatus === "Gemuk") {
        document.querySelector('#status-berat').style.color = "#d30000";
    } else if (weightStatus === "Kurus") {
        document.querySelector('#status-berat').style.color = "#ffc107";
    }
}

function handleReset() {
    document.querySelector('input[name="gender"]').checked = false;
    document.querySelector('.input-berat').value = '';
    document.querySelector('.input-tinggi').value = '';
    document.querySelector('#berat-ideal').textContent = "";
    document.querySelector('#perbedaan-berat').textContent = "";
    document.querySelector('#status-berat').textContent = "";
    document.querySelector('#status-berat').style.color = "";
}

function calculateIdealWeight(gender, height) {
    var idealWeight;
    if (gender === "laki-laki") {
        idealWeight = (height - 100) - ((height - 100) * 0.1);
    } else if (gender === "perempuan") {
        idealWeight = (height - 100) - ((height - 100) * 0.15);
    }
    return idealWeight;
}

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