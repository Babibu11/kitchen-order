import { useState } from 'react';
import './App.css';

function App() {
const today = new Date();
const dateStr = `${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;
const [customerCount, setCustomerCount] = useState(1);
const [selectedItems, setSelectedItems] = useState([]);

const menu = [
{ name: '地鶏モモ', price: 600 },
{ name: '地鶏ハラミ', price: 600 },
{ name: 'ニコニコセット（モモ1パック＋ハラミ1パック）', price: 1000 },
{ name: 'ニコニコセット（モモ2パック）', price: 1000 },
{ name: 'ニコニコセット（ハラミ2パック）', price: 1000 },
{ name: '牡蠣飯', price: 800 },
{ name: 'モモ丼', price: 800 },
{ name: 'ハラミ丼', price: 800 },
{ name: 'ウインナー1本', price: 300 },
{ name: 'プレモル生ビール', price: 700 },
{ name: 'レモンサワー', price: 500 },
{ name: '角ハイボール', price: 500 }
];

const handleSelect = (itemName) => {
setSelectedItems((prev) =>
prev.includes(itemName)
? prev.filter((item) => item !== itemName)
: [...prev, itemName]
);
};

const handleSubmit = () => {
alert(`注文者名: ${dateStr}-${customerCount}人目\n注文内容:\n${selectedItems.join('\n')}`);
setCustomerCount((prev) => prev + 1); // 次の人に進む
setSelectedItems([]); // 選択リセット
};

return (
<div className="App">
<h1>注文受付</h1>
<p>注文者名: {dateStr}-{customerCount}人目</p>

<h2>メニュー（複数選択OK）</h2>
<ul>
{menu.map((item) => (
<li key={item.name}>
<label>
<input
type="checkbox"
checked={selectedItems.includes(item.name)}
onChange={() => handleSelect(item.name)}
/>
{item.name} ¥{item.price}
</label>
</li>
))}
</ul>

<button onClick={handleSubmit}>注文する</button>
</div>
);
}

export default App;