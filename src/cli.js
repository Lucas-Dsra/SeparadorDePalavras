import fs from 'fs';
import path from 'path';
import {Command} from "commander";
import tratarErros from './erros/funcoes-erro.js'
import {contaPalavras} from "./index.js";
import {montaSaidaArquivo} from "./helpers.js";
import chalk from "chalk";

const program = new Command();

program
    .version("0.0.1")
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d, --destino <string>', 'Caminho da pasta onde salva o arquivo do resultado')
    .action((options) => {
        const { texto, destino } = options;

        if(!texto || !destino) {
            console.error(chalk.red('Erro por favor inserir caminho de origem e destino'));
            program.help();
            return;
        }
        const caminhoTexto = path.resolve(texto);
        const destinoTexto = path.resolve(destino);

        try{
            processarArquivo(caminhoTexto, destinoTexto);
            console.log(chalk.green('Texto processado com sucesso'));
        }catch (erro){
            console.log('Erro no processamento')
        }
    })

program.parse();

const caminhoArquivo = process.argv;


function processarArquivo(texto, destino) {
    fs.readFile(texto, 'utf8', (erro, texto) => {
        try {
            if (erro) throw erro;
            const resultado = contaPalavras(texto);
            criarESalvaArquivo(resultado, destino);
        } catch (erro) {
            tratarErros(erro);
        }
    })
}


async function  criarESalvaArquivo(listaPlavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPlavras);
    try{
     await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log(chalk.green("Arquivo Criado"))
    }catch(error){
        throw error;
    } }

// function  criarESalvaArquivo(listaPlavras, endereco){
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify({listaPlavras});
//     fs.promises.writeFile(arquivoNovo, textoPalavras)
//     .then(() => console.log('Arquivo criado com sucesso!'))
//     .catch((error) => console.log("error"))
//     .finally(() => console.log("processo Finalizado"))
// }

