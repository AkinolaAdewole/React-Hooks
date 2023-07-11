import React, {useState, useEffect} from 'react'
import uuid from 'react-uuid';
import NameForm from './NameForm';



// npx i react-uuid 
const SongList = () => {
    const[songs, setSongs]=useState([
        {title:'Ola', id:1},
        {title:'Ade', id:2},
        {title:'Lanre', id:3}
    ]);

    const [age, setAge]=useState(20);

    const addSong=(title)=>{
        setSongs([...songs, { title: title, id: uuid() }]);
    }




    useEffect(()=>{
        console.log('useEffect Hook', songs)
    }[songs]);
  return (
    <>
            <div>
                <ul>
                    {songs.map((song)=>(
                        <li key={song.id}>{song.title}</li>
                    ))} 
                </ul>
                {/* <button onClick={addSong}>Add Song</button> */}
                <NameForm addSong={addSong}/>

                <button onClick={()=>setAge(age + 1)}>Age:{age}</button>
            </div>
    </>
  )
}

export default SongList