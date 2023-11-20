const filmes = [
    {
        nome: 'Meu Tio da América',
        img: 'meu-tio-da-america.webp',
    },
    {
        nome: 'Stalker',
        img: 'stalker.jpg',
    },
    {
        nome: 'Playtime',
        img: 'playtime.jpeg',
    },
];

for (var i = 0; i < filmes.length; i++) {
    document.write('<div><img src=' + filmes[i].img + '><p>' + filmes[i].nome + '</p></div>');
}
