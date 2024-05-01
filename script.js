function calculatePrice() {
    const mandarinePricePerKg = 50; // prețul pe kilogram de mandarine
    const weightInput = document.getElementById('weight');
    const weight = parseFloat(weightInput.value);

    if (!isNaN(weight) && weight > 0) {
        const totalPrice = mandarinePricePerKg * weight;
        document.getElementById('result').innerText = `Prețul pentru ${weight} kg de mandarine este ${totalPrice} lei.`;
    } else {
        document.getElementById('result').innerText = 'Vă rugăm să introduceți o greutate validă.';
    }
}
