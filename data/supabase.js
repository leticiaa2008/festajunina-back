// =============================================================
// data/database.js — Banco de Dados em Memória
// =============================================================

// ─── Tabela de Categorias ─────────────────────────────────────
let categorias = [
    { id: 1, nome: 'Comidas Típicas' },
    { id: 2, nome: 'Doces Juninos' },
    { id: 3, nome: 'Bebidas' },
    { id: 4, nome: 'Lanches' },
    { id: 5, nome: 'Milho & Derivados' }
];

// ─── Tabela de Produtos ───────────────────────────────────────
let produtos = [

    // --- COMIDAS TÍPICAS (Categoria 1) ---
    {
        id: 1,
        categoriaId: 1,
        nome: 'Canjica',
        descricao: 'Canjica cremosa com leite condensado e canela.',
        preco: 12.00,
        imagem: './images/canjica.webp'
    },
    {
        id: 2,
        categoriaId: 1,
        nome: 'Caldo Verde',
        descricao: 'Caldo quente tradicional com couve e calabresa.',
        preco: 15.00,
        imagem: './images/caldoverde.webp'
    },
    {
        id: 3,
        categoriaId: 1,
        nome: 'Baião de Dois',
        descricao: 'Arroz e feijão temperados com queijo coalho.',
        preco: 18.00,
        imagem: './images/baiao.webp'
    },

    // --- DOCES JUNINOS (Categoria 2) ---
    {
        id: 4,
        categoriaId: 2,
        nome: 'Pé de Moleque',
        descricao: 'Doce crocante de amendoim caramelizado.',
        preco: 8.00,
        imagem: './images/pedemoleque.webp'
    },
    {
        id: 5,
        categoriaId: 2,
        nome: 'Maçã do Amor',
        descricao: 'Maçã coberta com calda crocante vermelha.',
        preco: 10.00,
        imagem: './images/macadoamor.webp'
    },
    {
        id: 6,
        categoriaId: 2,
        nome: 'Pipoca Doce',
        descricao: 'Pipoca caramelizada tradicional de festa junina.',
        preco: 7.00,
        imagem: './images/pipocadoce.webp'
    },

    // --- BEBIDAS (Categoria 3) ---
    {
        id: 7,
        categoriaId: 3,
        nome: 'Quentão',
        descricao: 'Bebida quente típica com gengibre e especiarias.',
        preco: 12.00,
        imagem: './images/quentao.webp'
    },
    {
        id: 8,
        categoriaId: 3,
        nome: 'Vinho Quente',
        descricao: 'Vinho quente aromatizado com frutas e canela.',
        preco: 14.00,
        imagem: './images/vinhoquente.webp'
    },
    {
        id: 9,
        categoriaId: 3,
        nome: 'Suco de Milho',
        descricao: 'Bebida cremosa feita com milho verde.',
        preco: 9.00,
        imagem: './images/sucodemilho.webp'
    },

    // --- LANCHES (Categoria 4) ---
    {
        id: 10,
        categoriaId: 4,
        nome: 'Cachorro-Quente',
        descricao: 'Hot dog completo com molho especial.',
        preco: 13.00,
        imagem: './images/cachorroquente.webp'
    },
    {
        id: 11,
        categoriaId: 4,
        nome: 'Espetinho',
        descricao: 'Espetinho assado na brasa com tempero especial.',
        preco: 16.00,
        imagem: './images/espetinho.webp'
    },
    {
        id: 12,
        categoriaId: 4,
        nome: 'Pastel',
        descricao: 'Pastel crocante recheado de queijo ou carne.',
        preco: 11.00,
        imagem: './images/pastel.webp'
    },

    // --- MILHO & DERIVADOS (Categoria 5) ---
    {
        id: 13,
        categoriaId: 5,
        nome: 'Pamonha',
        descricao: 'Pamonha tradicional feita com milho verde.',
        preco: 10.00,
        imagem: './images/pamonha.webp'
    },
    {
        id: 14,
        categoriaId: 5,
        nome: 'Curau',
        descricao: 'Curau cremoso finalizado com canela.',
        preco: 9.00,
        imagem: './images/curau.webp'
    },
    {
        id: 15,
        categoriaId: 5,
        nome: 'Milho Cozido',
        descricao: 'Espiga de milho cozida com manteiga.',
        preco: 8.00,
        imagem: './images/milhocozido.webp'
    }
];

// ─── Exportação dos dados ─────────────────────────────────────
module.exports = { categorias, produtos };