const express = require('express');
const mysql = require('mysql2');

const app = express();

app.set("view engine", "ejs");
// staticメソッドを利用し、指定ディレクトリ以下の静的ファイルを読み込む
app.use("/public", express.static(__dirname + "/public"));

// routeの設定
app.use("/top", require("./routes/top.js"));
// app.use("/reserve/date", require("./routes/index.js"));
app.use("/reserve/contents", require("./routes/reservationContents.js"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Akpts0136',
  database: 'reservation_app'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting:' + err.stack);
    return;
  }
  console.log('success');
});

app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM user',
    (error, results) => {
      console.log(results);
      res.render('index.ejs');
    }
  );
});

app.listen(3000);