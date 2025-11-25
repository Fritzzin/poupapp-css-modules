import styles from "./card.module.css"
interface CardProps {
    children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

const CardHeader = ({ children }: CardProps) => {
    return (
        <div className={styles.header}>
            {children}
        </div>
    )
}

const CardBody = ({ children }: CardProps) => {
    return (
        <div className={styles.body}>
            {children}
        </div>
    )
}

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;