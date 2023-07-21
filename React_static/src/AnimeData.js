import { useParams } from "react-router-dom";
import UseFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AnimeData = () => {

    const {id} = useParams();
    const {data:anime, error } = UseFetch("http://localhost:8000/anime/" + id);
    const history= useHistory();

    const handleDelete =() =>{
        fetch("http://localhost:8000/anime/" + id,{
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
        
    }
    
    return ( 
        <div className="animeData container col-md-10 col-md-offset-1">
            {anime &&
            (   <div>
                <h1>{anime.title}</h1>
                <div>
                    <img src={anime.pic} />
                </div>
                <div>
                    {anime.data}
                </div >
                <button onClick={handleDelete} className="delete_btn container col-md-3 offset-6">Delete blog</button>
                </div>
            )}
        </div>
     );
}
 
export default AnimeData;