import { FormEvent, useRef } from "react";

type NewGoalType = {
    onAddGoal: (goal:string, desc:string) => void
}

const NewGoals = (props:NewGoalType) => {
    const goal = useRef<HTMLInputElement>(null);
    const desc = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredDesc = desc.current!.value;

        event.currentTarget.reset();
        props.onAddGoal(enteredGoal,enteredDesc);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal" ></label>
                <input id="goal" type="text" ref={goal}/>
            </p>
            <p>
                <label htmlFor="desc" ></label>
                <input id="desc" type="text" ref={desc}/>
            </p>
            <button style={{backgroundColor:'greenyellow'}} >Add Goal</button>
        </form>
    )
}

export default NewGoals;