var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];
//O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

function saida(usuarios) {



    for(let user of usuarios){
        console.log("O " + user.nome + " possui as habilidade " + user.habilidades);
    }
}

saida(usuarios);