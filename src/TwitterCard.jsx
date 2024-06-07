import { useState } from 'react'
import "./App.css"

export function TwitterCard({userName, name, isFollowing}){

const [follow, setFollow] = useState(isFollowing)

function handleClick() {
    follow ? setFollow(false) : setFollow(true)
}


const srcImage = `https://unavatar.io/${userName}`

const buttonClass = follow ? "tw-card-button tw-following" : "tw-card-button"
const text = follow ? "Siguiendo" : "Seguir"

    return(
    <section className="tw-card">
        <header className="tw-card-header">
            <img alt={`Avatar de ${userName}`} src ={srcImage} /> 
            <div className="tw-card-info">
                <strong>{name}</strong>
                 <h3>@{userName}</h3>
            </div>
        </header>
        
      <aside>
      <button onClick={handleClick} className={buttonClass}>
        <span className='tw-button-span'>
        {text}
        </span>
        <span className='tw-button-span-unfollow'>
            Dejar de seguir
        </span>
      </button>
      
      </aside>
     
    </section>

    )

}