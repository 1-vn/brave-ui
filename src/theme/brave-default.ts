import colors from './colors'
import ITheme from './theme-interface'

// Define colors, fonts, and sizes by purpose.
// Keys should not describe the value, but what they are to be used for.

const theme: ITheme = {
  name: 'Brave Light',
  color: {
    brandBrave: colors.orange400,
    brandBat: colors.blurple400,
    // brave controls
    brandBraveInteracting: colors.orange500,
    brandBraveActive: colors.orange200,
    brandBraveLight: colors.orange000,
    // bat controls
    brandBatInteracting: colors.blurple500,
    brandBatActive: colors.blurple200,
    // regular controls
    defaultControl: colors.grey800,
    defaultControlInteracting: colors.black,
    defaultControlActive: colors.grey700,
    // warning controls
    warn: colors.red500,
    warnInteracting: colors.red600,
    warnActive: colors.red700,
    // subtle controls
    subtle: colors.grey400,
    subtleBackground: colors.grey100,
    subtleExclude: colors.grey300,
    subtleInteracting: colors.grey500,
    subtleActive: colors.grey600,
    // disabled controls
    disabled: colors.grey300,
    // backgrounds
    primaryBackground: colors.white,
    secondaryBackground: colors.grey400,
    modalOverlayBackground: 'rgba(36,37,54,0.85)',
    // text
    detailDescription: colors.grey500
  },
  fontFamily: {
    heading: 'Poppins, sans-serif',
    body: 'Muli, sans-serif',
    system: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
  }
}

export default theme
