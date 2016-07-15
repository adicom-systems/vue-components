var JsonFormatter = JSONFormatter.default;

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
      const formatter = new JsonFormatter(this.json)
      this.$el.innerHTML = '';
      this.$el.appendChild(formatter.render());
    }
  }
})

export default JsonView