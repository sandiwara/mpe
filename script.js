const pricePerSquareMeter = 3000000; // Harga per m²

function calculateCost() {
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);

  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    document.getElementById('result').textContent = "Harap masukkan panjang dan lebar yang valid!";
    return;
  }

  const area = length * width; // Menghitung luas
  const totalCost = area * pricePerSquareMeter; // Menghitung total biaya

  // Format angka ke rupiah
  const formattedCost = new Intl.NumberFormat('id-ID', { 
    style: 'currency', currency: 'IDR' 
  }).format(totalCost);

  document.getElementById('result').textContent = `Total Biaya: ${formattedCost}`;
}