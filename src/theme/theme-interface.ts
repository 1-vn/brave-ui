import { ThemedStyledProps } from 'styled-components'

export default interface IThemeProps {
  name: string,
  palette: { [key: string]: string }
  color: {
    brandOneVN: string
    brandOneVNInteracting: string
    brandOneVNActive: string
    brandOneVNLight: string
    brandBat: string
    brandBatInteracting: string
    brandBatActive: string
    detailDescription: string
    disabled: string
    primaryBackground: string
    secondaryBackground: string
    modalOverlayBackground: string
    defaultControl: string
    defaultControlInteracting: string
    defaultControlActive: string
    warn: string
    warnInteracting: string
    warnActive: string
    subtle: string
    subtleBackground: string
    subtleExclude: string
    subtleInteracting: string
    subtleActive: string
    text: string
    panelBackground: string
    panelBackgroundSecondary: string
    inputBorder: string
    separatorLine: string
  }
  fontFamily: {
    heading: string
    body: string
    system: string
  }
}

export type OneVNThemedStyledProps<T> = ThemedStyledProps<T, IThemeProps>
