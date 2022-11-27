import axios from "axios"
import { useState,useEffect } from "react"
import {Link} from "react-router-dom"

const url = "http://localhost:8000/blogs/"

const ShowBlogs = ()=>{

    const [blogs,setBlog]= useState([])

    useEffect(()=>{
        getBlogs()
    },[])

//procedimiento para mostrar todos los blogs

const getBlogs = async ()=>{
    const res = await axios.get(url)
   setBlog(res.data)
}

//procedimiento para eliminar un blog
const deleteBlog = async (id)=>{
await axios.delete(`${url}${id}`)
getBlogs()
}
return (
<div className="container">
	
    <div className="row">
        <div className="col">
			<div></div>
			<h2 className="bg-info text-center">Manejo de un Blog</h2>
			<div className="d-flex flex-row-reverse">
				<Link to="/create" className="btn btn-primary mt-2 mb-2 ps-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nuevo Reg.">CREAR UN NUEVO REGISTRO</Link>
			</div>
			
			<table className="table table-bordered table-striped">
			<thead className="table-primary">
			<tr>
				<th>Titulo</th>
				<th>Contenido</th>
				<th className="text-center">Acciones</th>
			</tr>
			</thead>
			<tbody>
				{blogs.map((blog)=>(
				   <tr key= {blog.id}>
						<td>{blog.title}</td>
						<td>{blog.content}</td>
						<td className="text-center">
						<Link to ={`/edit/${blog.id}`} className="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Modif.Reg."><i className="fas fa-edit"></i></Link>&nbsp;
						<button onClick={()=>deleteBlog(blog.id)} className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Eliminar Reg."><i className="fas fa-trash"></i></button>
						</td>

				   </tr>
				))}
			</tbody>
			</table>
        </div>
    </div>

</div>

)

}

export default ShowBlogs