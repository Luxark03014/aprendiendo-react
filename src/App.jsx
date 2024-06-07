import "./App.css"
import { TwitterCard } from "./TwitterCard"

  
export function App() {

  const users = [{
    userName:"TheRonaldoTeam",
    name: "Cristiano Ronaldo",
    isFollowing: false

  },
  {
    userName:"StephenCurry30",
    name: "Stephen Curry",
    isFollowing: true
  },
  { 
    userName:"carlosalcaraz",
    name: "Carlos Alcaraz",
    isFollowing: true
  }
]


return (
  
    users.map(({userName, name, isFollowing}) => (
    <TwitterCard key={userName} userName={userName} name = {name} isFollowing={isFollowing} />
    ))
 
)

 
}


  