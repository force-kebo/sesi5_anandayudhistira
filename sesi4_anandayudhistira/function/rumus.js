export function kalkulator(angka1, angka2, operator) {
    switch (operator) {
        //penjumlahan
        case "+":
            return angka1 + angka2;
        //pengurangan
        case "-":
            return angka1 - angka2;
        //perkalian
        case "*":
            return angka1 * angka2;
        //pembagian
        case "/":
            return angka1 / angka2;
        default:
            return "Operator tidak valid!";
    }
}
