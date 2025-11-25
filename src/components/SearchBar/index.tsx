import styles from "./searchbar.module.css"
import { IconSearch } from "../icons";

interface SearchBarProps {
    props: React.ReactNode
}

export const SearchBar = () => {
    return (
        <div className={styles.container}>
            <IconSearch />
            <input className={styles.input} placeholder="Procure seu dinheiro..." />
        </div>
    );
}