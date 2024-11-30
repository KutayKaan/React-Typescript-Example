import { ReactNode } from "react";

type GoalType = {
    id:number,
    title:string,
    children: ReactNode,
    onDelete: (id:number) => void
}

const Goal = (props:GoalType) => {
    return(
        <>
            <div style={{backgroundColor:'yellowgreen',padding:'2px', margin:'5px'}}>
                <h3>{props.title}</h3>
                {props.children}
                <button style={{backgroundColor:'red'}} onClick={() => props.onDelete(props.id)} >Delete İtem</button>
            </div>
        </>
    )
}
export default Goal;