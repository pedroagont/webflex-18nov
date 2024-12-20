// const getRandomNumber = (callback) => {
//   setTimeout(() => {
//     const randomNum = Math.floor(Math.random() * 100);
//     if (randomNum < 15) {
//       callback(new Error('randomNum less than 15: ' + randomNum), null);
//       return;
//     }

//     callback(null, randomNum);
//   }, 2000);
// };

// getRandomNumber((err, randomNum) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(randomNum);
// });

const getRandomNumberPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 100);
      if (randomNum < 50) {
        reject(new Error(`randomNum less than 50: ${randomNum}`));
      }

      resolve(randomNum);
    }, 2000);
  });
};

// ACCESING PROMISES USING THEN/CATCH
// getRandomNumberPromise()
// .then((randomNum) => randomNum * 2)
// .then((randomNumTimes2) => {
//   if (randomNumTimes2 < 130) {
//     throw new Error(`randomNumTimes2 less than 130: ${randomNumTimes2}`);
//   }
// })
// .catch((err) => console.log(err));

// ACCESING PROMISES USING ASYNC/AWAIT INTRO
const start = async () => {
  const randomNum = await getRandomNumberPromise();

  const randomNumTimes2 = (await randomNum) * 2;
  if (randomNumTimes2 < 130) {
    throw new Error(`randomNumTimes2 less than 130: ${randomNumTimes2}`);
  }

  console.log(randomNum, randomNumTimes2);
};

start();
