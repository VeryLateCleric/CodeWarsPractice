class SmallestIntegerFinder {
    findSmallestInt(args) {
      if (args.length ===0) {
        return null
      }

      let smallest = args[0];

      for (let i = 1; i < args.length; i++) {
        if (args[i] < smallest) {
          smallest = args[i]
        }
      }
      return smallest;
    }
  }
const args1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const args2 = [1, -15, -27, 242, 7, 49000];

console.log(SmallestIntegerFinder(args1));
console.log(SmallestIntegerFinder(args2));