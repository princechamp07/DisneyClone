import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../firebase"
import { collection, doc, getDoc } from "firebase/firestore"

const Details = () => {
    const { id } = useParams()
    const [detailData, setDetailData] = useState({})

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const colRef = collection(db, "movies")
                const docRef = doc(colRef, id)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists()) {
                    setDetailData(docSnap.data())
                } else {
                    console.log('Document does not exist in firebase')
                }
            } catch (error) {
                console.error('Error getting document:', error)
            }
        }

        fetchMovieDetails()
    }, [id])

    return(
        <div className="Container">
            <div className="Background">
            <img src={detailData.backgroundImg} alt={detailData.title} />
            </div>

            <div className="ImageTitle">
        <img src="" alt="" />
            </div>

        <div className="ContentMeta">
            <div className="Controls">
                <button className="Player">
            <img src="../images/images/play-icon-black.png" alt="" />
                <span>Play</span>
                </button>

                <button className="Trailer Player">
            <img src="../images/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
                </button>
                <div className="AddList rounded-full border-2 cursor-pointer mr-4 h-11 w-11 flex justify-center items-center">
                    <span></span>
                    <span></span>
                </div>
                <div className="GroupWatch h-11 w-11 rounded-full flex justify-center items-center cursor-pointer bg-white">
                    <div className="h-10 w-10 bg-black rounded-full">
                        <img className="w-full" src="../images/images/group-icon.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="SubTitle text-slate-200 md:text-lg min-h-5 text-sm">
            {detailData.subTitle}
            </div>

            <div className="Description text-slate-200 leading-tight text-sm md:text-xl py-4 ">
            {detailData.description}
            </div>
        </div>

        </div>
    )
}

export default Details