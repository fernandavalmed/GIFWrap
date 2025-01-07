import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GIFTWrap = () => {

    const [categories, setCategories] = useState(['Your Name', 'Turtwig', 'Spirited Away'])

    return(
        <>
            <h1>GIFWrap</h1> 

            <AddCategory 
                setCategories={setCategories} // ESTA ERA LA ANTERIOR OPCION
                categories = {categories}
                //onNewCategory = {(value) => onAddCategory(value)}
            />

            {
                categories.map(category => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }

            <h5>By María Fernanda Valdivia, Enero 2025</h5>
                
        </>
    )
}