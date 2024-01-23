/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import players from '../../../data/players.json'
import CardItem from '../CardItem'
import './sectioncard.css'

export default function SectionCard() {

    //* Mecaniso de Busca

    const [search, setSearch] =useState("");
    
    //* Filtros 

    const [filterPosition, setFilterPosition] = useState("All");
    const [filterNation, setFilterNation] = useState("All");
    const [sort, setSort] = useState("Asc");

    //* Nações que Existem
    const [nations, setNations] = useState([]);

    //* Função para capiturar nacionalidades existentes
    function getNacionalidades() {
        const nationsList = [];

        players.forEach(player => {
            
            if (!nationsList.includes(player.nationality)) {
                nationsList.push(player.nationality);
            }

        });

        setNations(nationsList);
    }

    useEffect(() => {
        getNacionalidades()
        console.log(nations)
    }, [])
    
    
    return (
        <section id="players" className="sectioncard">

            <div className="card-busca">
                <h2> Buscar Jogador </h2>
                <input type="text" 
                value={search} 
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Digite o nome do jogador" 
                />
            </div>

            <div className="card-filter">
                
                <div className="filter">
                    <p> Posição </p>
                    <select value={filterPosition} onChange={(event) => setFilterPosition(event.target.value)}>
                        <option value="All"> Todos </option>
                        <option value="Goleiro"> Goleiro </option>
                        <option value="Defensor"> Defensor </option>
                        <option value="Meia"> Meia </option>
                        <option value="Atacante"> Atacante </option>
                    </select>
                </div>

                <div className="filter">
                    <p> Nacionalidade </p>
                    <select value={filterNation} onChange={(event) => setFilterNation(event.target.value)}>
                        <option value="All"> Todos </option>
                        {nations.map((nationality, index) => (
                            <option key={index} value={nationality}> {nationality} </option>
                        ))}
                    </select>
                </div>

                <div className="filter">
                    <p> Ordem Numérica </p>
                    <div className="filterbutton">
                        <button onClick={() => setSort("Asc")}> Asc </button>
                        <button onClick={() => setSort("Desc")}> Desc </button>
                    </div> 
                </div>
                
            </div>

            <div className="card-container">
                {players
                
                .filter((player) => filterNation === "All" ? true : filterNation === player.nationality ? true : false)
                .filter((player) => filterPosition === "All" ? true : filterPosition === player.position ? true : false)
                .filter((player) => player.name.toLowerCase().includes(search.toLowerCase()))
                
                .sort((a, b) => sort === "Asc" ? a.number.localeCompare(b.number) : b.number.localeCompare(a.number))

                .map((item, index) => (
                    <CardItem  key={index} {... item}/>
                ))}

                {players
                .filter((player) => filterNation === "All" ? true : filterNation === player.nationality ? true : false)
                .filter((player) => filterPosition === "All" ? true : filterPosition === player.position ? true : false)
                .filter((player) => player.name.toLowerCase().includes(search.toLowerCase()))
                .sort((a, b) => sort === "Asc" ? a.number.localeCompare(b.number) : b.number.localeCompare(a.number))
                .map((item, index) => (
                    <CardItem  key={index} {... item}/>
                )).length === 0 && <p className="aviso"> Não foram encontrados jogadores. </p>}

            </div>
            
        </section>
    )
}