const successInFourSeconds = new Promise((resolve) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});

successInFourSeconds.then((result) => console.log(result));
