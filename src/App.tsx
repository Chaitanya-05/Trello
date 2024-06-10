import { useDispatch, useSelector } from "react-redux";
import { BOARD, BOARDS, DASH } from "./redux/actionTypes";

import { DashBoard } from "./pages/DashBoard";
import { Board } from "./pages/Board";
import { StateInterface } from "./redux/initialState";


function App() {
  const dispatch =useDispatch();
  const curBoard = useSelector((state:StateInterface)=>state.curBoard)
  console.log(curBoard); 
  return (
  <>
  <nav><button onClick={()=>dispatch({type:DASH,payload:null})}>DashBoard</button></nav>
    {
    curBoard?(<Board/>):(<DashBoard/>)
    }
  </>
  );
}

export default App;
