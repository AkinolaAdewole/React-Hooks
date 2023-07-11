import React, {useState} from 'react'

const NameForm = ({addSong}) => {
    const[name,setName]=useState('');
    const addName=(e)=>{
        e.preventDefault();
        console.log(name);
        addSong(name)
        setName('')
    }
  return (
    <>
       <form action="" onSubmit={addName}>
                <label htmlFor=""> Names</label>
                <input type="text" required onChange={(e)=>setName(e.target.value)} value={name}/>
                <input type="submit" value='Add Name'/>
       </form>
    </>
  )
}

export default NameForm