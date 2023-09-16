import { useState, useEffect } from 'react'
import routes from '../../router/routes'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


function ContributorList({ setContributor }) {
    const [contributors, setContributors] = useState([])
    const Contributor = routes[4]
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchContributors() {
            const response = await fetch('/api/contributors')
            const conts = await response.json()
            setContributors(conts)
        }
        fetchContributors()
    }, [])
    useEffect(() => {
    }, [contributors])
    return(
        <div className="contributors">
            <h1>Knights of the Round Table</h1>
            <div className="contributorslist">
                {contributors.map(({ name, _id }) => (
                    <Link className="contributor" key={Contributor.key} to={`/Contributor/${_id}`}>
                        {name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ContributorList