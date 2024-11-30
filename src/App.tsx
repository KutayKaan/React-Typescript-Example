import './App.css'
import goalimage from './assets/goalimage.png'
import Header from './components/Header'
import { ReactNode, useState } from 'react'
import DisplayGoals from './components/DisplayGoals'
import NewGoals from './components/NewGoals'

type GoalType = {
  id:number,
  title:string,
  children: ReactNode,
}

type DeleteGoalType = (id:number) => void

function App() {
  const [goals,setGoals] = useState<GoalType[]>([])

  const AddGoal = (goal:string,desc:string) => {
    const newGoal:GoalType = {
      id:Math.random(),
      title: goal,
      children: desc
    }
    setGoals(prevGoals => [...prevGoals,newGoal])
  }

  const DeleteGoal:DeleteGoalType = (id) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
  }

  return (
    <>
    <Header image={{src: goalimage,alt:'goalimage'}}>
      <h2>My Goals</h2>
    </Header>
    <NewGoals onAddGoal={AddGoal}/>
    <DisplayGoals goalsList={goals} onDelete={DeleteGoal}/>
    </>
  )
}

export default App
