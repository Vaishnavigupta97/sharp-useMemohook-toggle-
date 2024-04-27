import { useCallback, useMemo, useState } from 'react';
import DemoList from './Demo/DemoList';
import Button from './UI/Button';
import './App.css';

function App() {
  const [listTitle, setListTitle] = useState(true);
  const [toggle, setToggle] = useState(false);


  console.log("this is app");
  const changeTitleHandler = useCallback(()=>{
    // setListTitle("Descending Order");
    setListTitle((value) => !value);
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], [])
  return (
    <div className="App">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler} >Change list title</Button>
    </div>
  );
}

export default App;
