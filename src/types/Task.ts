/*
type キーワードは TypeScript の一部で、新しい型エイリアスを作成するために使用されます。
型エイリアスは、既存の型に新しい名前を与えることができる機能
「型エイリアス」:
型 (Type): データの「形」や「種類」を指します。例えば、数字はnumber型、文字列はstring型という具体的な「形」や「種類」を持っています。
エイリアス (Alias): 別名、あるいはニックネームのようなもの
これを組み合わせると、型エイリアスは、既存のデータの「形」や「種類」に、新しい名前、あるいはニックネームをつけることができる機能

Tasks をどこか別の場所で使用すると、それは自動的に id と title という2つの文字列プロパティを持つオブジェクト型として解釈されます

全体の要約:
このコードは、Tasksという新しい型を定義しています。このTasks型はオブジェクトを表すもので、2つの文字列型のプロパティ（idとtitle）を持つことが指定されています。さらに、この型は外部のファイルからも利用できるように公開（export）されています。
*/
export type Tasks = {
    id: string;
    title: string;
};