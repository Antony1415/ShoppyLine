import React from 'react'

export interface TextProps {
  className?: string,
  text?: string,
  type?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'label' | 'a',
}

const Text = ({ className, text, type = 'span', ...props }: TextProps & React.HTMLProps<HTMLElement>): React.JSX.Element => {
  const elementProps = { className, ...props }

  return React.createElement(type as string, elementProps, text)
}

export default Text