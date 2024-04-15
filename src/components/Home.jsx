import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Veiwer from "./Viewer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase"
import { collection,getDocs } from "firebase/firestore";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice"


const Home =() => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];


  useEffect(() => {
    (async () => {
      const colRef = collection (db,"movies")
      const snapshots = await getDocs(colRef)

      const docs = snapshots.docs.map(doc => {
        const data = doc.data()
        switch (data.type) {
          case "recommend":
            recommends = [...recommends, { id:doc.id, ...doc.data() }];
          
            break;

          case "new":
            newDisneys = [...newDisneys, { id:doc.id, ...doc.data() }];
            
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
        
      })

      console.log(docs)
   

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );

    })()
    

    /*db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });*/
  }, [username]);

    return (
        <main className="min-h-64 p-5 block top-20 overflow-x-hidden relative after:bg-[url('/images/images/home-background.png')] after:absolute after:inset-0 after:opacity-100 after:-z-10">
            <ImgSlider/>
           <Veiwer/>
           <Recommends/>
           <NewDisney/>
           <Originals/>
           <Trending/>
        </main>
    );
}

export default Home;