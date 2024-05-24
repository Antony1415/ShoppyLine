import React from 'react'

interface CardProps {
    children?: React.ReactNode
}

const Card = ({ children }: CardProps): React.JSX.Element => {
    return (
        <div>{children}</div>
    )
}

const Body = () => {

}

const Footer = () => {

}

Card.Body = Body;
Card.Footer = Footer;

export default Card