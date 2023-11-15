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
                    <p><a href={archive.pdfUrl}><img src={archive.imgUrl} ></img></a></p>
                    {/* <object className='pdf' data={archive.pdfUrl} type="application/pdf" width="50%" height="985px"></object> */}
                    {/* <iframe src={archive.pdfUrl} sandbox="allow-presentation" width="816" height="1085" ></iframe> */}
                    <button className='continueReading'>Download PDF of <a href={archive.pdfUrl}>{archive.title}</a></button>
                </div>
            ))}
            </div>            
        </div>
    )    
}

export default Press