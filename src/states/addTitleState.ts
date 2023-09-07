import { Tasks } from "../types/Task";
/*
atom:アプリケーションの最小単位の状態を表します.ユーザーの名前やタスクリストのようなデータを保持するための箱のようなものです。
データを保持する役割があります。データは自分で変えることができます。
アプリケーションの基本的な状態（例：ユーザー情報、リストのアイテムなど）を管理するために使用される。

selector:atomや他のselectorのデータをもとに新しいデータを計算する機能です。例えば、タスクリストの中から完了したタスクだけを取り出すといった計算をすることができます。データを保持するのではなく、データを加工する役割があります。
結果は自分で変えることができません。selectorの結果は、元となるデータが変わると自動的に変わります。

atomはアプリの状態（データ）を持ち、selectorはそのデータを元に何らかの計算や変換を行う役割があることがわかります。

*/
import { atom, selector } from "recoil";

/*
atom<Array<Tasks>>は「Tasks型のオブジェクトを要素として持つことができる配列の状態を管理するatom」という意味になります。


Recoilのatomを定義する際には、少なくともkeyとdefaultという二つのプロパティが必須です。
key:このkeyはアプリケーション内で一意でなければなりません。つまり、同じkeyを持つ2つのatomやselectorを定義することはできません。
default:atomの初期値を設定します。この値は、初めてatomを読み取る際に取得される値となります。
これらのプロパティ以外にも、atomをより詳細にカスタマイズするための追加のオプションやプロパティが存在する場合があります。しかし、keyとdefaultは最も基本的で、atomの定義の際に必須のものです。

Tasksのidとtitleはデータ構造を表している
atomのkeyとdefaultは状態管理のためのメタ情報を表しています。
addTitleStateというatomのdefaultプロパティが空の配列として定義されていますが、この配列の中にはTasks型のオブジェクト、すなわちidとtitleを持つオブジェクトが入ることを想定しています。
atomの型はArray<Tasks>、つまりTasks型のオブジェクトの配列です。
それは、Tasks型が{ id: string; title: string; }として定義されているためです。
空の配列の中に、後から{ id: "...", title: "..." }のようなオブジェクトが追加されることを想定しています。

簡潔に説明すると、addTitleStateという名前の状態を定義して、この状態はTasks型の配列を持ち、初期値として空の配列[]を持っています
*/
export const addTitleState = atom<Array<Tasks>>({
  key: "addTitleState",
  default: [],
});

/*
selector<number> における <number> は、この selector が返す値の型が number（数値）であることを示しています。具体的には、この selector が計算する値や保持する値が数値であることを明示的に示しています。
selector は2つの主要なプロパティを持っています：key と get。ここでの get は、状態を計算するための関数を示しています。
recoilのselector関数内でgetは非常に頻繁に使用されます。このget関数を使用することで、他のatomやselectorの状態を取得することができます。
({ get })は、selectorのget関数内で他のatomやselectorの状態を取得するために使用される、recoilに特有のパターンです。

*/
export const addTitleStateLength = selector<number>({
  key: "addTitleStateLength",
  get: ({ get }) => {
    {/*addTitleStateというatomから現在の値を取得
       それを新しい変数addTitleNumberに代入
        addTitleNumber変数は、Tasks型のオブジェクトの配列として型が注釈されています。
    */}
    const addTitleNumber: Array<Tasks> = get(addTitleState);
    {/*「?」そのプロパティやメソッドが存在するかどうかを安全に確認するためのものです。
        特定のプロパティやメソッドが存在しない場合にエラーを発生させることなくundefinedを返します。
        簡単に言えば、オブジェクトの深い階層のプロパティにアクセスしたいけど、その途中で何かのプロパティが存在しないかもしれないとき、エラーを防ぐために「?」を使って安全にアクセスする方法です。

        addTitleNumber?.length: オプショナルチェイニング（?.）を使用しています。これはaddTitleNumberが存在すればそのlengthプロパティの値を取得し、存在しなければundefinedを返します。

        || 0: こちらは論理的なOR演算子。左側の値（この場合はaddTitleNumber?.length）がfalsy（falseに評価される値、例：null, undefined, 0, 空文字列""など）の場合、右側の値（この場合は0）が評価されます。

        要約すると「もしaddTitleNumberが存在して、かつlengthプロパティがtruthyな値を持っていればその値を返し、それ以外の場合は0を返す」という動作

        最終的な要約は「RecoilのセレクタaddTitleStateLengthを定義しており、これはaddTitleStateの状態からタスクの数（配列の長さ）を取得する機能を持っています。タスクが存在しない場合は、0を返します。」
  */}
    return addTitleNumber?.length || 0;
  },
});
