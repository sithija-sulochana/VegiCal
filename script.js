document.addEventListener('DOMContentLoaded', function () {
  const totalBillElement = document.getElementById('total-bill');

  // Data for vegetables
  const vegData = {
    bonchi: { price: 480, weightInputId: 'weight-bonchi' },
    carrot: { price: 240, weightInputId: 'weight-carrot' },
    leaks: { price: 360, weightInputId: 'weight-leaks' },
    guva: { price: 240, weightInputId: 'weight-guva' },
    bandakka: { price: 200, weightInputId: 'weight-bandakka' },
    dabala: { price: 220, weightInputId: 'weight-dabala' },
    kakiri: { price: 200, weightInputId: 'weight-kakiri' },
    thalanabatu: { price: 280, weightInputId: 'weight-thalanabatu' },
    wambatu: { price: 440, weightInputId: 'weight-wambatu' },
    pipinya: { price: 240, weightInputId: 'weight-pip' },
    pathola: { price: 300, weightInputId: 'weight-pathola' },
    alukesel: { price: 200, weightInputId: 'weight-alukesel' },
    amu: { price: 1400, weightInputId: 'weight-amu' },
    takkali: { price: 500, weightInputId: 'weight-tomato' },
    lemo: { price: 600, weightInputId: 'weight-lemo' },
    ginger: { price: 1300, weightInputId: 'weight-ginger' },
    ma: { price: 500, weightInputId: 'weight-ma' },
  };

  // Update total price
  function updateTotal() {
    let totalPrice = 0;

    // Iterate through all vegetables
    for (const vegKey in vegData) {
      const veg = vegData[vegKey];
      const weightInput = document.getElementById(veg.weightInputId);

      if (weightInput) {
        const weight = parseFloat(weightInput.value) || 0; // Default to 0 if empty
        totalPrice += (weight / 1000) * veg.price; // Calculate price for weight
      }
    }

    totalBillElement.innerHTML = `Total Bill: Rs ${totalPrice.toFixed(2)}`;
  }

  // Add event listeners for all input fields
  for (const vegKey in vegData) {
    const veg = vegData[vegKey];
    const weightInput = document.getElementById(veg.weightInputId);

    if (weightInput) {
      weightInput.addEventListener('input', updateTotal);
    }
  }
});
