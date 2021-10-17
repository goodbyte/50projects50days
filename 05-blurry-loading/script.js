{
  const loadingValue = document.querySelector('#loadingValue');
  const backgroundImage = document.querySelector('#backgroundImage');

  const initialBlur = 30;
  const steps = 100;
  const step = initialBlur / steps;
  let load = 0;

  const intervalHnd = setInterval(() => {
    if (load >= steps) return clearInterval(intervalHnd);

    load++;

    const opacity = 1 - (load / steps).toFixed(2);
    const blur = (initialBlur - step * load).toFixed();

    loadingValue.innerText = `${load}%`;
    loadingValue.style.opacity = opacity;
    backgroundImage.style.filter = `blur(${blur}px)`;
  }, 30);
}
