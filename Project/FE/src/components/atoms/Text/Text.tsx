import React from 'react'

export interface TextProps {
  className?: string,
  text?: string,
  type?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'label',
}

const Text = ({ className, text, type = 'span' }: TextProps): React.JSX.Element => {
  const elementProps = { className }

  return React.createElement(type as string, elementProps, text)
}

export default Text