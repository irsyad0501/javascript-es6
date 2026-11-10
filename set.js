const data = [1, 1, 2, 3];
const unik = new Set(data);

console.log(unik);        // Set(3) {1, 2, 3}
console.log(unik.size);   // 3

unik.add(4);
unik.add(2);              // diabaikan, sudah ada
console.log(unik.has(2)); // true

// Ubah kembali jadi array
const arrayUnik = [...unik];
console.log(arrayUnik);   // [1, 2, 3, 4]