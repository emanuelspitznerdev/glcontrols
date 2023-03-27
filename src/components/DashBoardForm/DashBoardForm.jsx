import React, { useState } from 'react'
import '/src/components/DashBoardForm/DashBoardForm.css'

export const DashBoardForm = ({addValueToValueList}) => {
    const [formData, setFormData] = useState({
        description: "",
        value: "",
        category: "entrada"
    })

    const submit = (event) => {
        event.preventDefault();
        addValueToValueList(formData);
    }
  
    return (
    <form className='form__container' onSubmit={submit} noValidate>
        <label htmlFor="description" className='form__labelDescription'>
            Descrição
        </label>
        <input type="text" id='description' className='form__inputDescription' placeholder='Digite aqui sua descrição' onChange={(event) => setFormData({...formData, description: event.target.value})}/>
        <span className='form__span'>
            Ex: Compra de roupas
        </span>
        <label htmlFor="value" className='form__labelDescription'>
            Valor (R$)
        </label>
        <input type="number" id='value' className='form__inputDescription' placeholder='1' onChange={(event) => setFormData({...formData, value: event.target.value})}/>
        <label htmlFor="valueType" className='form__labelDescription'>
            Tipo de valor
        </label>
        <select name='valueType' id='valueType' className='form__select' onChange={(event) => setFormData({...formData, category: event.target.value})}>
            <option value='entrada' className='form__option'>Entrada</option>
            <option value='despesa' className='form__option'>Despesa</option>
        </select>
        <button type='submit' className='form__button'>
            Inserir Valor
        </button>
    </form>
  )
}
