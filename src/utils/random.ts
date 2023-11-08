export default class RandomUtils {
  static getRandomNumbers = (totalIndex: number, selectingNumber: number) => {
    let randomIndexArray = [];
    for (let i = 0; i < selectingNumber; i++) {
      //check if there is any duplicate index
      const randomNum = Math.floor(Math.random() * totalIndex) + 1;
      if (randomIndexArray.indexOf(randomNum) === -1) {
        randomIndexArray.push(randomNum);
      } else {
        //if the randomNum is already in the array retry
        i--;
      }
    }
    return randomIndexArray;
  };
}
