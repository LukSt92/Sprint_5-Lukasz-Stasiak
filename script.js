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

const nickNameGenerator = (array) => {
  return array.map((person) => {
    if (
      typeof person.firstName === "string" &&
      typeof person.lastName === "string" &&
      person.firstName.trim().length >= 3 &&
      person.lastName.trim().length >= 3
    ) {
      let nickName = person.firstName.slice(-3).split("").reverse().join("");
      nickName += person.lastName.slice(0, 3).split("").reverse().join("");
      nickName = nickName.toLowerCase();
      nickName = nickName.charAt(0).toUpperCase() + nickName.slice(1);
      person.nickName = nickName;
    }
    return person;
  });
};

console.log(nickNameGenerator(people));
