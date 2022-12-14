import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Text } from '@pancakeswap-libs/uikit'
import { Spinner } from '../Shared'
import { AutoColumn } from '../Column'
import { Wrapper, Section, ConfirmedIcon, ContentHeader } from './helpers'

type ConfirmationPendingContentProps = { onDismiss: () => void; pendingText: string }

const CustomLightSpinner = styled(Spinner)<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

const ConfirmationPendingContent = ({ onDismiss, pendingText }: ConfirmationPendingContentProps) => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>{t('Waiting for confirmation')}</ContentHeader>
        <ConfirmedIcon>
          <CustomLightSpinner src="/images/blue-loader.svg" alt="loader" size="90px" />
        </ConfirmedIcon>
        <AutoColumn gap="12px" justify="center">
          <AutoColumn gap="12px" justify="center">
            <Text fontSize="14px">
              <strong>{pendingText}</strong>
            </Text>
          </AutoColumn>
          <Text fontSize="14px">{t('Confirm this transaction in your wallet')}</Text>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default ConfirmationPendingContent
