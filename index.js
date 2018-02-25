const express = require('express')
const app = express()

app.get('/', (req, res) => res.json(snakeStats))

const snakeStats = {
	color: "#FFFFFF",
	name: "boopsnek",
	head_url: "http://cultofthepartyparrot.com/parrots/slowparrot.gif",
	taunt: "Have a nice day.",
	head_type: "dead",
	tail_type: "round-bum",
	secondary_color: "#000000"
}

app.post('/start', (req, res) => {
  res.json(snakeStats)
})

app.post('/move', (req, res) => {
  res.json({ 'move': 'up' })
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))
