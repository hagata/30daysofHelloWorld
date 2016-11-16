# Attempt at a sudoku solver in haskell
this `.hs` script is a direct copy/walkthrough of the blog here, [http://paarsgames.nl/2013/07/29/sudoku-solver-in-haskell/](http://paarsgames.nl/2013/07/29/sudoku-solver-in-haskell/). Some of the search functions work, but it fails with the following errors

```
sudoku.hs:58:35: error:
    Variable not in scope: isZero :: Int -> [Int] -> t

sudoku.hs:66:29: error:
    • Variable not in scope: possibles :: Int -> [Int] -> [Int]
    • Perhaps you meant ‘impossibles’ (line 57)

sudoku.hs:74:52: error:
    • Variable not in scope: possibles :: t2 -> [Int] -> [t1]
    • Perhaps you meant ‘impossibles’ (line 57)
Failed, modules loaded: none.
```

TODO: fix errors, add missing functions.