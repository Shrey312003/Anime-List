import { Link } from "react-router-dom";

const AnimeList = ({anime}) => {
    return ( 
        anime.map((ani) => (
            <>
                <tr>
                <tr>
                
                    <td > <Link to={`/anime/${ani.id}`}>{ani.id} </Link></td>
                    <td ><img src={ani.pic} alt="anime pic"/></td>
                    <td >{ani.title}</td>
                    <td >{ani.score}</td>
                
                </tr>
                </tr>
            </>
        ))

     );
}
 
export default AnimeList;