/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    // Write your code here
    let seqList = [...new Array(n)].map( el => []);
    let lastAnswer = 0;
    let final = [];
    for(let i of queries){
        let index = ( i[1] ^ lastAnswer) % n;
        if( i[0] == 1){
            seqList[index].push(i[2]);
        }
        else{
            lastAnswer = seqList[index][ i[2] % seqList[index].length];
            final.push(lastAnswer);
        }
    }
    return final;
}
