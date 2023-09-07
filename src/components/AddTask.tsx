import "./AddTask.css";
import { useRecoilValue } from 'recoil';
import { addTitleState, addTitleStateLength } from '../states/addTitleState';
import { Tasks } from '../types/Task';

function AddTask() {
  //addTitleStateは、この状態はTasks型の配列を持ち、初期値として空の配列[]を持っています
  //まとめると：addTitleStateの現在の状態（タスクのタイトルの一覧）を取得し、addTitleという定数に格納しています。以降のコンポーネント内でこのaddTitleを使用することで、タスクのタイトルの一覧にアクセスできます。
    const addTitle = useRecoilValue(addTitleState)

  //addTitleStateLengthは、これはタスクの数（配列の長さ）を取得する機能を持っています。
  //まとめると：addTitleStateLengthの現在の状態（タスクのタイトルの総数）を取得し、addTitleLengthという定数に格納しています。この定数を使用して、タスクの総数を表示することができます。
    const addTitleLength = useRecoilValue(addTitleStateLength)
  return (
    <div className='taskField'>
        <div>{addTitleLength}個のタスクがあります</div>
        <ul>
          {/*「task という名前の引数が与えられたとき、それは Tasks という型を持つべきだ」という意味 */}
        {addTitle.map((task: Tasks) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default AddTask