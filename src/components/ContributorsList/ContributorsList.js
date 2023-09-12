import { useState, useEffect } from 'react'
import routes from '../../router/routes'
import { Link } from 'react-router-dom';


function ContributorList() {
    const [contributors, setContributors] = useState([])
    const Contributor = routes[4]
    useEffect(() => {
        async function fetchContributors() {
            const response = await fetch('/api/contributors')
            const conts = await response.json()
            console.log(conts)
            setContributors(conts)
        }
        fetchContributors()
    }, [])
    useEffect(() => {
        console.log(contributors)
    }, [contributors])
    return(
        <div className="contributors">
            {contributors.map(({ name, _id }) => (
            <Link key={Contributor.key} to={`/Contributor/${_id}`}>
                {name}
            </Link>
            ))}
        </div>
    )
}

export default ContributorList