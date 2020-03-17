var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function showMessegen(endereco) {
    return (
        " O usuario mora em " + endereco.cidade +
        "/" + endereco.uf +
        " no bairro " + endereco.bairro +
        " na rua " + endereco.rua +
        " com n° " + endereco.numero)
}

console.log(showMessegen(endereco));