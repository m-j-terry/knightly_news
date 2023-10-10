import { useState, useEffect } from 'react'

function Press() {

// possibly, instead of sending a link to the Url, save it in a folder and send the pathname to the backend.

    const [archives, setArchives] = useState([])
    useEffect(() => {
        async function fetchArchives(){
            const response = await fetch('/api/archives')
            const archs = await response.json()
            setArchives(archs)
        }
        fetchArchives()
    }, [])
    useEffect(() => {
        if (archives.length > 0) {
            console.log(archives)
        }
    }, [archives])
    return(
        <div>
            <h1 className="sectionHeader">Hot Off the Press</h1>
            <div className="archives">
            {archives.map((archive) => (
                <div className="archive">
                    <h1>{archive.title}</h1>            
                    <object className='pdf' data={archive.pdfUrl} type="application/pdf" width="100%" height="1000px"></object>
                    <button className='continueReading'>Download PDF of <a href={archive.pdfUrl}>{archive.title}</a></button>
                </div>
            ))}
            </div>            
        </div>
    )    
}

export default Press