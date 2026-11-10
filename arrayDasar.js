let buah = ['apel'];
console.log(buah.length);   // 1

let panjangBaru = buah.push('jeruk');
console.log(panjangBaru);   // 2
console.log(buah);          // ['apel', 'jeruk']

let dibuang = buah.pop();
console.log(dibuang);       // 'jeruk'
console.log(buah.length);   // 1