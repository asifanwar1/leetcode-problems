const sleep = async (millis) => {
 
    let t = Date.now();

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log(Date.now() - t);
            resolve();
        }, millis);
    })

  
}

sleep(200);