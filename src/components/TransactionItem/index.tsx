import styles from "./transactionitem.module.css"

interface TransactionItemProps {
    item: {
        description: string
        value: number
        date: string
    }
}

export const TransactionItem = ({ item }: TransactionItemProps) => {
    const formattedValue = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(item.value);
    const detailsAdditionalClassName = item.value >= 0 ? styles.income : styles.expense
    return (
        <div className={styles.transaction}>
            <div className={[styles.details, detailsAdditionalClassName].join(' ')}>
                <p> {item.description}</p>
                <p> {formattedValue}</p>
            </div>

            <div className={styles.date}>
                {new Date(item.date).toLocaleDateString('pt-br')}
            </div>
        </div>
    )
}