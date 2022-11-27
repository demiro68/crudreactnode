import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {Link} from "react-router-dom"

const url = "http://localhost:8000/blogs/"

export const CreateBlog=()=>{
	const [titulo,setTitulo]=useState("")
	const [contenido,setContenido]=useState("")

	const navigate=useNavigate()

	//procedimiento para guardar/crear
	const crear = async (e)=>{
		e.preventDefault()
		await axios.post (url,
			{title:titulo,
			content:contenido}
			)
			navigate("/")
	}

	return (
		<div className="container">
			
			<h2 className="bg-info text-center">Manejo de un Blog</h2>
			<h3>Crear un nuevo Post</h3>
			<form onSubmit={crear}>
				
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
					<button type="submit" className="btn btn-primary">Crear Registro</button>&nbsp;
					<Link to="/" className="btn btn-warning mt-2 mb-2 ps-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Volver Atras">Volver al menu anterior</Link>
				</div>
			</form>
		</div>
	)

}