function formingMagicSquare(s) {
    const theMagic = 
  [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
  ];
    let lowest = 100;
    for(let i = 0; i<theMagic.length; i++){
        let totalCost = 0;
        for(let j = 0; j < s.length; j++){
            for(let t = 0; t < s[j].length; t++){
                totalCost += Math.abs(s[j][t] - theMagic[i][j][t]);
            }
        }
        if(totalCost < lowest){
            lowest = totalCost;
        }
    }
    return lowest;
}
