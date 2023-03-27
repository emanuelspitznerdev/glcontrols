import React from 'react'
import '/src/components/DashBoardList/ValueCard/ValueCard.css'

const ValueCard = ({value, removeValueFromValueList}) => {
    


    return (
    <>
    {value.category == 'entrada' ? (
        <li className='listItem__container-entrace'>
            <div className='descCateg__container'>
                <h2 className='listItem__title'>
                    {value.description}
                </h2>
                <span className='listItem__span'>
                    {value.category}
                </span>
            </div>
            <div className='paragButt__container'>
                <p className='listItem__paragraph'>
                    R$ {value.value}
                </p>
                <button className='listItem__button' onClick={() => removeValueFromValueList(value.id)}>
                    Excluir
                </button>
            </div>
        </li>
    ) : (
        <li className='listItem__container-expense'>
            <div className='descCateg__container'>
                <h2 className='listItem__title'>
                    {value.description}
                </h2>
                <span className='listItem__span'>
                    {value.category}
                </span>
            </div>
            <div className='paragButt__container'>
            <p className='listItem__paragraph'>
                R$ {value.value}
            </p>
            <button className='listItem__button' onClick={() => removeValueFromValueList(value.id)}>
                Excluir
            </button>
            </div>
        </li>
    )}
    
    </>
  )
}

export default ValueCard