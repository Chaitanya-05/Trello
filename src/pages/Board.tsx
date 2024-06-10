import { useDispatch, useSelector } from "react-redux"

export const Board = () => {
  const dispsatch = useDispatch()
  const board=useSelector(state=>state.curBoard)
  return (
    <div>Board</div>
  )
}
