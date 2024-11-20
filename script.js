const people = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: "Roman",
    lastName: "Kowalski",
  },

  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];

const nicknameGenerator = () => {
  return people.map((person) => {
    if (
      typeof person.firstName === "string" &&
      typeof person.lastName === "string" &&
      person.firstName.trim().length >= 3 &&
      person.lastName.trim().length >= 3
    ) {
      let nickname = person.firstName.slice(-3).split("").reverse().join("");
      nickname += person.lastName.slice(0, 3).split("").reverse().join("");
      nickname = nickname.toLowerCase();
      nickname = nickname.charAt(0).toUpperCase() + nickname.slice(1);
      person.nickname = nickname;
    }
    return person;
  });
};

const ageGenerator = () => {
  return nicknameGenerator().filter((people, index) => {
    if (people.nickname) {
      let age = people.firstName.length + people.lastName.length;
      if (age % 2 === 0) people.age = age;
      else {
        age = Object.keys(people)
          .map((key) => key.length)
          .reduce((curr, next) => curr + next, 0);
        people.age = index === 0 ? age / 1 : age / index;
      }
      return people;
    }
  });
};

const mostCommonLetterGenerator = () => {
  return ageGenerator().map((person) => {
    const analyzer = {};
    let max = 0;
    let maxChar = "";
    const toProcess = Object.values(person)
      .filter((string) => typeof string === "string")
      .join("")
      .toLowerCase()
      .split("")
      .forEach((char) => {
        if (!analyzer[char]) analyzer[char] = 1;
        else analyzer[char]++;
      });
    for (let char in analyzer) {
      if (analyzer[char] > max) {
        max = analyzer[char];
        maxChar = char;
      } else if (analyzer[char] === max) {
        if (char.charCodeAt() < maxChar.charCodeAt()) {
          max = analyzer[char];
          maxChar = char;
        }
      }
      person.mostCommonLetter = `{ letter: '${maxChar}', count: ${max} }`;
    }
    return person;
  });
};
