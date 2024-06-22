import React, {useState} from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getMedicines } from "../../Action/action";
import Card from "../Cards/card";
import Paginado from "../../Paginated/paginated";
import style from "./Home.module.css"

function Home(){

    const [query, setQuery] = useState("");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() =>{ 
        setIsLoading(true);
        dispatch(getMedicines())
        .finally(() => setIsLoading(false));
    },[dispatch])

    const dataMedecine = useSelector(state => state.medecine);
    const dataResults = useSelector(state => state.totalResults);

    let listNameDrugs = [];

    for (let i = 0; i < dataMedecine.length ; i++) {
        const filterInfo = dataMedecine[i]["patient"]["drug"]
        const filterByName = filterInfo.map(p => p.medicinalproduct)
        for (let m = 0; m < filterByName.length ; m++) {
            listNameDrugs.push({name:filterByName[m]})
        }
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [medicinePerPage, setMedicinePerPage] = useState(20) 
    const indexOfLastMedicine = currentPage * medicinePerPage
    const indexOfFirstMedicine  = indexOfLastMedicine - medicinePerPage
    const currentCountries = listNameDrugs.slice(indexOfFirstMedicine, indexOfLastMedicine) 

    const paginado = (pageNum) => {
        setCurrentPage(pageNum)
    }

    const handleChange = (e) => {
        setQuery((query) => (query = e.target.value));
        setResult(e.target.value)
        setCurrentPage(1);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(dispatch(getMedicines(query)));
        setQuery((query) => (query = ""));
        
    };

    return(
        <div className={style.all}>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Search medicine"
                    value={query}
                    onChange={handleChange}
                />
                <button type="submit"> buscar </button>
            </form>
            {isLoading && <p>Cargando...</p>}
            {!isLoading && <div>
                {result && (
                    <div>
                        <p>Resultados encontrados para {result}</p>
                    </div>
                )}
                <div className={style.body}>
                    { currentCountries?.length > 0 ? (
                        currentCountries.map((e, index) => {
                            return (
                                <Card 
                                    key={index}
                                    name={e.name}
                                />
                            );
                        }) 
                    ) : (
                        <div>
                            <p>No se encontraron resultados</p>
                        </div>
                    )}
                </div> 
                <div>
                    <p>Resultados total {dataResults}</p>
                </div>
                <div className = {style.paginado}>
                    <Paginado 
                        medicinePerPage = {medicinePerPage}
                        listNameDrugs = {listNameDrugs.length}
                        paginado = {paginado}
                    />
                </div>
            </div>}
        </div>
    )} 

export default Home;