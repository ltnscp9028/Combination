js 순열, 조합 모듈입니다.
=============
> ### js에서 사용하기  
>>```
>>const combi = require('combination-js')
>>```
* * * 
> ### 순열 사용하기  
>    >next_permutation의 parameter는 array입니다.  
>>```
>>const arr = [1,2,3,4];
>>combi.next_permutation(arr);
>>```
>* * *
>   >next_permutation의 중간 반환값은 다음 순열이 담긴 배열입니다.  
> >next_permutation이 모두 끝나면 0을 반환합니다.
>>```
>>const arr=[1,2,3,4];  
>>do{
>>  let tmp=combi.next_permutation(arr);
>>  if(!tmp)breakconsole.log(tmp);
>> }while(1)
>>```
>>next_permutation의 중간 반환값이 필요 없는 경우 다음과 같이 작성할 수 있습니다.
>>```
>>const arr=[1,2,3,4];
>>do{
>>    
>>}while(combi.next_permutation(arr));
>* * *
>>### 조합 사용하기  
>>combination의 parameter는 n,k,arr,logic입니다.  
>>nCk에서의 n,k와 arr(배열)입니다.  
>>logic은 function이여야 합니다.
>>```
>>const arr = [1,2,3,4];
>>let i = 0;
>>combi.combination(arr.length,1,arr,()=>console.log(i++));
>>```