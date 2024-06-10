
import { useDispatch, useSelector } from 'react-redux'
import { StateInterface } from '../redux/initialState'
import { useEffect, useState } from 'react';
import { BOARD, BOARDS } from '../redux/actionTypes';
import axios from 'axios';

export const DashBoard = () => {
  const [data, setdata] = useState();
  const dispatch=useDispatch()
  const boards = useSelector((state: StateInterface) => state.boards);
  useEffect(()=>{

  

           axios
              .get("https://api.trello.com/1/members/me/boards?key=24bd2a65732398c85484845a4cdf8af2&token=ATTA04cf78e2cb998db9f3af83e880cab27f84629fa71fd2cf2e51ec77ad4029deda6F34678F")
              .then(function (response) {                  
                setdata(response.data)
              })
              
            },[])
  dispatch({type:BOARDS,payload:data})
  return (
    
    <><h1 style={{
      textAlign:"center"
    }}>DashBoard</h1>
    <div className='boardCont' >
    {boards!==undefined?(
      boards.map((item)=>(
        <>
        <div className="boardcard"
        style={{
          backgroundColor:`${item.prefs.backgroundBottomColor}`,
          backgroundImage:`url('${item.prefs.backgroundImage}')`
        }}
        onClick={()=>dispatch({type:BOARD,payload:item})}
        >
          {item.name}
        </div>
          
        </>     
      ))):(<h1>wait</h1>)
    }


    </div>
    </>
  )
}
