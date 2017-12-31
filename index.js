// Constants
const backgroundColor = '#212121'
const foregroundColor = '#ffffff'

// Colors
const RED = '#E66450'
const GREEN = '#00CCA3'
const YELLOW = '#FFA600'
const BLUE = '#1EB6E8'
const MAGENTA = '#F92672'
const LIGHT_GRAY = '#f2f2f2'
const DARK_GRAY = '#212121'

// Mapped Colors
const colors = {
  black: backgroundColor,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: BLUE,
  white: LIGHT_GRAY,
  lightBlack: DARK_GRAY,
  lightRed: RED,
  lightGreen: GREEN,
  lightYellow: YELLOW,
  lightBlue: BLUE,
  lightMagenta: MAGENTA,
  lightCyan: BLUE,
  colorCubes: '#fff',
  grayscale: foregroundColor
}

// Additional Constants
const cursorColor = YELLOW
const borderColor = backgroundColor

exports.decorateConfig = config => {
  let windowControlsCSS

  if (config.showWindowControls) {
    windowControlsCSS = '.list_2902 { margin-left: 0 !important; }'
  }

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .cursor-node {
        background-color: ${MAGENTA} !important;
        border-color: ${MAGENTA} !important;
      }
      .hyper_main {
        border: none !important;
      }
      .header_header {
        background: ${backgroundColor} !important;
      }
      .splitpane_divider {
        background-color: rgba(128, 184, 155, 0.5) !important;
      }
      .tab_tab {
        border: 0;
        background-color: #1C1C1C;
      }
      .tab_textActive {
        background-color: #212121;
      }
      ${windowControlsCSS}
    `
  })
}
