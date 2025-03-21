function findMissingNumber(arr: number[]): number {
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2; 
    let actualSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      actualSum += arr[i]; 
    }
  
    return expectedSum - actualSum; 
  }
  
  console.log(findMissingNumber([1, 2, 4, 5, 6])); 
  