; (function adicomVueComponents(root) {
    var adicom = root['adicom'] || (root['adicom'] = {})
    adicom.vue = adicom.vue || { }

    adicom.vue.Panel = function Panel() {
        this.test = function () { console.log('Panel.test was called') }
    }

} (this))
