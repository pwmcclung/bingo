function bingo(a) {
  let bingo = [2, 9, 14, 7, 15 ]
 if (bingo.every( r => a.includes(r))){
    return "WIN"
  }else{
    return 'LOSE'
  }
       
}
