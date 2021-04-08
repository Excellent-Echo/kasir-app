import React, { useEffect, useState } from 'react'

import axios from "../APIs/jsonPlaceholder";

const DemoAxios = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const pokemon = await axios ({
                    method: "GET",
                    url: "/pokemon"
                });

                setPokemon(pokemon.data);
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
        return fetchData;
    }, []);
}

export default DemoAxios
