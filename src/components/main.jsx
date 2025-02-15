import React from "react";
import ItemList from "./ItemList";
import ItemListJogos from "./ItemListJogos";
import ItemListNoticias from "./ItemListNoticias";
import ItemListHQ from "./ItemListHQ";
import { heroesArray } from "../assets/database/heroes";
import { jogosArray } from "../assets/database/games";
import { newsArray } from "../assets/database/news";
import { villainsArray } from "../assets/database/villains";
import { hqArray } from "../assets/database/hq";


const Main = ({ type }) => {
    return (
        <div className="main">
            {/* Item List de Heróis  */}
            {type === "Heróis" || type === undefined ? (
                <ItemList 
                    title="Heróis" 
                    items={heroesArray.length} 
                    itemsArray={heroesArray} 
                    path='/hero' 
                    idPath="/Herois"
                />
            ) : <></>}
            {/* Item List de Vilões */}
            {type === "viloes" || type === undefined ? (
                <ItemList 
                    title="Viloes" 
                    items={villainsArray.length} 
                    itemsArray={villainsArray} 
                    path='/viloes' 
                    idPath="/Viloes"
                />
            ) : <></>}

            {/* Item List de Jogos */}
            {type === "Jogos" || type === undefined ? (
                <ItemListJogos 
                    title="Jogos" 
                    items={jogosArray.length} 
                    itemsArray={jogosArray} 
                    path='/jogos' 
                    idPath="/Jogos"
                />
            ) : <></>}

            {/* Item List de Notícias */}
            {type === "Notícias" || type === undefined ? (
                <ItemListNoticias 
                    title="Notícias" 
                    items={newsArray.length} 
                    itemsArray={newsArray} 
                    path='/noticias' 
                    idPath="/Noticias"
                />
            ) : <></>}
             {/* Item List de HQ */}
             {type === "HQ" || type === undefined ? (
                <ItemListHQ
                    title="HQ" 
                    items={hqArray.length} 
                    itemsArray={hqArray} 
                    path='/HQs' 
                    idPath="/HQs"
                />
            ) : <></>}
        </div>
    );
};

export default Main;
