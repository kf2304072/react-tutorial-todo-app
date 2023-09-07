import React from "react";
/*
useCallbackはReactのフックの1つ。
関数をメモ化するために使用します。これにより、特定の変数（依存配列内の変数）に変更がない限り、関数の再生成を防ぐことができます。

簡単にまとめると
useCallbackは、同じ関数を何度も作り直すのではなく、前に作ったものを「覚えておく」ための道具です。
*/
import { useCallback } from "react";
import { inputTitleState } from "../states/inputTitleState";
/*
useRecoilValueは、Recoilで管理している特定の状態（atomやselector）の現在の値を読み取るためのフックです。
useSetRecoilStateは、Recoilで管理している特定の状態を更新するための関数を提供するフックです。
*/
import { useRecoilValue, useSetRecoilState } from "recoil";
import { addTitleState } from "../states/addTitleState";
import "./InputTask.css";

// 0〜1未満の乱数字を取得して、数字を32進法に文字列に変換。前から３番目から文字を抽出
const getKey = () => Math.random().toString(32).substring(2); 

const InputTask = () => {
  /*
  useRecoilValueはinputTitleStateから現在の値を読み取るために使用されます。
  まとめると
  （inputTitleState）から値を読み取り、その値をローカル変数（inputTitle）に代入しています。このinputTitle変数を使用することで、コンポーネント内で状態の現在の値に簡単にアクセスできるようになります。
  */
  const inputTitle = useRecoilValue(inputTitleState);
  /*
  useSetRecoilState:指定されたRecoilのstate（この場合はinputTitleState）に値をセット（更新）する関数を提供します。
  コンポーネント内でRecoilのstateを更新したい場合、このフックを利用して更新関数を取得します。
  まとめると
  inputTitleStateというRecoilのstateを更新するための関数を提供しています。この関数をコンポーネント内で利用することで、状態を容易に更新することができます。
  */
  const setInputTitle = useSetRecoilState(inputTitleState);
  /*
  addTitleStateというRecoilのstateの現在の値を取得し、その値をaddTitleという変数に代入しています。コンポーネント内でこのaddTitle変数を利用することで、addTitleStateの値を簡単に参照できます。
  */
  const addTitle = useRecoilValue(addTitleState);
  /*
  addTitleStateというRecoilのstateを更新するための関数を取得し、その関数をsetAddTitleという変数に代入しています。このsetAddTitle関数を使用することで、コンポーネント内でaddTitleStateの値を更新することができます。
  */
  const setAddTitle = useSetRecoilState(addTitleState);

  const onChange = useCallback(
    //ChangeEventは、特に入力要素（例: <input>、<textarea>など）において、内容がユーザーによって変更されたときに発生するイベントを指します。
    //ReactとTypeScriptを組み合わせて開発する際、イベントハンドラ関数内のイベントオブジェクトの型を明示的に示すことが求められることがあります。このとき、React.ChangeEventのような型を使用して、どのようなイベントオブジェクトであるかを指定します。
    //<HTMLInputElement>: この部分はジェネリクスというTypeScriptの機能を使っており、ChangeEventの具体的な発生源を指定しています。この場合、イベントが発生したのは<input>要素、すなわちHTMLのinput要素であることを示しています。
    //[setInputTitle] この部分は、useCallbackの依存配列です。依存配列には、この関数内で参照している外部の変数や関数をリストアップします。この場合、setInputTitleが変更されると（理論的には変わることはほとんどありませんが）、onChange関数も再生成されます。
    //onChangeは、<input>要素の内容が変わるたびに実行される関数です。ユーザーが入力内容を変更すると、その新しい入力内容をsetInputTitleを使って状態に保存します。
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
    },
    [setInputTitle]
  );

  const handleClick = () => {
    setAddTitle([...addTitle, { id: getKey(), title: inputTitle }]);
    setInputTitle("");
  };

  return (
    <div className="inputField">
      {/* 再レンダリングは1度だけ */}
      <input
        className="inputTitle"
        type="text"
        onChange={onChange}
        value={inputTitle}
      />
      <button type="button" onClick={handleClick} className="addButton">
        追加
      </button>
    </div>
  );
};

export default InputTask;