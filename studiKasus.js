const keranjang = [];
const hargaBarang = { apel: 5000, jeruk: 4000, mangga: 7000 };

function tambah(item) {
  if (keranjang.includes(item)) {
    console.log(`${item} sudah ada di keranjang`);
    return;
  }
  keranjang.push(item);
}

tambah('apel');
tambah('jeruk');
tambah('apel'); // ditolak

let totalHarga = 0;
for (let i = 0; i < keranjang.length; i++) {
  totalHarga += hargaBarang[keranjang[i]];
}
console.log(`Jumlah item: ${keranjang.length}, Total: Rp${totalHarga}`);

// Hapus item terakhir
keranjang.pop();

// Absensi: hilangkan nama ganda
const absen = ['Budi', 'Ani', 'Budi', 'Citra', 'Ani'];
console.log([...new Set(absen)]); // ['Budi', 'Ani', 'Citra']