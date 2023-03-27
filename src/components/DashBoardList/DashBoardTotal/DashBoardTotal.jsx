import React, { useEffect, useState } from 'react'
import '/src/components/DashBoardList/DashBoardTotal/DashBoardTotal.css'

const DashBoardTotal = ({valueList}) => {

    const [total, setTotal] = useState(0);
    const expenseValues = valueList.filter(value => value.category == 'despesa');
    const enteringValues = valueList.filter(value => value.category == 'entrada');
    const expenses = expenseValues.map((value) => {
        return parseFloat(value.value)
    });
    const enterings = enteringValues.map((value) => {
        return parseFloat(value.value)
    });
    const totalExpenses = expenses.reduce((prevVal, value) => prevVal + value, 0);
    const totalEnterings = enterings.reduce((prevVal, value) => prevVal + value, 0);
    const totalValue = totalEnterings - totalExpenses;
    useEffect(() => {
        setTotal(totalValue.toFixed(2))
    }, [valueList])

    
    return (
        <div className='total__container'>
            <div className='total__divValue'>
                <h2 className='total__divValue-h2'>
                    Valor Total
                </h2>
                <p className='total__divValue-paragraph'>
                    R$ {total}
                </p>
            </div>
            <span className='total__span'>
                O valor refere-se ao saldo.
            </span>
        </div>
  )
}

export default DashBoardTotal