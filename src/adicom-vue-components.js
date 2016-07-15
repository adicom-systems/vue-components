import moment   from './filters/moment.js'
import Panel    from './components/panel/panel.js'
import Progress from './components/progress/progress.js'
import JsonView from './components/json-view/json-view.js'

export default {
    components: { Panel, Progress, JsonView },
    filters: { moment },
}
