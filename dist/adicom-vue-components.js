(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.adicomVueComponents = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var defaultFormat = 'YYYY-MM-DD';

  var moment$1 = {
    read: function read(val, format) {
      if (typeof val !== 'undefined' || val === null) return null;
      var m = moment(val);
      return m.isValid() ? m.format(format || defaultFormat) : null;
    },
    write: function write(val, old, format) {
      return moment.utc(val, format || defaultFormat).toDate();
    }
  };

  var template = '<div class="panel" :class="[ &quot;panel-&quot; + panelClass ]"><div class="panel-heading" v-show="!$els.headingDefault || heading"><slot name="heading"><span v-el:heading-default="v-el:heading-default">{{ heading }}</span></slot></div><div class="panel-body" v-show="!$els.bodyDefault"><slot><span v-el:body-default="v-el:body-default"></span></slot></div><slot name="post-body"></slot><div class="panel-footer" v-show="!$els.footerDefault || footer"><slot name="footer"><span v-el:footer-default="v-el:footer-default">{{ footer }}</span></slot></div></div>';

  var Panel = Vue.extend({
    template: template,
    props: {
      'heading': {},
      'footer': {},
      'panel-class': {
        type: String,
        default: 'default'
      }
    }
  });

  var template$1 = '<div class="progress"><div class="progress-bar" :class="&quot;progress-bar-&quot; + color" :aria-valuenow="value" :style="{&quot;width&quot;: value + &quot;%&quot; }" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em">{{ value }}%</div></div>';

  var Progress = Vue.extend({
    template: template$1,

    props: {
      value: { default: 0 },
      color: { default: 'success' }
    }
  });

  var JsonFormatter = JSONFormatter ? JSONFormatter.default : null;

  var JsonView = Vue.extend({
    template: '<div></div>',
    props: ['json'],
    watch: {
      'json': {
        handler: function handler() {
          this.update();
        },
        deep: true
      }
    },

    ready: function ready() {
      this.update();
    },

    methods: {
      update: function update() {
        if (!JsonFormatter) {
          console.warn('JsonFormatter is not found');
          return;
        }
        var formatter = new JsonFormatter(this.json);
        this.$el.innerHTML = '';
        this.$el.appendChild(formatter.render());
      }
    }
  });

  var adicomVueComponents = {
    components: { Panel: Panel, Progress: Progress, JsonView: JsonView },
    filters: { moment: moment$1 }
  };

  exports.default = adicomVueComponents;
});