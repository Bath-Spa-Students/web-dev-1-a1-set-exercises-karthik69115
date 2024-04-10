function calculateTotal() {
    // Get the values of cost and liters input fields
    
    var costPerLiter = parseFloat(document.getElementById('cost').value);
    var litersPurchased = parseFloat(document.getElementById('liters').value);
    
    // Calculate total cost
    var totalCost = costPerLiter * litersPurchased;
    
    // Display the total cost
    document.getElementById('totalcost').innerHTML = "Total Cost: $" + totalCost.toFixed(2);
  }