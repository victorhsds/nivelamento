
function contarVogais(palavra: string): number {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return palavra.toLowerCase().split('').filter(char => vogais.includes(char)).length;
}

const palavra = "carioca";
const vogalCount = contarVogais(palavra);
console.log(`A palavra "${palavra}" possui ${vogalCount} vogais.`);
function simulateFormInput(inputPalavra: string) {
    const vogalCount = contarVogais(inputPalavra);
    console.log(` A palavra "${inputPalavra}" possui ${vogalCount} vogais.`);
}

simulateFormInput("carioca");
