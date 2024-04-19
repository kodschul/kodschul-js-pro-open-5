async function expensiveCalculation() {
  await new Promise((r) => setTimeout(r, 1500));

  return 1000;
}

async function doWorkSync(x) {
  return expensiveCalculation().then((value1) => {
    console.log("Expensive calculation done: ", value1);

    return expensiveCalculation().then((value2) => {
      return value1 * value2;
    });
  });

  const value1 = await expensiveCalculation();
  const value2 = await expensiveCalculation();

  return value1 * value2;
}

async function doWork() {
  let values = await Promise.all([
    expensiveCalculation(),
    expensiveCalculation(),
    expensiveCalculation(),
  ]);

  console.log({ values });
  console.log("Resume with code");
}

async function x() {
  console.log(await doWorkSync(10));
}

x();
