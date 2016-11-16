import Data.List

-- column definition
column n = rest n 0
         where rest _ 9 = []
               rest n i = n : rest (n + 9) (i + 1)

-- Row definition
row :: Int -> [Int]
row n = startpoint : rest startpoint 1
      where startpoint = (n * 9)
            rest _ 9 = []
            rest n i = n + i : rest n (i + 1)

-- Block definition
block :: Int -> [Int]
block n = rest startpoint 0 0 0
  where startpoint | n <= 2 = n * 3
                   | n <= 5 = 27 + (n * 3 - 9)
                   | n <= 8 = 54 + (n * 3 - 18)
        rest _ _ _ 9 = []
        rest startpoint x n i = number : rest startpoint nextX nextN (i + 1)
                              where number = startpoint + n + x
                                    nextX = if n == 2 then x + 9 else x
                                    nextN = if n == 2 then 0 else n + 1

-- Search block
searchBlock :: Int -> [Int]
searchBlock x = search x 0
              where search _ 9 = error "Could not find block"
                    search x n = if x `elem` blk then blk else search x (n + 1)
                               where blk = block n

-- Seach Row
searchRow :: Int -> [Int]
searchRow x = search x 0
            where search _ 9 = error "Could not find row"
                  search x n = if x `elem` rw then rw else search x (n + 1)
                             where rw = row n

-- Seach column
searchColumn :: Int -> [Int]
searchColumn x = search x 0
               where search _ 9 = error "Could not find column"
                     search x n = if x `elem` col then col else search x (n + 1)
                                where col = column n

-- Seach Cell
searchCell :: Int -> [Int]
searchCell n = sort $ nub $ rw ++ col ++ blk
             where rw  = searchRow n
                   col = searchColumn n
                   blk = searchBlock n

-- Check for impossible solutions. aka, nums the cell are not.
impossibles :: Int -> [Int] -> [Int]
impossibles n puzzle = if zero then getImp else [1..9]
                     where zero = isZero n puzzle
                           getImp = sort $ nub $ filter (/= 0) (getValues puzzle (searchCell n) 0)
                                  where getValues [] _ _         = []
                                        getValues (x:xs) cells i = if i `elem` cells then x : nextVal else nextVal
                                                                 where nextVal = getValues xs cells (i + 1)

-- Solve for cell
solveCell :: Int -> [Int] -> Int
solveCell n puzzle = solve (possibles n puzzle)
                   where solve [] = 0
                         solve (v:vs) | not (v `elem` (pos searchBlock))  = v
                                      | not (v `elem` (pos searchRow))    = v
                                      | not (v `elem` (pos searchColumn)) = v
                                      | otherwise                         = solve vs
                         pos f = pos (filter (/= n) (f n))
                               where pos []      = []
                                     pos (x:xs)  = possibles x puzzle ++ pos xs


-- Main
-- Solve a puzzle
solveSudoku :: [Int]
solveSudoku = solve grid 0
            where solve puzzle 5000 = puzzle
                  solve puzzle i = if all (/= 0) puzzle
                                   then puzzle
                                   else solve (loop puzzle puzzle 0) (i + 1)

                  loop _ [] _          = []
                  loop puzzle (0:xs) n = solveCell n puzzle : loop puzzle xs (n + 1)
                  loop puzzle (x:xs) n = x : loop puzzle xs (n + 1)

-- Prettyprint
prettyPrint :: IO ()
prettyPrint = do
              print verticalLine
              myprint solveSudoku 0
            where myprint [] _   = do
                                   print verticalLine
                  myprint grid 3 = do
                                   print verticalLine
                                   myprint grid 0
                  myprint grid n = do
                                   print (line (take 9 grid) "|" 0)
                                   myprint (drop 9 grid) (n + 1)

                  line [] str _     = str ++ " |"
                  line x  str 3     = line x (str ++ " |") 0
                  line (x:xs) str n = line xs (str ++ " " ++ (show x)) (n + 1)

                  verticalLine = replicate 25 '-'

-- Test Data
grid = [5, 3, 0,  0, 7, 0,  0, 0, 0,
        6, 0, 0,  1, 9, 5,  0, 0, 0,
        0, 9, 8,  0, 0, 0,  0, 6, 0,

        8, 0, 0,  0, 6, 0,  0, 0, 3,
        4, 0, 0,  8, 0, 3,  0, 0, 1,
        7, 0, 0,  0, 2, 0,  0, 0, 6,

        0, 6, 0,  0, 0, 0,  2, 8, 0,
        0, 0, 0,  4, 1, 9,  0, 0, 5,
        0, 0, 0,  0, 8, 0,  0, 7, 9]