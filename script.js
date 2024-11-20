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

// Treść zadania:
// Napisz funkcję przetwarzającą tablicę obiektów osób. Funkcja powinna generować pseudonim na podstawie określonych zasad i dodawać go do każdego obiektu osoby, gdy jest to możliwe.
// Nie nadpisuj danych wejściowych.
// Wytyczne:
// Pobierz trzy ostatnie trzy litery imienia, odwróć ich kolejność i zapisz wynik
// Weź pierwsze trzy litery nazwiska, odwróć ich kolejność i dodaj to do wyniku z poprzedniego punktu
// Sformatuj połączony wynik tak, aby pseudonim zaczynał się od wielkiej litery, a reszta liter była mała.
// Dodaj ten pseudonim jako nową właściwość do obiektu osoby.
// Jeśli firstName lub lastName ma mniej niż trzy znaki (pomiń znaki białe) lub nie jest typu string, nie dodawaj właściwości pseudonimu dla tej osoby.

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

// Stwórz funkcję, która przetworzy tablicę osób z pierwszego zadania (Należy wykorzystać wynik wywołania funkcji z pierwszego zadania),
//  zwracając tylko osoby, które mają przypisany pseudonim oraz dodając nowe pole age do każdej osoby.

// Wytyczne:

// Filtruj tablicę, aby zawierała tylko osoby z pseudonimem.

// Oblicz liczbę liter w imieniu i nazwisku każdej osoby.

// Jeśli suma liter jest parzysta, przypisz ją jako age. Jeśli nieparzysta, age oblicz jako sumę liter w kluczach firstName ,
// lastName i nickname pobieranych dynamicznie podzieloną przez indeks osoby w tablicy ( jeżeli index wynosi 0 zastąp go 1 ).
// Użyj odpowiedniej metody do wyciagnięcia kluczy z obiektu oraz reduce w notacji łańcuchowej do zliczenia liter w kluczach.

// Dodaj pole age do każdego obiektu osoby.

// Zadbaj o to by wiek był zaokrąglony w górę (odszukaj potrzebnej informacji w internecie).

const ageGenerator = (array) => {
  const peopleWithAge = array.filter((people, index) => {
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
  return peopleWithAge;
};

console.log(ageGenerator(nicknameGenerator()));
