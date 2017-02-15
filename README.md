###15 Puzzle

[Click here for more information](https://en.wikipedia.org/wiki/15_puzzle)

Instructions to play:

Use arrow keys to move cursor and hold down the spacebar while pressing arrow keys to move tiles. 

```bash
rake run #To run the server on 0.0.0.0:3000
rake compile #To compress the javascript into one file
rake watch #To watch your javascript files and compress as you edit
```

I did not use a framework for JS testing.  To run tests uncomment ```RunTests``` line in [index.html](https://github.com/JamesAnthonyLow/15-Puzzle/blob/master/public/index.html) and ```"tests"``` in [config.json](https://github.com/JamesAnthonyLow/15-Puzzle/blob/master/public/js/config.json)
