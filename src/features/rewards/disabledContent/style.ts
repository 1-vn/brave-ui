/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from '../../../components/style/theme'
import { Props } from './index'

const getColors = (p: Props) => {
  let color = '#4b4c5c'
  let boldColor = '#4b4c5c'

  switch (p.type) {
    case 'ads':
      color = '#d666a2'
      boldColor = '#b490cf'
      break
    case 'contribute':
      color = '#ce9ccf'
      boldColor = '#c16fc2'
      break
    case 'donation':
      color = '#AC9CCF'
      boldColor = '#696fdc'
      break
  }

  return css`
    --disabled-content-color: ${color};
    --disabled-content-bold: ${boldColor};
  `
}

export const StyledContent = styled.div<Props>`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  ${getColors};
  color: var(--disabled-content-color);

  b,
  a {
    color: var(--disabled-content-bold);
    font-weight: 500;
  }

  h3 {
    margin: 0;
    display: inline-block;
    padding: 0;
    font-family: Poppins, sans-serif;
    font-size: 28px;
    font-weight: 500;
    line-height: 0.5;
    color: #ceb4e1;
  }
`

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 32px;
  box-sizing: border-box;
`

export const StyledOneColumn = styled.div`
  display: flex;
  grid-column: span 1;
  justify-content: flex-end;
`

export const StyledTwoColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-column: span 2;
`

export const StyledIcon = styled.div`
  width: 110px;
`
