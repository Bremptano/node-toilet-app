const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

server.listen(port, () => {
    console.log("App is running on port " + port);
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
