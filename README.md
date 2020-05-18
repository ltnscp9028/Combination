js 순열, 조합 모듈입니다.
=============
> js에서 사용하기  
>>```const combi = require('combination-js')```
* * * 
> 조합 사용하기  
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


