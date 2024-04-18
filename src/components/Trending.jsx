
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";

const Trending = () => {
const movies = useSelector(selectTrending)
    
    return (
        <div className="pb-6">
        <h4>Trending</h4>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
        {
                    movies && movies.map((movie, key) => (
<div className="Card" key={key}>
{movie.id}
<Link to={'/detail/' + movie.id}>
    <img src={movie.cardImg} alt={movie.title} />
</Link>
</div>
                    ))
                }
        </div>
    </div>
    );
}

export default Trending;