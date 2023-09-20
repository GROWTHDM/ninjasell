fetch('./pressel-ninjacrash.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

btn.addEventListener('click', () => {
    window.open("https://www.redirectmais.com/run/comunidadedoce");
})
