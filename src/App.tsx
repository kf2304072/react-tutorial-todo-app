import './App.css';
import AddTask from './components/AddTask';
import InputTask from './components/InputTask';
/*
RecoilRootは、Recoilで提供される特別なコンポーネントです。このコンポーネントは、
Recoilのアトムやセレクタなどの状態を使用するためのコンテキスト（環境）を提供します。
RecoilRootはこのコンテキストを設定し、Recoilの状態をアプリケーション全体でアクセス可能にします。

RecoilRootはRecoilの機能を有効にする「スイッチ」のようなものです。この「スイッチ」をONにしておかないと、Recoilの機能は利用できません。
*/
import{ RecoilRoot} from "recoil";



function App() {
/*
<RecoilRoot>...</RecoilRoot>: AppコンポーネントのルートとしてRecoilRootを使用しています。これにより、子コンポーネントでRecoilの機能を使用できるようになります。

*/
  return (
    <RecoilRoot>
      <div className='task'> 
        <InputTask />
        <AddTask />
      </div>
    </RecoilRoot>
  )
}

export default App

/*
Recoilについて:Reactのための状態管理ライブラリです。
アトム (Atoms):これはRecoilの基本的な単位で、状態の部分を表します。アトムは変更や読み取りが可能で、
どのコンポーネントからでもアクセスできます。
セレクタ (Selectors): アトムや他のセレクタの値に基づいて動的なデータを提供するものです。
セレクタは、データ変換、フィルタリング、計算などのために使用されます。
Recoilは、大規模なReactアプリケーションにおいて、状態の管理や再レンダリングの最適化を簡単にするための機能を提供します。
*/
