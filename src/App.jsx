import { useState } from 'react'
import { DashBoardForm } from './components/DashBoardForm/DashBoardForm'
import DashBoardHeader from './components/DashBoardHeader/DashBoardHeader'
import DashBoardList from './components/DashBoardList/DashBoardList'
import '/src/App.css'
import { v4 as uuidv4 } from 'uuid'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import DashBoardTotal from './components/DashBoardList/DashBoardTotal/DashBoardTotal'

function App() {
  const [valueList, setValueList] = useState([]);

  const addValueToValueList = (value) => {
    const newValue = {...value, id: uuidv4()};
    toast.success("Valor adicionado com sucesso.");
    setValueList([...valueList, newValue]);
  }

  const removeValueFromValueList = (valueId) => {
    const newValueList = valueList.filter(value => value.id !== valueId);
    toast.success("Valor removido com sucesso.");
    setValueList(newValueList);
  }
  const valueLength = valueList.length

  return (
    <>
    <div className='dash__container'>
      <DashBoardHeader/>
      <div className='form-div__container'>
        <div>
          <DashBoardForm addValueToValueList={addValueToValueList}/>
          {valueLength == 0 ? (
            <>
            </>
          ) : (
            <DashBoardTotal valueList={valueList}/>
          )}
        </div>
        <DashBoardList valueList={valueList} removeValueFromValueList={removeValueFromValueList}/>
      </div>
    </div>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    </>
  )
}

export default App
