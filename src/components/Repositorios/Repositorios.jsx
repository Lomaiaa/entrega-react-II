import { useState, useEffect } from 'react'
import './Repositorios.css'

const Repositorios = () => {
    const [repos, setRepos] = useState([])
    const [search, setSearch] = useState ('')
    const [filteredRepos, setFilteredRepos] = useState ([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://api.github.com/users/lomaiaa/repos')
            const data = await response.json()

            setRepos(data)
        }
        getData()
    }, [])

const handleSearch = (e) => {
    setSearch(e.target.value)
}

useEffect(() => {
    setFilteredRepos(repos.filter(repo => repo.name.includes(search)))
}, [repos,search])

    // console.log(repos)
    return (
    <>
    <h1 className="titulo-repos">Outros repositórios do meu Github:</h1>
    <div className="infos">
        {filteredRepos.map(repo => {
            return(
                <p key={repo.id}>
                    {repo.name}
                    </p>
            )
        })}
    </div>
    </>

    )
}

export default Repositorios