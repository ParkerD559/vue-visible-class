import attachListener from './listener';

const getClasses = directiveArg => {
  let classes;
  if (!directiveArg) {
    classes = [];
  } else if (typeof(directiveArg) === 'string') {
    classes = [directiveArg];
  } else if (directiveArg.constructor === Array) {
    classes = directiveArg;
  } else {
    throw TypeError('directive value must either be undefined, a string, or an array.');
  }
  return classes;
}

export default ({ globalClass }) => ({
  inserted: (el, binding) => {
    const classes = getClasses(binding.value);
    if (globalClass) {
      classes.concat(globalClass);
    }

    const listener = attachListener(el, classes);
    listener();
  }
});
