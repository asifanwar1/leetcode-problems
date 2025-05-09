const generate = (numRows) => {
	if (numRows === 1) return [[1]];
	
	let numArr = [[1],];



	for(let i = 1; i < numRows; i++){
		
		let newRow = [1,1];
		let x = numArr[i-1]
		

		for(let j = 0; j < x.length; j++){
			let l = x[j] + x[j+1]


			if(x[j+1] === undefined){
				break;
			}

			newRow.splice(1, 0, l)
		}
		numArr.push(newRow)

	}

	return numArr;
}


let num = 5;
console.log(generate(num));


