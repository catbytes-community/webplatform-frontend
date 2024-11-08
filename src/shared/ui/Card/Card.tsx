import s from './Card.module.css';

interface Props {
    children: React.ReactNode;
    className?: string; // Add this line to accept a className prop
}

export const Card: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={`${s.cardContainer} ${className}`}>
            {children}
        </div>
    )
};