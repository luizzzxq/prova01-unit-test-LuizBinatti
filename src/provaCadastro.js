class Cadastro {

    constructor() {
        this.produtos = [];
    }

    // 1. Cadastra um produto
    cadastrar(nome, codigo, categoria) {
        this.produtos.push({
            nome,
            codigo,
            categoria
        });

        return true;
    }

    // 2. Busca produto pelo código
    buscarPorCodigo(codigo) {
        return this.produtos.find(
            produto => produto.codigo === codigo
        ) || null;
    }

    // 3. Busca produtos pelo nome
    buscarPorNome(nome) {
        return this.produtos.filter(
            produto => produto.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    // 4. Verifica se um código já está cadastrado
    codigoExiste(codigo) {
        return this.produtos.some(
            produto => produto.codigo === codigo
        );
    }

    // 5. Retorna todos os produtos
    listarTodos() {
        return this.produtos;
    }

    // 6. Retorna quantidade de produtos cadastrados
    quantidadeCadastrada() {
        return this.produtos.length;
    }

    // 7. Remove um produto pelo código
    remover(codigo) {
        const indice = this.produtos.findIndex(
            produto => produto.codigo === codigo
        );

        if (indice === -1) {
            return false;
        }

        this.produtos.splice(indice, 1);
        return true;
    }

    // 8. Atualiza o nome de um produto
    alterarNome(codigo, novoNome) {
        const produto = this.buscarPorCodigo(codigo);

        if (!produto) {
            return false;
        }

        produto.nome = novoNome;
        return true;
    }

    // 9. Lista produtos de uma categoria
    listarPorCategoria(categoria) {
        return this.produtos.filter(
            produto => produto.categoria === categoria
        );
    }

    // 10. Verifica se o cadastro está vazio
    estaVazio() {
        return this.produtos.length === 0;
    }

    // 11. Remove todos os produtos
    limparCadastro() {
        this.produtos = [];
        return true;
    }

    // 12. Verifica se o nome já está cadastrado
    nomeExiste(nome) {
        return this.produtos.some(
            produto => produto.nome.toLowerCase() === nome.toLowerCase()
        );
    }

    // 13. Cadastra somente se o código ainda não existir
    cadastrarSeDisponivel(nome, codigo, categoria) {
        if (this.codigoExiste(codigo)) {
            return false;
        }

        return this.cadastrar(nome, codigo, categoria);
    }

    // 14. Retorna o primeiro produto cadastrado
    primeiroCadastro() {
        return this.produtos.length > 0
            ? this.produtos[0]
            : null;
    }

    // 15. Retorna o último produto cadastrado
    ultimoCadastro() {
        return this.produtos.length > 0
            ? this.produtos[this.produtos.length - 1]
            : null;
    }

    // 16. Conta quantos produtos existem em uma categoria
    quantidadePorCategoria(categoria) {
        return this.produtos.filter(
            produto => produto.categoria === categoria
        ).length;
    }

    // 17. Altera a categoria de um produto
    alterarCategoria(codigo, novaCategoria) {
        const produto = this.buscarPorCodigo(codigo);

        if (!produto) {
            return false;
        }

        produto.categoria = novaCategoria;
        return true;
    }

    // 18. Verifica se existem produtos de determinada categoria
    categoriaExiste(categoria) {
        return this.produtos.some(
            produto => produto.categoria === categoria
        );
    }

    // 19. Retorna os nomes dos produtos cadastrados
    listarNomes() {
        return this.produtos.map(
            produto => produto.nome
        );
    }

    // 20. Retorna os  códigos dos produtos cadastrados
    listarCodigos() {
        return this.produtos.map(
            produto => produto.codigo
        );
    }
}

module.exports = Cadastro;