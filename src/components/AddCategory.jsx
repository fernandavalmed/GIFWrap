import { useState } from "react"


export const AddCategory = ({setCategories, categories}) => {

    const [inputValue, setInputValue] = useState('')

    //Se encarga de leer lo del input
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    
    //Reconoce el submit y previene que se recargue la pagina
    const onSubmit = (event) => {
        event.preventDefault()

        if(inputValue.trim().length <= 1) return;
        
        if (!categories.some(category =>  category.toLowerCase() === inputValue.trim().toLowerCase())) {
            setCategories( categories => [inputValue.trim(), ...categories]) //ESTA ERA LA ANTERIOR OPCION
        }
        
        //onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return(
        <form action="" onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="Buscar gifs" 
            value={inputValue}
            onChange={onInputChange}
            />
        </form> 
    )

}