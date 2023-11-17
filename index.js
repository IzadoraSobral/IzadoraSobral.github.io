var listaFilmes = [
    "https://leiturafilmica.com.br/wp-content/uploads/2020/10/meu-tio-da-america-poster.jpg",
    'https://www.circuitospcine.com.br/site/wp-content/uploads/2019/06/stalker.jpg',
    'https://assets.mubicdn.net/images/notebook/post_images/34295/images-w1400.jpeg?1635384771',
    'https://upload.wikimedia.org/wikipedia/pt/1/1d/Harry_Potter_Pedra_Filosofal_2001.jpg',
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/79ED0C68B718692E371392FD5E57336B92B9BAE2CB91F519119CB5910C6C114C/scale?width=506&aspectRatio=2.00&format=jpeg'
  ];
  
  var nomesFilmes = [
    "Meu Tio da América",
    "Stalker",
    "Playtime",
    "Harry Potter e a Pedra Filosofal",
    "O Poderoso Chefão II"
  ];
  
  var filmesAdicionados = {};
  
  for (var i = 0; i < listaFilmes.length; i++) {
    if (!filmesAdicionados[nomesFilmes[i]]) {
      document.write('<div><img src=' + listaFilmes[i] + '><p>' + nomesFilmes[i] + '</p></div>');
  
      filmesAdicionados[nomesFilmes[i]] = true;
    }
  }
  