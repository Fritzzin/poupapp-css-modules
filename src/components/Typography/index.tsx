import styles from "./typography.module.css"

let tags: any = {
    h1: 'h1',
    body: 'p'
}

interface TypographyProps {
    children: React.ReactNode,
    variant: any,
}

export const Typography = ({ children, variant }: TypographyProps) => {
    const Component: any = tags[variant] || 'p';
    const variantClass = styles[variant] || styles.p;

    return (
        <Component className={variantClass}  >
            {children}
        </Component>
    )
}