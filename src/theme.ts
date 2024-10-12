import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  conditions: {
    scrolling: "[data-scrolling=true] &",
  },
})

const theme = createSystem(defaultConfig, customConfig)

export default theme
