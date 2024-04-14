




function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;

    const exchangeRate = {
        USD: 36.65,
        EUR: 39.11,
        JPY: 0.24,
        CNY: 5.06,
       
    };

    if (amount <= 0) {
        alert('จำนวนเงินต้องมากกว่า 0 บาท');
        return;
    }

    if (!exchangeRate[currency]) {
        alert('สกุลเงินไม่รองรับ');
        return;
    }

    const thaiBaht = amount * exchangeRate[currency];
    document.getElementById('result').innerHTML = `${thaiBaht.toFixed(2)} บาท`;
}

function opemPopup() {
    document.getElementById('popup').style.display = 'block';
  }

function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  