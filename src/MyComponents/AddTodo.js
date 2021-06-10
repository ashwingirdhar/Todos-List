import React,{useState} from 'react';

export const AddTodo = ({addTodo}) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
            alert("Title or Description is not defined");
        else{
            addTodo(title,desc);
            setTitle("")
            setDesc("")
        }
    }
    return (
        <div className="container">
            <h4>Add a Todo</h4>
            < form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" value={title}
                    onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description"  value={desc} 
                    onChange={(e)=>setDesc(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form >
        </div>
    )
}
