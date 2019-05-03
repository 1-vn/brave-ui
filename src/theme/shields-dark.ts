import ITheme from './theme-interface'
import defaultTheme from './onevn-default'
import colors from './colors'

const shieldsDarkTheme: ITheme = {
  ...defaultTheme,
  name: 'Shields Dark',
  color: {
    ...defaultTheme.color,
    text: colors.white,
    panelBackground: colors.grey900,
    panelBackgroundSecondary: '#181921',
    inputBorder: colors.grey700,
    separatorLine: colors.grey800
  }

}

export default shieldsDarkTheme
