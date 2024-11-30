import { ReactNode } from "react";
import Goal from './Goal';

type GoalType = {
    goalsList: {
        id:number,
        title:string,
        children: ReactNode,
    }[],
    onDelete: (id:number) => void
}

const DisplayGoals = (props:GoalType) => {
    return (
        <>
            <ul>
            {props.goalsList.map(goal => 
                <li key={goal.id}>
                    <Goal id={goal.id} title={goal.title} onDelete={props.onDelete}>
                        {goal.children}
                    </Goal>
                </li>
      )}
    </ul>
        </>
    )
}

export default DisplayGoals;