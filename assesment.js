(function () {
	'use strict';
	//それぞれのID要素を取得(constは一度宣言したら変更不可)
	const userNameInput = document.getElementById("user-name");
	const hanteibotton = document.getElementById("button1");
	const resultDivided = document.getElementById("result-area");
	const tweetDivided = document.getElementById("tweet-area");
	
	//子ノードがあれば削除する
    function removeAllChildren(element) {
		while (element.firstChild) {
		element.removeChild(element.firstChild);
		}
    }
    //アロー関数
    userNameInput.onkeydown = (event) => {
	//===は型まで一致
    	if (event.keyCode === 13) {
		//スペル間違えている...
    		hanteibotton.onclick();
    	}
　　//アロー関数の罠"；"が必要
    };
	//診断するボタンを押したときに空白なら終了する
    	hanteibotton.onclick = () => {
		const userName = userNameInput.value;
		if (userName.length === 0){
			return;
		}
	//子ノード削除(すべて)
	removeAllChildren(resultDivided);
	//見出しの要素を作成
	const header = document.createElement('h3');
	//headerに"診断結果"を入れる
	header.innerText = "診断結果";
	//処理した結果を子ノードに追加する
	resultDivided.appendChild(header);
	
	//tweet機能実装のために必要だったが、未実施
	removeAllChildren(tweetDivided);
	const paragraph = document.createElement('p');
	const result = hantei(userName);
	paragraph.innerText = result;
	resultDivided.appendChild(paragraph);
	};
	
	
	//診断結果の配列
	const answers = [
	'{userName}のいいところは声です。{userName}の特徴的な声はみなを惹きつけ、心に残ります。',
	'{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
	'{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
	'{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
	'{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
	'{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
	'{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
	'{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
	'{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
	'{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
	'{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
	'{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
	'{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
	'{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
	'{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
	'{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
	];
	
	function hantei(userName){
		//letでの宣言は再度変更も可能
		let sumOfcharCode = 0;
		for (let i=0;i<userName.length;i++){
			sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
	}
	
	const index = sumOfcharCode % answers.length;
	let result = answers[index];
	//正規表現登場
	result = result.replace(/\{userName\}/g,userName);
	
	return result;
	}
	
	console.log(hantei('太郎'));
	console.log(hantei('太郎'));
	console.log(hantei('俊之'));
	
})();
