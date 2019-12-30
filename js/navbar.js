let nav='<nav><ul>\n' +
  '  <li class="nav-item">\n' +
  '    <a class="nav-link active" href="index.html">HOME</a>\n' +
  '  </li>\n' +
  '  <li class="nav-item dropdown">\n' +
  '    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" type=button aria-haspopup="true" aria-expanded="true">QUIZ</a>\n' +
  '    <div class="dropdown-menu">\n' +
  '      <a class="dropdown-item" type=button href="quiz.html">Wejscie</a>\n' +
  '      <a class="dropdown-item" type=button href="#">Another action</a>\n' +
  '      <a class="dropdown-item" type=button href="#">Something else here</a>\n' +
  '      <div class="dropdown-divider"></div>\n' +
  '      <a class="dropdown-item" type=button href="#">Separated link</a>\n' +
  '    </div>\n' +
  '  </li>\n' +
  '  <li class="nav-item">\n' +
  '    <a class="nav-link" href="kontakt.html">KONTAKT</a>\n' +
  '  </li>\n' +
  '  <li class="nav-item">\n' +
  '    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">BLOG</a>\n' +
  '  </li>\n' +
  '</ul>\n' +

  '</nav>'


let element = document.querySelector('.navbar');
element.innerHTML = nav;



