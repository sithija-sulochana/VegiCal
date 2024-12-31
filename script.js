document.addEventListener('DOMContentLoaded', function () {
  const totalBillElement = document.getElementById('total-bill');
  const givpElement = document.getElementById('give-price'); // Fixed query selector

  // Data for vegetables
  const vegData = { bonchi: { price: 480, weightInputId: 'weight-bonchi' }, carrot: { price: 240, weightInputId: 'weight-carrot' }, leaks: { price: 360, weightInputId: 'weight-leaks' }, guva: { price: 240, weightInputId: 'weight-guva' }, bandakka: { price: 200, weightInputId: 'weight-bandakka' }, dabala: { price: 220, weightInputId: 'weight-dabala' }, kakiri: { price: 200, weightInputId: 'weight-kakiri' }, thalanabatu: { price: 280, weightInputId: 'weight-thalanabatu' }, wambatu: { price: 440, weightInputId: 'weight-wambatu' }, pipinya: { price: 240, weightInputId: 'weight-pip' }, pathola: { price: 300, weightInputId: 'weight-pathola' }, alukesel: { price: 200, weightInputId: 'weight-alukesel' }, amu: { price: 1400, weightInputId: 'weight-amu' }, takkali: { price: 500, weightInputId: 'weight-tomato' }, lemo: { price: 600, weightInputId: 'weight-lemo' }, ginger: { price: 1300, weightInputId: 'weight-ginger' }, ma: { price: 500, weightInputId: 'weight-ma' }, };

  // Update total price function
  function updateTotal() {
    let totalPrice = 0;

    for (const vegKey in vegData) {
      const veg = vegData[vegKey];
      const weightInput = document.getElementById(veg.weightInputId);

      if (weightInput) {
        const weight = parseFloat(weightInput.value) || 0; // Default to 0 if empty
        totalPrice += (weight / 1000) * veg.price; // Calculate price for weight
      }
    }

    totalBillElement.innerHTML = `Total Bill: Rs ${totalPrice.toFixed(2)}`;
    return totalPrice;
  }

  // Add price functionality
  function addPrice() {
    const newPriceInput = document.querySelector('#new-price');
    const addButton = document.querySelector('#plus');

    addButton.addEventListener('click', function () {
      const extraPrice = parseFloat(newPriceInput.value) || 0;
      if (!isNaN(extraPrice)) {
        let totalPrice = updateTotal();
        totalPrice += extraPrice;
        totalBillElement.innerHTML = `Total Bill: Rs ${totalPrice.toFixed(2)}`;
        newPriceInput.value = '';
      } else {
        alert('Please enter a valid number.');
      }
    });
  }

  // Received amount functionality
  function receivedAmount() {
    const receivedAmountInput = document.querySelector('#amount-received');
    const addBtn = document.querySelector('#amount-price');

    addBtn.addEventListener('click', function () {
      const receivedAmount = parseFloat(receivedAmountInput.value) || 0; // Get received amount
      const totalPrice = updateTotal(); // Get the current total
      const balance = receivedAmount - totalPrice; // Calculate balance or owed amount

      if (balance >= 0) {
        givpElement.innerHTML = `Give her/him: Rs ${balance.toFixed(2)}`;
      } else {
        givpElement.innerHTML = `Amount still owed: Rs ${Math.abs(balance).toFixed(2)}`;
      }
    });
  }

  // Add event listeners for all vegetable weight inputs
  for (const vegKey in vegData) {
    const veg = vegData[vegKey];
    const weightInput = document.getElementById(veg.weightInputId);

    if (weightInput) {
      weightInput.addEventListener('input', updateTotal);
    }
  }

  // Initialize the add price and received amount functionality
  addPrice();
  receivedAmount();
});
