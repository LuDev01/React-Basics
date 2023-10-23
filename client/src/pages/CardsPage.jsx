import { useState, useEffect } from "react"
import axios from "axios"
import { CardApi } from "../components/CardApi"
import Card from 'react-bootstrap/Card';

export const CardsPage = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character/');
                setCharacters(response.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        getCharacters()
    }, [])
  return (
    <>

    </>
  )
}
