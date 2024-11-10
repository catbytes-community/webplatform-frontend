import { Card } from "../../shared/ui"
import s from './FilterMentors.module.css'

export const FilterMentors = () => {
    return (
        <div className="flex-row">
            <Card className={s.filterCardStyle}>
                Filter
            </Card>
            <Card className={s.filterCardStyle}>
                Sort
            </Card>
        </div>
    )
}
