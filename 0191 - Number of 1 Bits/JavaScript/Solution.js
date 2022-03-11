/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    const str = n.toString(2)
    let res = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') res++
    }
    return res
};