import fs from 'fs';
import tratarErros from './erros/funcoes-erro.js'
import {contaPalavras} from "./index.js";

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf8', (erro, texto) => {
    try {
        if (erro) throw erro;
         contaPalavras(texto);
    } catch (erro) {
        tratarErros(erro);
    }
})