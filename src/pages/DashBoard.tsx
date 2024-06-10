
import { useDispatch, useSelector } from 'react-redux'
import { StateInterface } from '../redux/initialState'

export const DashBoard = () => {
  const dispatch=useDispatch()
  const boards = useSelector((state: StateInterface) => state.boards);
  console.log(boards)
  return (
    
    <><h1>flkasjdf</h1>
    {
      boards.forEach((item)=>(
        <> 
          <h1>{item.id}</h1>
        </>     
      ))

    }
    </>
  )
}
