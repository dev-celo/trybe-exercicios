const dogButton = document.querySelector('#dog');
const catButton = document.querySelector('#cat');
const surpriseButton = document.querySelector('#surprise');
const img = document.querySelector('img');

dogButton.addEventListener('click', async () => {
  let router;
  const randomDog = await fetch('https://dog.ceo/api/breeds/image/random');
  const dog = await randomDog.json();

  router = dog.message;
  img.src = router;
});

catButton.addEventListener('click', async () => {
  let router;
  const randomCat = await fetch('https://aws.random.cat/meow');
  const cat = await randomCat.json();
  
  router = cat.file;
  img.src = router;
});

surpriseButton.addEventListener('click', async () => {
  let router;
  const surpriseRandom = await Promise.any([
    fetch("https://dog.ceo/api/breeds/image/random"),
    fetch("https://aws.random.cat/meow"),
  ])
  const surprise = await surpriseRandom.json();

  router = surprise.file || surprise.message;
  img.src = router;
});