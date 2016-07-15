import template from './panel.html.js'

export default Vue.extend({
  template,
  props: {
    'heading': {},
    'footer': {},
    'panel-class': {
      type: String,
      default: 'default'
    }
  },
})
