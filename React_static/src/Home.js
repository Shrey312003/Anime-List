import AnimeList from "./AnimeList";
import UseFetch from "./useFetch";

const Home = () => {
    const {data:anime,error} = UseFetch("http://localhost:8000/anime");
    return ( 
        <div className="homePage">
            <div className="row justify-content-center">
                <div className="container col-md-10 col-md-offset-1">
                    <div className="col-auto">
                        <center>
                            <h1>My Anime List</h1>
                        </center>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Pic</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Score</th>
                                </tr>
                            </thead>
                            <tbody >
                                {anime && <AnimeList anime= {anime}/>}
                            </tbody>
                        </table>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;