var JsonFormatter = JSONFormatter ? JSONFormatter.default : null;

var JsonView = Vue.extend({
  template: '<div></div>',
  props: ['json'],
  watch: {
    'json': {
      handler: function() {
        this.update()
      },
      deep: true,
    }
  },

  ready: function() {
    this.update()
  },

  methods: {
    update: function() {
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