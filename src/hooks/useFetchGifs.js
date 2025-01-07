import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const getImages = async() => {
        const newImages = await getGifs(category)//la ejecucion de una funcion no va adentro de un functional component
        setImages(newImages)
        setIsLoading(false)
    }
    
    useEffect(() => {
        getImages()
    }, [])// si esta vacio solo se corre una vez al inicio

    return{
        images,
        isLoading
    }
}