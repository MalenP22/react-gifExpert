import { useState } from "react";
export const AddCategory = ({onNewCategory}) => {  
    const [inputValue, setInputValue] = useState(''); 

    const InputChange = ({target}) => {
        setInputValue(target.value);
    } 

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 2) return;
        onNewCategory( inputValue.trim());
        setInputValue('');

    }

    return (
        <>
            <form action="" onSubmit={(e) => onSubmit(e)}>
                <input type="text" placeholder="Buscar gif" value={inputValue}
            onChange={InputChange}/>
            </form>
            
           
        </>
    );
 }