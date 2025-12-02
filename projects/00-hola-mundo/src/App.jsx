import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Duran',
        isFollowing: true

    },
    {
        userName: 'pheralb',
        name: 'Pablo Hdez',
        isFollowing: false
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]

export function App() {
    return(
        <section className='App'>
            {
                users.map(( { userName, name, isFollowing }) => (
                    <TwitterFollowCard 
                        key={userName}
                        userName={userName} 
                        initialIsFollowing={isFollowing}
                    >
                        { name }
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}
