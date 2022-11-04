import {useState} from 'react';
import * as C from './App.styles';
import {Item} from './types/Item';
import {ListItem} from './components/listItem';
import { AddArea } from './components/AddArea';

const App = () =>{
  const [list, setList] = useState<Item[]>([
    {id:1, name:'Comprar o pão na padaria', done: false},
    {id:2, name:'Comprar um bolo  na padaria', done: true},
  ]);

  const handleAddTask =(taskName: string)=>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done:false   
    });
    setList(newList);
  }
   

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas </C.Header>

        {/* area de adicionar nova tarefa*/}
        <AddArea onEnter={handleAddTask}/>

        {/*lista das tarefas*/}
        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
                    ))}

      </C.Area>
    </C.Container>
  );
}

export default App;