import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
            setMovie(json.data.movie);
            setLoading(false);
        })();
    }, [id]);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : (
                <div>
                    <Link to="/">Back to Main</Link>
                    <h1>{movie.title} ({movie.year}) ☆{movie.rating.toFixed(1)}</h1>
                    <img src={movie.large_cover_image} alt={movie.title} />
                    <p>{movie.description_full}</p>

                </div>
            )}
        </div>
    );
}

export default Detail;