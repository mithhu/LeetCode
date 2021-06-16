/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x == 0 || x == 1) {
        return x
    }
    let low = 0;
    let high = x/2;
    
    while(low <= high) {
        const mid = low + Math.floor((high - low) / 2);;
        
        if ((mid * mid) > x) {
            high = mid - 1;
        } else if((mid * mid) < x) {
            if (((mid+1) * (mid+1)) > x) {
                return mid
            }
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
    
};