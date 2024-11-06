export function contaPalavras(texto){
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap(paragrafo => {
        if (!paragrafo) return [];
        return verificarPalavraDuplicadas(paragrafo);
    })
    console.log(contagem);
}
function extraiParagrafos(texto){
    return texto.toLowerCase().split('\n')
}

function limparPlavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificarPalavraDuplicadas(texto){
    const listaPalavras = texto.split(' ');
    const resultado = {};
    //objeto[propriedade] = valor;
    listaPalavras.forEach(palavra => {
        const  palavraLimpa = limparPlavras(palavra);
        resultado[palavraLimpa] = (resultado[palavra] || 0) + 1;
    })
    return resultado;
}
