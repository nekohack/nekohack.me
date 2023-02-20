import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'
import React from 'react'
import { Fragment } from 'react'
import { ChatInput, ChatInputProps } from '../ChatInput/ChatInput'

export default {
  component: ChatInput,
  title: 'ChatInput',
  args: {
    placeholder: 'Shift+Enterで送信、Enterで改行',
    onSend: action('send'),
  },
} as Meta

export const Default: Story<ChatInputProps> = (args) => (
  <Fragment>
    <ChatInput {...args}></ChatInput>
    <ChatInput {...args} id="focus"></ChatInput>
    <ChatInput {...args} value="test"></ChatInput>
  </Fragment>
)
Default.parameters = {
  pseudo: {
    focus: ['#focus'],
  },
}
