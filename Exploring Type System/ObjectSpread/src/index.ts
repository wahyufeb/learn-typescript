/**
 * Object Spread
 * ----------------------------
 * 1. Spread Presedence
 * 2. Spread with Arrays
 * ----------------------------
 */

const name1: object = {
  firstName: "June Wanwimol",
  lastName: "Jaenasavamethee",
};

const secondName: object = { ...name1 };
// console.log(secondName);
// Hasil :  { firstName: 'June Wanwimol', lastName: 'Jaenasavamethee' }

// (1) Spread Presedence
// Bagaimana jika ada properti yang sama? (properti id sama)
// Jika ada yang sama maka akan mengambil nilai dari properti yang terakhir.
const student: object = {
  id: 1,
  name: "Puimek Napasorn",
  major: "CS",
};

const university: object = {
  id: 10,
  name: "Winamore University",
  address: "Pattaya",
};

const data = { ...student, ...university };
// console.log(data);
// Hasil :
// {
//   id: 10,
//   name: 'Winamore University',
//   major: 'CS',
//   address: 'Pattaya'
// }

// (2) Spread with Arrays
const firstArr: Array<number> = [1, 5, 10];
const secondArr: number[] = [15, 20, 25];

const unionArr = [...firstArr, ...secondArr];
// console.log(unionArr);
// Hasil : [ 1, 5, 10, 15, 20, 25 ]

// Menyalin sebuah array of object dan mengatur posisinya
// Salin array of object dan tempatkan di urutan ke-2

const obj1: object[] = [{ id: 1, name: "Rinrada" }];
const obj3: object[] = [{ id: 3, name: "Kwanrudee" }];

const uniArr: object[] = [...obj1, { id: 2, name: "Ploy" }, ...obj3];
console.log(uniArr);

// Hasil :
// [
//   { id: 1, name: 'Rinrada' },
//   { id: 2, name: 'Ploy' },
//   { id: 3, name: 'Kwanrudee' }
// ]
