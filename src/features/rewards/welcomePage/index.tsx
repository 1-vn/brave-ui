/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Hero from '../hero'
import Button from '../../../components/buttonsIndicators/button'
import InfoCard, { CardProps } from '../infoCard'
import {
  AdsMegaphoneIcon,
  ArrowDownIcon,
  BatColorIcon,
  LoaderIcon,
  RewardsActivateIcon,
  RewardsSendTipsIcon
} from '../../../components/icons'
import { Alert, RewardsButton, SettingsPage } from '../'

// Utils
import { getLocale } from '../../../helpers'

// Styles
import {
  StyledOptInSection,
  StyledOptInInnerSection,
  StyledCenterSection,
  StyledCenterContent,
  StyledSection,
  StyledCenterInner,
  StyledInfoContent,
  StyledTakeActionContent,
  StyledBackground,
  StyledBatLogo,
  StyledRewardsTitle,
  StyledActionTitle,
  StyledCenterTitle,
  StyledSubTitle,
  StyledTrademark,
  StyledRewardsParagraph,
  StyledTeaserParagraph,
  StyledCenterParagraph,
  StyledAnchor,
  StyledOptInSecond,
  StyledHeroInfo,
  StyledAlert,
  StyledAlertLeft,
  StyledAlertContent,
  StyledTOSWrapper,
  StyledServiceText,
  StyledServiceLink
} from './style'

export interface Props {
  id?: string
  optInAction: () => void
  creating?: boolean
  onReTry?: () => void
  onTOSClick?: () => void
  onPrivacyClick?: () => void
}

class WelcomePage extends React.PureComponent<Props, {}> {
  private isTouchScreen: boolean
  private centerTextSection: HTMLDivElement | null

  constructor (props: Props) {
    super(props)
    this.centerTextSection = null
    this.isTouchScreen = 'ontouchstart' in window
  }

  scrollToCenter = () => {
    if (!this.centerTextSection) {
      return
    }

    const centerTextSection = this.centerTextSection
    if (centerTextSection) {
      window.scrollTo({
        behavior: 'smooth',
        top: centerTextSection.offsetTop
      })
    }
  }

  refSet = (node: HTMLDivElement) => {
    this.centerTextSection = node
  }

  optInAction = () => {
    this.props.optInAction()
  }

  hero = () => {
    const { onTOSClick, onPrivacyClick } = this.props

    return (
      <Hero
        id={'rewards-hero'}
        isMobile={this.isTouchScreen}
      >
        <StyledSection>
          <StyledBatLogo>
            <BatColorIcon />
          </StyledBatLogo>
          <StyledHeroInfo>
            <StyledRewardsTitle level={2}>
              {getLocale('onevnRewardsTitle')}
            </StyledRewardsTitle>
            <StyledTrademark>TM</StyledTrademark>
            <StyledSubTitle level={4}>
              {getLocale('onevnRewardsSubTitle')}
            </StyledSubTitle>
            <StyledRewardsParagraph>
              {getLocale('onevnRewardsDesc')}
            </StyledRewardsParagraph>
          </StyledHeroInfo>
        </StyledSection>
        <StyledOptInSection>
          {
            this.props.creating
              ? <RewardsButton
                type={'opt-in'}
                disabled={true}
                testId={'optInAction'}
                text={getLocale('onevnRewardsCreatingText')}
                icon={<LoaderIcon />}
              />
              : <RewardsButton
                type={'opt-in'}
                onClick={this.optInAction}
                testId={'optInAction'}
                text={getLocale('onevnRewardsOptInText')}
              />
          }
        </StyledOptInSection>
        {
          !this.isTouchScreen
          ? <StyledTOSWrapper header={true}>
              <StyledServiceText header={true}>
                {getLocale('serviceTextWelcome')} <StyledServiceLink header={true} onClick={onTOSClick}>{getLocale('termsOfService')}</StyledServiceLink> {getLocale('and')} <StyledServiceLink header={true} onClick={onPrivacyClick}>{getLocale('privacyPolicy')}</StyledServiceLink>.
              </StyledServiceText>
            </StyledTOSWrapper>
          : null
        }
        <StyledSection>
          <StyledTeaserParagraph>
            {getLocale('onevnRewardsTeaser')}
          </StyledTeaserParagraph>
          <StyledAnchor onClick={this.scrollToCenter}>
            <ArrowDownIcon />
          </StyledAnchor>
        </StyledSection>
      </Hero>
    )
  }

  get centerTextContent () {
    return (
      <StyledCenterContent>
        <StyledCenterInner>
          <StyledCenterTitle level={3}>
            {getLocale('whyOnevnRewards')}
          </StyledCenterTitle>
          <StyledCenterParagraph>
            {getLocale('whyOnevnRewardsDesc1')}
          </StyledCenterParagraph>
          <StyledCenterParagraph>
            {getLocale('whyOnevnRewardsDesc2')}
          </StyledCenterParagraph>
        </StyledCenterInner>
      </StyledCenterContent>
    )
  }

  optInContent = () => {
    const { onPrivacyClick, onTOSClick } = this.props

    return (
      <StyledOptInInnerSection>
        <StyledActionTitle level={4}>
          {getLocale('readyToTakePart')}
        </StyledActionTitle>
        <StyledOptInSecond>
          {
            this.props.creating
              ? <RewardsButton
                type={'cta-opt-in'}
                disabled={true}
                text={getLocale('onevnRewardsCreatingText')}
                icon={<LoaderIcon />}
              />
              : <RewardsButton
                type={'cta-opt-in'}
                onClick={this.optInAction}
                text={getLocale('readyToTakePartOptInText')}
              />
          }
        </StyledOptInSecond>
        {
          !this.isTouchScreen
          ? <StyledTOSWrapper>
              <StyledServiceText>
                {getLocale('serviceTextWelcome')} <StyledServiceLink onClick={onTOSClick}>{getLocale('termsOfService')}</StyledServiceLink> {getLocale('and')} <StyledServiceLink onClick={onPrivacyClick}>{getLocale('privacyPolicy')}</StyledServiceLink>.
              </StyledServiceText>
            </StyledTOSWrapper>
          : null
        }
      </StyledOptInInnerSection>
    )
  }

  get infoCards (): CardProps[] {
    return [
      {
        title: getLocale('turnOnRewardsTitle'),
        description: getLocale('turnOnRewardsDesc'),
        icon: <RewardsActivateIcon />
      },
      {
        title: getLocale('onevnAdsTitle'),
        description: getLocale('onevnAdsDesc'),
        icon: <AdsMegaphoneIcon />
      },
      {
        title: getLocale('onevnContributeTitle'),
        description: getLocale('onevnContributeDesc'),
        icon: <RewardsSendTipsIcon />
      }
    ]
  }

  get welcomePageContent () {
    return (
      <>
        {
          this.props.onReTry
            ? <StyledAlert>
              <Alert type={'error'}>
                <StyledAlertContent>
                  <StyledAlertLeft>
                    <b>{getLocale('walletFailedTitle')}</b><br />{getLocale('walletFailedText')}
                  </StyledAlertLeft>
                  <Button
                    level={'primary'}
                    type={'accent'}
                    text={getLocale('walletFailedButton')}
                    onClick={this.props.onReTry}
                  />
                </StyledAlertContent>
              </Alert>
            </StyledAlert>
            : null
        }
        <StyledBackground>
          <StyledSection>
            {this.hero()}
          </StyledSection>
          <StyledCenterSection>
            <StyledCenterSection innerRef={this.refSet}>
              {this.centerTextContent}
            </StyledCenterSection>
            <StyledInfoContent>
              <InfoCard
                id='rewards-info'
                cards={this.infoCards}
              />
            </StyledInfoContent>
            <StyledTakeActionContent>
              {this.optInContent()}
            </StyledTakeActionContent>
          </StyledCenterSection>
        </StyledBackground>
      </>
    )
  }

  render () {
    const { id } = this.props

    // We don't need the SettingsPage wrapper on touchscreen devices
    if (this.isTouchScreen) {
      return this.welcomePageContent
    }

    return (
      <SettingsPage id={id}>
        {this.welcomePageContent}
      </SettingsPage>
    )
  }
}

export default WelcomePage
