// Tapşırıq 1: Massivləri Spread ilə birləşdirmək
// İki massiv yaradın: arr1 = [1, 2, 3] və arr2 = [4, 5, 6].
// Spread operatorundan istifadə edərək arr1 və arr2-ni combinedArr adlı yeni bir massivə birləşdirin.
// Spread edərək combinedArr massivinə bir neçə əlavə rəqəm əlavə edin.

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combinedArr = [...arr1, ...arr2, 7, 8, 9];
// console.log(combinedArr);

// Tapşırıq 2: Massivləri Kopyalamaq və Dəyişmək
// Bir massiv yaradın: originalArr = [10, 20, 30].
// Spread operatorundan istifadə edərək originalArr-in kopyasını yaradın.
// Kopyaya yeni element əlavə edin, amma orijinal massivi dəyişmədən saxlayın.

// const originalArr = [10, 20, 30];
// const [...spreed] = originalArr;
// const copyOrginalArr = [...spreed,40,50,60];
// console.log(first,copyOrginalArr);
// console.log(originalArr);

// Tapşırıq 3: Obyektləri Spread ilə birləşdirmək
// İki obyekt yaradın:
// const person = { name: "John", age: 25 };
// const job = { title: "Developer", company: "TechCorp" };
// Spread operatorundan istifadə edərək person və job obyektlərini profile adlı yeni bir obyektə birləşdirin.
// Nümunə Nəticə:
// profile = { name: "John", age: 25, title: "Developer", company: "TechCorp" };

// const person = { name: "John", age: 25 };
// const job = { title: "Developer", company: "TechCorp" };

// const profile = { ...person, ...job };
// console.log(profile);

// Tapşırıq 4: Funksiyalarda Rest Operatoru
// sumNumbers adlı bir funksiya yaradın ki, o, istənilən sayda arqument qəbul etsin və rest operatorundan istifadə edərək bu rəqəmlərin cəmini qaytarsın.
// Nümunə Nəticə:
// sumNumbers(1, 2, 3, 4); // 10
// sumNumbers(5, 10); // 15

// function sumNumbers(...rest) {
//   return rest.reduce((sum, num) => sum + num);
// }

// console.log(sumNumbers(4, 5, 20, 40));

// Tapşırıq 5: Rest ilə Destructuring
// Verilmiş massiv arr = [1, 2, 3, 4, 5]-dən istifadə edərək, destructuring ilə ilk iki elementi a və b dəyişənlərinə təyin edin və qalan elementləri restArr adlı yeni bir massivə yığın.
// Nümunə Nəticə:
// a = 1;
// b = 2;
// restArr = [3, 4, 5];

// const arr = [1, 2, 3, 4, 5];
// const [a, b, ...rest] = arr;
// const restArr = [...rest];
// console.log(restArr);

// Tapşırıq 6: Funksiya Parametrlərində Rest
// introduce adlı bir funksiya yaradın ki, o, bir name və istənilən sayda hobbi qəbul etsin və rest operatorundan istifadə etsin.
// Funksiya ad və hobbilər haqqında bir mesaj çap etməlidir.
// Nümunə Nəticə:
// js
// introduce('Alice', 'oxumaq', 'piyada gəzmək', 'kod yazmaq');
// Çıxış: "Salam, mənim adım Alice və mən oxumağı, piyada gəzməyi, kod yazmağı sevirəm."

// function introduce(name,...hobi){
//     return console.log(`Salam menim adim, ${name}dir ve men ${hobi}i sevirem`);
// }
// introduce("Afsana","kitab oxumaq","film izlemek","yemek bisirmey")

// Tapşırıq 7: Obyekt Destructuring-də Spread və Rest
// Verilmiş obyekt:
// const person = { name: "Alice", age: 28, city: "Paris", country: "France" };
// Obyekti destructuring ilə name və age dəyişənlərinə təyin edin və qalan xüsusiyyətləri rest operatoru ilə address adlı yeni bir dəyişənə toplayın.
// Nümunə Nəticə:
// name = "Alice";
// age = 28;
// address = { city: "Paris", country: "France" };

// const person = { name: "Alice", age: 28, city: "Paris", country: "France" };
// const { name, age, ...rest } = person;
// const address={...rest}
// console.log(address);
