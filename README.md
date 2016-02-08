# moment-timezone-jp

[momentjs](http://momentjs.com)で日本のtimezoneをデフォルトにできます。

環境を選ばず利用できます。
主にbrowserでの用途(bundleしたりとか)に便利。

ちなみにソースは4行。
カスタマイズしたければソースをマネしたほうが早いですね。

momentの代わりに使うといいです。

## どのぐらい軽量になったのか

browserifyしたファイルを比べてみました。

```text
before 312941 byte # 全timezoneの設定がある場合
after  133262 byte # Japanの設定だけの場合
```

175kbほど削減できました。
timezoneの全設定JSONファイルがそれぐらい大きいのです。

当然、そのファイルを読んでtimezoneを解釈する時間もなくなりますので、
ユーザーに優しいといえます。

機能は日本で使う限り、当然ながら、元のmoment-timezoneと全く同等です。


## インストール
```bash
npm install moment-timezone-jp
```

## 使い方

```js
var moment = require('moment-timezone-jp');
moment();  // momentjsと同じインターフェイス
```
