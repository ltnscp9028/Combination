let tempVector = [];
let v = [];
let check_st = [];
let check=0;
let n,k;


const make_pick = (input_n,input_k) => {
  n=input_n;
  k=input_k;
    for (i = 0; i < n; i++)v.push(i);
    for (i = 0; i < k; i++)tempVector.push(1);
    for (i = 0; i < n - k; i++)tempVector.push(0);
    tempVector.sort();
}


const combination = (input_n,input_k,logic) => {
  make_pick(input_n,input_k);
    do {
        for (i = 0; i < tempVector.length; i++) {
            if (tempVector[i] == 1) check_st.push(v[i]);
        }
        logic();
        check_st.length = 0;
        // check++;
        console.log(tempVector);
    } while (next_permutation());
  }

const next_permutation = () => {
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
    return 1;
}

module.exports = {combination};