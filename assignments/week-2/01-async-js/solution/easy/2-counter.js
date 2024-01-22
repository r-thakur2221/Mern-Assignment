function counter(n){
    let i=0;
    while(i<=n){
        count(i);
        i++;
    }
}

async function count(i){
    return await new Promise((resolve,reject)=>{
        try{
            setTimeout(()=>{
                console.log(i);
                resolve();
            },1000)
        }
        catch(e){
            reject();
        }
    })
}

counter(5);