import { kalkulator } from './function/rumus.js';
import readline from 'readline';
// Membuat interface untuk input dari terminal
const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Minta input dari pengguna
// angka pertama
inputUser.question('Masukkan angka pertama: ', angka1 => {
    //angka kedua
    inputUser.question('Masukkan angka kedua: ', angka2 => {
        //operator
        inputUser.question('Masukkan operator: ', operator => {
            console.log(
                `Hasil: ${kalkulator(
                    parseFloat(angka1),
                    parseFloat(angka2),
                    operator
                )}`
            );
            inputUser.close();
        });
    });
});