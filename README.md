# moment-timezone-jp

重たい設定ファイル抜きに、momentで日本のtimezoneをデフォルトにできます。
環境を選ばず利用できます。
主にbrowserでの用途(bundleしたりとか)に便利。
ソースは4行。読んでみてください。

momentの代わりに使うといいです。

# インストール
```bash
npm install moment-timezone-jp
```

# 使い方

```js
var moment = require('moment-timezone-jp');
moment();  // momentjsと同じインターフェイス
```

