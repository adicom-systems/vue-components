var JsonFormatter = JSONFormatter ? JSONFormatter.default : null;

var JsonView = Vue.extend({
  template: '<div></div>',
  props: ['json'],
  watch: {
    'json': {
      handler() {
        this.update()
      },
      deep: true,
    }
  },

  ready() {
    this.update()
  },

  methods: {
    update() {
      if (!JsonFormatter)
      {
        console.warn('JsonFormatter is not found')
        return;
      }
      const formatter = new JsonFormatter(this.json)
      this.$el.innerHTML = '';
      this.$el.appendChild(formatter.render());
    }
  }
})

export default JsonView