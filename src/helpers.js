function filtraOcorrencias(paragrafos){
    return Object.keys(paragrafos).filter(chave => paragrafos[chave] > 1);
}
function montaSaidaArquivo(listaParagrafo){
    let textoFinal = '';
    listaParagrafo.forEach((paragrafos, indice) => {
        const duplicadas = filtraOcorrencias(paragrafos).join(', ');
        textoFinal += `palavras duplicas no parágrafo ${indice + 1}  : ${duplicadas} \n`;
    })
    return textoFinal;
}

export {montaSaidaArquivo}