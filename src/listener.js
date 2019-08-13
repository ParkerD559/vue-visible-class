const isInView = el => {
  const rect = el.getBoundingClientRect()
  const html = document.documentElement
  return (
    (rect.top + rect.height) >= 0 &&
    (rect.left + rect.width) >= 0 &&
    rect.top <= (window.innerHeight || html.clientHeight) &&
    rect.left <= (window.innerWidth || html.clientWidth)
  );
}

export default (el, classes) => {
  const listener = () => {
    if (isInView(el)) {
      classes.forEach(cls => el.classList.add(cls));
      window.removeEventListener('scroll', listener);
    }
  };
  listener();
  window.addEventListener('scroll', listener);
}
