
document.addEventListener('DOMContentLoaded', function() {
    const totalBillElement = document.getElementById('total-bill');
    
    const vegData = {
      bonchi: { price: 480, weightInputId: 'weight-carrot' },
      carrot: { price: 240, weightInputId: 'weight-tomato' },
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
      ma: { price: 500, weightInputId: 'weight-ma' }
    };
  
    function updateTotal() {
      let totalPrice = 0;
      
      // Iterate over the vegetable data
      for (const vegKey in vegData) {
        const veg = vegData[vegKey];
        const weight = document.getElementById(veg.weightInputId).value;
        const pricePerKg = veg.price;
        
        if (weight) {
          totalPrice += (parseFloat(weight) / 1000) * pricePerKg;
        }
      }
      
      totalBillElement.innerHTML = `<h2>Total Bill</h2><p>Rs ${totalPrice.toFixed(2)}</p>`;
    }
  
    // Event listener to update total when weight is changed
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
      input.addEventListener('input', updateTotal());
    });
  });
  