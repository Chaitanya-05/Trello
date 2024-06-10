import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards, setCurBoard } from './redux/actions';
import { AppState } from './redux/store';
import { Board } from './pages/Board';
import { DashBoard } from './pages/DashBoard';

function App() {
    const dispatch = useDispatch();
    const curBoard = useSelector((state: AppState) => state.app.curBoard);

    useEffect(() => {
        dispatch(fetchBoards());
    }, [dispatch]);

    function handleClick(){
      dispatch(setCurBoard("null"))
    }
    return (
        <>
            <nav>
                <button onClick={handleClick}>DashBoard</button>
                </nav>
            {curBoard ? <Board /> : <DashBoard />}
        </>
    );
}

export default App;
