import { useDispatch, useSelector } from "react-redux"
import { StateInterface } from "../redux/initialState"

export const Board = () => {
  const dispsatch = useDispatch()
  const board=useSelector((state:StateInterface)=>state.curBoard)
  
  return (
    <div>Board</div>
  )
}
