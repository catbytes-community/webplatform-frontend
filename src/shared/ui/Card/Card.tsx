import s from './Card.module.css';

type Props = {
    children: string | JSX.Element | JSX.Element[];
}

export const Card = ({children}: Props, {style}: { style?: React.CSSProperties }) => {
    return (
        <div className={s.cardContainer} style={style ? style : undefined}>
            {children}
        </div>
    )
};