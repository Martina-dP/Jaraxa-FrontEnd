import React from "react";
// import style from "./paginado.module.css"

function Paginado ({medicinePerPage, listNameDrugs, paginado}) { //declaro paginado
    const pageNum = []
    for (let i = 1; i <= Math.ceil(listNameDrugs/medicinePerPage); i++) { //divide todos los paises por cantidad de paises que quiero en cada pag
        pageNum.push(i)
    }

    return (
        <nav>
            <ul> 
                {pageNum &&
                    pageNum.map(num => (
                        <button onClick = {() => paginado(num)}  key = {num} > {num} </button>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Paginado;
