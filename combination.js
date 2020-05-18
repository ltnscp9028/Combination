let tempVector = [];
let v = [];
let check_st = [];
let check=0;
let n,k;

function make_pick(input_n,input_k){
    n=input_n;
    k=input_k;
      // for (i = 0; i < n; i++)v.push(i);
      for (i = 0; i < k; i++)tempVector.push(1);
      for (i = 0; i < n - k; i++)tempVector.push(0);
      tempVector.sort();
  }


  function combination(input_n,input_k,arr,logic){
    if(arguments.length==3){
        logic = () => {};
    }
    // tempVector = JSON.parse(JSON.stringify(arr));
    // console.log(tempVector);
    v = JSON.parse(JSON.stringify(arr));
    make_pick(input_n,input_k);
    do {
        for (i = 0; i < tempVector.length; i++) {
            if (tempVector[i] == 1) check_st.push(v[i]);
        }
        logic();
        // console.log(tempVector);
        // console.log(check_st);
        check_st.length = 0;
        // check++;
        
    } while (next_permutation());
  }


  function next_permutation(vv,arr_length){
    // console.log(arguments.length);
    if(arguments.length==2){
        n = arr_length;
        tempVector = vv;
    }

    var idx = -1;
    for(var i=0;i<n-1;i++)
        if(tempVector[i]<tempVector[i+1])idx=i;
    if(idx<0)return 0;
    for(var i=n-1;i>idx;i--){
        if(tempVector[idx] <tempVector[i]){
            var tmp = tempVector[idx];
            tempVector[idx] = tempVector[i];
            tempVector[i] = tmp;
            break;
        }
    }
    for(var i=idx+1;i<(n+1+idx)/2 ; i++){
        var tmp = tempVector[i];
        tempVector[i] = tempVector[n - (i-idx)];
        tempVector[n - (i-idx)] = tmp;
    }
    // console.log(tempVector);
    return tempVector;
}

module.exports = {combination,next_permutation};