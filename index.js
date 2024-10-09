const express = require("express"); // Importa o módulo express
const app = express(); // Inicializa o express

// Rota inicial
app.get("/", function (req, res) {
    res.send(`
        <html>
            <head>
                <title>Bem-vindo</title>
            </head>
            <body>
                <h1>Bem-vindo ao meu site!</h1>
                <p>Esta é a página inicial.</p>
            </body>
        </html>
    `);
});

// Rota sobre serviços
app.get("/servicos", function (req, res) {
    res.send(`
        <html>
            <head>
                <title>Serviços</title>
            </head>
            <body>
                <h1>Nossos Serviços</h1>
                <ul>
                    <li>Desenvolvimento Web</li>
                    <li>Consultoria de TI</li>
                    <li>Suporte Técnico</li>
                </ul>
            </body>
        </html>
    `);
});

// Rota sobre contato
app.get("/contato", function (req, res) {
    res.send(`
        <html>
            <head>
                <title>Contato</title>
            </head>
            <body>
                <h1>Fale Conosco</h1>
                <p>Envie-nos uma mensagem para contato@meusite.com</p>
            </body>
        </html>
    `);
});

// Rota com parâmetro opcional (exemplo de consulta por nome)
app.get("/consulta/:nome?", function (req, res) {
    const nome = req.params.nome;
    if (nome) {
        res.send(`
            <html>
                <head>
                    <title>Consulta</title>
                </head>
                <body>
                    <h1>Resultado da consulta</h1>
                    <p>Nome consultado: ${nome}</p>
                </body>
            </html>
        `);
    } else {
        res.send(`
            <html>
                <head>
                    <title>Consulta</title>
                </head>
                <body>
                    <h1>Resultado da consulta</h1>
                    <p>Nenhum nome informado.</p>
                </body>
            </html>
        `);
    }
});

// Iniciando o servidor
app.listen(process.env.PORT ?? 3000, function (erro) {
    if (erro) {
        console.log("Erro ao iniciar o servidor.");
    } else {
        console.log("Servidor rodando na porta 3000.");
    }
});