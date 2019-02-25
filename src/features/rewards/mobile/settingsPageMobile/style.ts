/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledWrapper = styled<{}, 'div'>('div')`
  background: #E6E8F5;
  min-height: 100vh;
  width: 100%;
  padding-top: 35px;
  font-family: "Poppins", sans-serif
`

export const StyledContent = styled<{}, 'div'>('div')`
   max-width: 1000px;
   margin: 0 auto;
   padding: 40px 10px 0 10px;
`
