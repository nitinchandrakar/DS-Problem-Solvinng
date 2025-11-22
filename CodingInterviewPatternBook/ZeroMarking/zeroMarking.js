/**
 * Zero Marking
 * Given a 2D matrix, if any element is 0, set its entire row and column to 0. Do it in place.
 * Example:
 * Input:
 * [
 *   [1,1,1],
 *   [1,0,1],
 *   [1,1,1]
 * ]
 * Output:
 * [
 *   [1,0,1],
 *   [0,0,0],
 *   [1,0,1]
 * ]
 */
var zeroStriping = function(arr){
	let isFirstRowZero = false;
	let isFirstColZero = false;
    const m = arr.length;
    const n = arr[0].length;
    
    /*Check if first row has any zero*/

	for(let i=0; i<m; i++){
		if(arr[i][0] == 0){
			isFirstRowZero = true;
			break;
		}
	}

	for(let i=0; i<n; i++){
		if(arr[0][i] == 0){
			isFirstColZero = true;
			break;
		}
	}

	/*Use first row and column matrix as marker and traverse the submatrix If any of the cell has 
		0 then set the corrosponding row and column in the firs row or column to 
	0*/

	for(let i=1; i<m; i++){
		for(let j=1; j<n; j++){
			if(arr[i][j] == 0){
				arr[0][j] = 0;
				arr[i][0] = 0;
			}
		}
	}

    /*Traverse the submatrix again and set the cell to 0 if the corrosponding row or column marker is 0*/
	for(let i=1; i<m; i++){
		for(let j=1; j<n; j++){
			if(arr[0][j] == 0 || arr[i][0] == 0){
				arr[i][j] = 0;
			}
		}
	}

	if(isFirstRowZero){
		for(let i=0; i<m; i++){
				arr[i][0] = 0;
		}
	}

	if(isFirstColZero){
		for(let i=0; i<n; i++){
				arr[0][i] = 0
		}

	}

    return arr;
}

module.exports = {zeroStriping};