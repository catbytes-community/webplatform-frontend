import { Card } from "../../shared/ui"
import s from './FilterMentors.module.css'

export const FilterMentors = () => {
    return (
        <div className="flex gap-2 mb-4">
            <Card className={s.filterCardStyle}>
                Filter
            </Card>
            <Card className={s.filterCardStyle}>
                Sort
            </Card>
        </div>
    )
}
