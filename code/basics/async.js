let ans = 0;

async function sleep(s) {
  let promise = new Promise((resolve, reject) => {
    // do this

    setTimeout(() => {
      resolve("done");
    }, s * 1000);
  });

  return await promise;
}

async function main() {
  let startTime = process.hrtime();

  //   let response1 = await sleep(2);
  //   let response2 = await sleep(2);

  let responses = await Promise.all([
    sleep(2),
    sleep(2),
    sleep(2),
    sleep(2),
    sleep(2),
  ]);

  console.log(responses);

  let duration = process.hrtime(startTime)[0];
  console.log(duration);
}

main();
