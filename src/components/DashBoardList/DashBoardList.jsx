import React from 'react'
import ValueCard from './ValueCard/ValueCard'
import '/src/components/DashBoardList/DashBoardList.css'

const DashBoardList = ({valueList, removeValueFromValueList}) => {
    const valueLength = valueList.length
    
    return (
    <div className='list__wrapper'>
        <h2 className='list__title'>
            Resumo Financeiro
        </h2>
        {valueLength > 0 ? (
            <ul className='unorderedList__container'>
                {valueList.map((value) => {
                    return <ValueCard key={value.id} value={value} removeValueFromValueList={removeValueFromValueList}/>
                })}
            </ul>
        ) : (
            <p className='list__paragraph'>Você ainda não possui nenhum lançamento</p>
        )}
    </div>
  )
}

export default DashBoardList