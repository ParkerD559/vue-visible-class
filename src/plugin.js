import makeDirective from './directive';

export default {
  install: (Vue, {
    directiveName = 'visible-class',
    globalClass
  }) => {
    Vue.directive(directiveName, makeDirective({
      globalClass
    }))
  }
}
