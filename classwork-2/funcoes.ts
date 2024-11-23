export function somar(arr: Array<number>) {
    let totalSoma = 0;
    arr.forEach((num: number) => totalSoma += num);

    return totalSoma;
};

export function mostrarMaior(array: Array<number>) {

    return Math.max(...array)
};

export function mostrarMenor(array: Array<number>) {
    return Math.min(...array)
};

