import { boot } from "quasar/wrappers"
import { plugin, defaultConfig } from '@formkit/vue'

export default boot(({ app }) => {
    app.use(plugin, defaultConfig)
})