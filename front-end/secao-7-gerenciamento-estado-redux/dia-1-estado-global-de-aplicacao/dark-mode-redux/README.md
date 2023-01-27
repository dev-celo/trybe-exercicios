# Dark Mode

<h3>Vamos fazer uma aplicação que utiliza um reducer para controlar o tema (light mode e dark mode) e para alterar o status (online e offline). Um botão deverá mudar o tema e outro botão deverá mudar o status. O código inicial está disponibilizado a seguir:</h3>

- [x] Crie um reducer com os estados iniciais.

- [x] Crie uma store com o reducer criado.

- [x] Adicione um case dentro do switch do reducer para alterar os estados theme e status. O case do estado theme deve alterná-lo entre ‘light’ e ‘dark’. O case do estado status deve alterná-lo entre ‘online’ e ‘offline’.

- [x] Faça o dispatch de cada uma das actions ao clicar nos respectivos botões.

- [x] Adicione um store.subscribe() para atualizar as seguintes informações na página:

<ul>
  <li>
    Se o tema for light, o body deverá possuir uma cor de fundo escura e uma letra clara.
  </li>
  <li>
    Se o tema for dark, deverá possuir uma cor de fundo clara e uma letra escura.
  </li>
  <li>
    Se o status for online, o #status deverá possuir o texto Online.
  </li>
  <li>
    Se o status for offline, o #status deverá possuir o texto Offline.
  </li>
  <li>
    Não se esqueça também de modificar o texto dos botões para refletirem exatamente o que eles fazem.
  </li>
</ul>
