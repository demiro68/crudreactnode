import axios from "axios"
import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {Link} from "react-router-dom"

const url = "http://localhost:8000/blogs/"

export const EditBlog=()=>{

    const [titulo,setTitulo]=useState("")
    const [contenido,setContenido]=useState("")

    const navigate=useNavigate()

    const {id} = useParams()

    // procedimiento para actualizar /editar un blog

    const update = async (e)=>{
        e.preventDefault()
        await axios.put(url+id,{
            title:titulo,
        content:contenido
        })
        navigate("/")
    }
    
    useEffect(()=>{
        getBlogById()
    },[])

    const getBlogById= async()=>{
        const res = await axios.get(url+id)
        setTitulo (res.data.title)
        setContenido(res.data.content)
    }
    
return(
    <div className="container">
		<h2 className="bg-info text-center">Manejo de un Blog</h2>
        <h3>Modificar un Post</h3>
        <form onSubmit={update}>
			<div className="mb-3">
				<label className="form-label">Title</label>
				<input
					value={titulo}
					onChange={(e)=>setTitulo(e.target.value)}
					 type="text" className="form-control" 
					 />
			</div>
			<div className="mb-3">
				<label className="form-label">Content</label>
				<textarea
				value={contenido}
				onChange={(e)=>setContenido(e.target.value)}
				 type="text" className="form-control" 
				 />
			</div>
			<div className="text-center">
				<button type="submit" className="btn btn-primary">EDITAR</button>&nbsp;
				<Link to="/" className="btn btn-warning mt-2 mb-2 ps-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Volver Atras">Volver al menu anterior</Link>
			</div>
        </form>
    </div>
)


}