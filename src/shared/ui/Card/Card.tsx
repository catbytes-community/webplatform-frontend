import s from './Card.module.css';

type Props = {
    children: string | JSX.Element | JSX.Element[];
}

export const Card = ({children}: Props) => {
    return (
        <div className={s.cardContainer}>
            {children}
        </div>
    )
};