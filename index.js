const filmes=[
    {
        nome:'Meu Tio da América',
        img:"meu-tio-da-america.webp",
    },  {
        nome:'Stalker',
        img:"stalker.jpg",
    }, 
]
var listaFilmes = [
    "meu-tio-da-america.webp",
    'stalker.jpg',
    'playtime.jpeg',
    'harry-potter.jpg',
    'o-poderoso-chefao-ii.jpg',
];

var nomesFilmes = [
    "Meu Tio da América",
    "Stalker",
    "Playtime",
    "Harry Potter e a Pedra Filosofal",
    "O Poderoso Chefão II"
];

var filmesAdicionados = {};

for (var i = 0; i < filmes.length; i++) {
 document.write('<div><img src=' + filmes[i].img + '><p>' + filmes[i].nome + '</p></div>');

    
    
}
