window.addEventListener('load', () => {
  const url = 'https://api.funtranslations.com/translate/pirate.json';
  const inputBox = document.getElementById('input');
  const btn = document.querySelector('button');
  const output = document.getElementById('output');
  btn.addEventListener('click', async () => {
    const inputText = inputBox.value;
    const res = await fetch(`${url}?text=${inputText}`);
    const data = await res.json();
    output.innerText = data.contents.translated;
  });
});
