/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let res = 0;
    
    for (let i = 0; i < rating.length; i++) {
        let leftSm = 0;
        let rightSm = 0;
        let leftLr = 0;
        let rightLr = 0;
        for (let j = 0; j < i; j++) {
            //left
            //sm
            if (rating[i] > rating[j]) {
                leftSm++;
            }
            if (rating[i] < rating[j]) {
                leftLr++;
            }
        }
        
        for (let j = i + 1; j < rating.length; j++) {
            //left
            //sm
            if (rating[i] > rating[j]) {
                rightSm++;
            }
            if (rating[i] < rating[j]) {
                rightLr++;
            }
        }
        res += leftSm * rightLr + leftLr * rightSm;
    }
    
    return res;
    
};