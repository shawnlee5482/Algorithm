var arr = [5,1,6,4,8,3,7,9,2]

console.log(arr);

qsort(arr, 0, arr.length-1);

function swap(arr, a, b) {
	var temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;	
}

function partition(arr,left, right)
{
	var pivot = left;
	left++;
	while(left < right) {
		while(arr[left] <= arr[pivot] && left < right) left++; 
		while(arr[right] > arr[pivot] && left < right) right--;
		if(left < right) swap(arr, left, right);
		else break;
		left++; right--;
	}	

	swap(arr, left, pivot);	
	return left;
}

function qsort(arr, left, right)
{

	var pivot = partition(arr, left, right);
	qsort(arr, left, pivot-1);
	qsort(arr, pivot+1, right);
	console.log(arr);
}