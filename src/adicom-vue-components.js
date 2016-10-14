import moment   from './filters/moment.js'
import select2  from './directives/select2-directive.js'
import Panel    from './components/panel/panel.js'
import Progress from './components/progress/progress.js'
import JsonView from './components/json-view/json-view.js'

export default {
    components: { Panel, Progress, JsonView },
    filters: { moment },
    directives: { select2 },
}
