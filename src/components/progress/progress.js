import template from './progress.html.js'

export default Vue.extend({
  template: template,

  props: {
    value: { default: 0 },
    color: { default: 'success' },
  }
})
