const countVoucher = (voucher, money) => {
  let discount;
  let minimalPayment;
  let moneyChanges;
  let payment;
  if (voucher === "DumbwaysMantap") {
    minimalPayment = 80000;
    //pengecekan uang kurang
    if (money < minimalPayment) {
      console.log("Anda tidak bisa menggunakan Voucher ini karena");
      console.log(`Minimal Bayar untuk Voucher DumbWaysJos adalah ${minimalPayment}`);
    } else {
      // pengecekan diskon
      discount = (money / 100) * 30;
      if (discount > 40000) {
        discount = 40000;
      }

      payment = money - discount;
      moneyChanges = money - payment;

      console.log(`Anda memasukan vocher ${voucher} dan uang anda ${money}`);
      console.log(`Anda Mendapatkan Diskon ${discount}`);
      console.log(`Uang yang harus dibayar : ${payment}`);
      console.log(`kembalian ${moneyChanges}`);
    }
  } else if (voucher === "DumbwaysJos") {
    minimalPayment = 50000;
    if (money < minimalPayment) {
      console.log("Anda tidak bisa menggunakan Voucher ini karena");
      console.log(`Minimal Bayar untuk Voucher DumbWaysJos adalah ${minimalPayment}`);
    } else {
      (discount = (money / 100) * 20), 1;
      if (discount > 20000) {
        discount = 20000;
      }
      payment = money - discount;
      moneyChanges = money - payment;

      console.log(`Anda memasukan vocher ${voucher} dan uang anda ${money}`);
      console.log(`Anda Mendapatkan Diskon ${discount}`);
      console.log(`Uang yang harus dibayar : ${payment}`);
      console.log(`kembalian ${moneyChanges}`);
    }
  }
};

countVoucher("DumbwaysJos", 100000);
