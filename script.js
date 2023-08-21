function toogleMode(){
  const html = document.documentElement

/*   if(html.classList.contains('light')) { // se o html contém a class 'light' passa à frente no código
    html.classList.remove('light') //remove a class 'light'
  }else{ // se não tiver a class light
    html.classList.add('light') //adiciona a class 'light'
  } */

  // de forma mais simplificada
  html.classList.toggle('light') // adicionamos um toggle à class 'light' , não não tiver a class , adiciona , se tiver remove
}