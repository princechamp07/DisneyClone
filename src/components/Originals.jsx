import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOriginal } from "../features/movie/movieSlice";

const Originals =() => {
    const movies = useSelector(selectOriginal)
    return (
        <div className="pb-6">
            <h4>Originals</h4>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {
                    movies && movies.map((movie, key) => (
<div className="Card" key={key}>
{movie.id}
<Link to={'/DisneyClone/detail/' + movie.id}>
    <img src={movie.cardImg} alt={movie.title} />
</Link>
</div>
                    ))
                }
            </div>
        </div>
    );
}

export default Originals;