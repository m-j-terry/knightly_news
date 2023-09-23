import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function HotOffThePress() {
    const [archive, setArchive] = useState({})
    useEffect(() => {
        async function fetchMostRecentArchive(){
            const response = await fetch('/api/archives/index/hotOffThePress')
            const arch = await response.json()
            setArchive(arch)
        }
        fetchMostRecentArchive()
    }, [])
    useEffect(() => {
        if (Object.keys(archive).length > 0) {
            console.log(archive)
        }
    }, [archive])
    return(
        <div>
            <h1>Hot Off the Press</h1>
            <p>Extra! Extra! Read all about it!</p>
            <p>Checkout our most recent print edition: {archive.title}</p>
            {/* <object data={archive.pdfUrl} width="100%" height="500px">
            </object> */}
            <iframe src={archive.pdfUrl} width="100%" height="100%">Unable to display PDF file. <a href={archive.pdfUrl}>Download</a> instead.</iframe>
            <button className='continueReading'><Link className="continueReadingLink" key='Press' to={`/Press`}>Browse All Previous Editions</Link></button>
        </div>
    )
} 

export default HotOffThePress