import { AccountItem } from "../AccountItem";
import { Button } from "../Button";
import { IconWallet } from "../icons";
import styles from "./accounts.module.css"

const accounts = [
    {
        "bank": "Anybank",
        "balance": 1200
    },
    {
        "bank": "Bytebank",
        "balance": 800
    },
    {
        "bank": "Switch Bank",
        "balance": 1800
    }
];

export const Accounts = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {accounts.map((account, index) => {
                    return (
                        <li key={index}>
                            <AccountItem account={account} />
                        </li>
                    )
                })}
            </ul>

            <Button props={undefined}>
                <IconWallet />
                Adicionar Conta
            </Button>
        </div>
    )
}