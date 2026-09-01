const Cadastro = require("../src/provaCadastro");

test("deve cadastrar um produto", () => {
    const cadastro = new Cadastro();

    const resultado = cadastro.cadastrar("Teclado", "001", "Informática");

    expect(resultado).toBe(true);
});

test("deve buscar produto pelo código", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");

    const resultado = cadastro.buscarPorCodigo("001");

    expect(resultado.nome).toBe("Teclado");
});

test("deve buscar produtos pelo nome", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado Gamer", "001", "Informática");

    const resultado = cadastro.buscarPorNome("teclado");

    expect(resultado.length).toBe(1);
});

test("deve verificar se o código existe", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");

    const resultado = cadastro.codigoExiste("001");

    expect(resultado).toBe(true);
});

test("deve listar todos os produtos", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");
    cadastro.cadastrar("Mouse", "002", "Informática");

    const resultado = cadastro.listarTodos();

    expect(resultado.length).toBe(2);
});

test("deve retornar a quantidade de produtos cadastrados", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");
    cadastro.cadastrar("Mouse", "002", "Informática");

    const resultado = cadastro.quantidadeCadastrada();

    expect(resultado).toBe(2);
});

test("deve remover um produto pelo código", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");

    const resultado = cadastro.remover("001");

    expect(resultado).toBe(true);
});

test("deve alterar o nome de um produto", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");

    const resultado = cadastro.alterarNome("001", "Teclado Gamer");

    expect(resultado).toBe(true);
});

test("deve listar produtos de uma categoria", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");
    cadastro.cadastrar("Cadeira", "002", "Móveis");

    const resultado = cadastro.listarPorCategoria("Informática");

    expect(resultado.length).toBe(1);
});

test("deve verificar se o cadastro está vazio", () => {
    const cadastro = new Cadastro();

    const resultado = cadastro.estaVazio();

    expect(resultado).toBe(true);
});

test("deve limpar o cadastro", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");

    const resultado = cadastro.limparCadastro();

    expect(resultado).toBe(true);
});

test("deve verificar se o nome existe", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");

    const resultado = cadastro.nomeExiste("Teclado");

    expect(resultado).toBe(true);
});

test("deve cadastrar somente se o código estiver disponível", () => {
    const cadastro = new Cadastro();

    const resultado = cadastro.cadastrarSeDisponivel(
        "Teclado",
        "001",
        "Informática"
    );

    expect(resultado).toBe(true);
});

test("deve retornar o primeiro produto cadastrado", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");
    cadastro.cadastrar("Mouse", "002", "Informática");

    const resultado = cadastro.primeiroCadastro();

    expect(resultado.nome).toBe("Teclado");
});

test("deve retornar o último produto cadastrado", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");
    cadastro.cadastrar("Mouse", "002", "Informática");

    const resultado = cadastro.ultimoCadastro();

    expect(resultado.nome).toBe("Mouse");
});

test("deve contar produtos de uma categoria", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");
    cadastro.cadastrar("Mouse", "002", "Informática");
    cadastro.cadastrar("Cadeira", "003", "Móveis");

    const resultado = cadastro.quantidadePorCategoria("Informática");

    expect(resultado).toBe(2);
});

test("deve alterar a categoria de um produto", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");

    const resultado = cadastro.alterarCategoria("001", "Eletrônicos");

    expect(resultado).toBe(true);
});

test("deve verificar se a categoria existe", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");

    const resultado = cadastro.categoriaExiste("Informática");

    expect(resultado).toBe(true);
});

test("deve retornar os nomes dos produtos", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");
    cadastro.cadastrar("Mouse", "002", "Informática");

    const resultado = cadastro.listarNomes();

    expect(resultado).toEqual(["Teclado", "Mouse"]);
});

test("deve retornar os códigos dos produtos", () => {
    const cadastro = new Cadastro();

    cadastro.cadastrar("Teclado", "001", "Informática");
    cadastro.cadastrar("Mouse", "002", "Informática");

    const resultado = cadastro.listarCodigos();

    expect(resultado).toEqual(["001", "002"]);
});