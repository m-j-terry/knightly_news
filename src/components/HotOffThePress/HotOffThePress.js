import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// possibly, instead of sending a link to the Url, save it in a folder and send the pathname to the backend.

function HotOffThePress( {color} ) {
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
            console.log(archive.pdfUrl)
            console.log(archive.imgUrl)
        }
    }, [archive])
    return(
        <div className='hotOffThePress'>
                <h1 className="sectionHeader">Hot Off the Press</h1>
                <p>Extra! Extra! Read all about it!</p>
                <p>Checkout our most recent print edition: </p>
                <h1>{archive.title}</h1>
                <p><a href={archive.pdfUrl}><img src={archive.imgUrl} ></img></a></p>
                {/* <object className='pdf' data={archive.pdfUrl} type="application/pdf" width="500" height="700"></object> */}
                {/* <iframe className="pdf" src={archive.pdfUrl} type="application/pdf" width="816" height="1085" ></iframe> */}
                <button className='continueReading'><Link className="continueReadingLink" key='Press' to={`/Press`}>Browse All Previous Editions</Link></button>
        </div>
    )
} 

export default HotOffThePress