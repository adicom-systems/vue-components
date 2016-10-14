export default {
  twoWay: true,

  params: ['options'],

  bind () {
    var self = this
    $(this.el)
      .select2(this.params.options || {})
      .on('change', function () { self.set(this.value) })
  },

  update (value) {
    var select = $(this.el)
    if (!this.params.options || !this.params.options.ajax) {
      select.val(value).trigger('change')
      return
    }
    
    if (!value)
      return

    var option = $('<option selected></option>').val(value).text('Загрузка...')
    select.empty().append(option).trigger('change')

    var ajaxCopy = _.clone(this.params.options.ajax)
    ajaxCopy.data = ajaxCopy.data({ term: value })
    Promise.resolve($.ajax(ajaxCopy))
      .then(data => {
        var { results: [item] } = ajaxCopy.processResults(data, {})
        option.val(item.id).text(item.text).removeData()
        select.trigger('change')
      })
  },

  unbind () {
    $(this.el).off().select2('destroy')
  }
}