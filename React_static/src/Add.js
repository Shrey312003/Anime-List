import { useState } from "react";
import { useHistory } from "react-router-dom";

const Add = () => {

    const [title,setTitle] = useState('');
    const [data,setData] = useState('');
    const [pic,setPic] = useState('');
    const [score,setScore] = useState('-');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const SubmitHandle = (e) => {
        e.preventDefault();
        const anime ={ title, pic, score, data };

        setIsPending(true);

        fetch('http://localhost:8000/anime',{
            method:'POST',
            headers:{'Content-type' : 'application/json'},
            body : JSON.stringify(anime)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
    }
    return ( 
        <div className="container col-md-6 offset-md-3 formClass">
            <form onSubmit={SubmitHandle}>

                <div className="form-group">
                    <label for="Title">Title</label>
                    <input type="text" className="form-control"  value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div class="form-group">
                    <label for="About">About</label>
                    <textarea className="form-control" placeholder="About" value={data} onChange={(e) => setData(e.target.value)}>
                    </textarea>
                </div>

                <div className="form-group">
                    <label for="Pic">Pic</label>
                    <input type="text" className="form-control" value={pic} onChange={(e) => setPic(e.target.value)}/>
                </div>

                <div class="form-group">
                    <label for="Score" >Score:</label>
                    <select  className="form-control" value={score} onChange={(e) => setScore(e.target.value)}>
                    <option selected value="-">-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>
            
                {!isPending && <button type="submit" className="btn btn-primary container col-md-2 offset-md-5">Submit</button>}
                {isPending && <button type="submit" disabled className="btn btn-primary container col-md-2 offset-md-5">Adding ..</button>}

                
            </form>
        </div>
        
     );
}
 
export default Add;