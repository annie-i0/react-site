import React, { useState } from 'react'

const Welcome = () => {
    const [name, setName] = useState('')
        
    const updateName = (event) => { 
        setName(event.target.value)
    }

    return (
        <div className="welcome"> 
            <h2>Welcome to my React Site</h2>
            <input type="text" name="search" onChange={(event) => setName(event.target.value)} value={name}/>
            <div className="greeting">{name ? `Welcome to my react site ${name}` : null}</div>
            <a href="https://github.com/annie-i0"> My Github </a>

        </div>
    )
}

export default Welcome;