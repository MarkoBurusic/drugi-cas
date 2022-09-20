class Osoba {
  ime;
  prezime;
  godiste;
  constructor(ime, prezime, godiste){
    this.ime = ime;
    this.prezime = prezime;
    this.godiste = godiste;
  }
  pozdrav(){
    console.log(`Zdravo ja sam ${this.ime}. Imam ${2022-this.godiste} godina`);
  }
}
//

// class Nastavnik{
//   ime;
//   prezime;
//   godiste;
//   predmet;

//   constructor(ime, prezime, godiste, predmet){
//     this.ime = ime;
//     this.prezime = prezime;
//     this.godiste = godiste;
//     this.predmet = predmet;
//   }
//     pozdrav(){
//       console.log(`Zdravo ja sam ${this.ime}. Imam ${2022-this.godiste} godina i predajem ${this.predmet}`);
//     }
//     dajOcenu(){
//     console.log(Math.round(Math.random() *5));
//     }
// }
// let profesor = new Nastavnik(`Milan`, `Vukadin`, 1987, `programiranje`);
// profesor.pozdrav();
// profesor.dajOcenu();

//class Nastavnik extends Osoba{



 class Ucenik extends Osoba{
   constructor(ime, prezime, godiste, sport){
     super(ime, prezime, godiste);
     this.sport = sport;
   }

 }
 let ucenik1 = new Ucenik(`Uros`, `Straka`, 2004, `fudbal`);
 ucenik1.pozdrav();
