const getRow = (rowIndex) => {
	if (rowIndex === 0) return [1];
	
	let numArr = [[1],];



	for(let i = 1; i < rowIndex + 1; i++){
		
		let newRow = [1,1];
		
		let x = numArr[0]


		for(let j = 0; j < x.length; j++){
			let l = x[j] + x[j+1]


			if(x[j+1] === undefined){
				break;
			}

			
			newRow.splice(1, 0, l)
		}
		numArr.shift();
		numArr = [...numArr, newRow];
		
	
	}

	return numArr.flat();
}


let num = 3;
console.log(getRow(num));



//By Chtagpt
// This function generates the kth row of Pascal's triangle
// using an iterative approach. It starts with the first row and builds

const getRow2 = (rowIndex) => {
    const row = [1]; // Start with the first element

    // Build the row one element at a time
    for (let i = 1; i <= rowIndex; i++) {
        // Update from right to left to avoid overwriting values needed later
        for (let j = row.length - 1; j >= 1; j--) {
            row[j] = row[j] + row[j - 1];
        }
        row.push(1); // Every row ends with a 1
    }

    return row;
}



