# Lapukai 🍃

Web aplikacija ligoninių (bankų, pašto skyrių ir t.t.) eilių sudarymui lankytojams skiriant lapukus ant kurių nurodytas laukti likęs laikas. Tai stojimo į [NFQ akademiją](https://www.nfq.lt/apie-akademija) užduotis.

## Instrukcija

* Jūsų kompiuteryje parsisiuntus visą projektą, pradėkite įjungdami index.html failą.
* [Github pages](https://matassp.github.io/lapukai/) - patalpinta live versija.
* Spauskite mygtuką "Valdyti", pateksite į administravimo puslapį.
* Spauskite mygtuką "Užkrauti Pavyzdinius Duomenis", taip bus užregistruoti lankytojai iš JSON failo. Arba kurkite po vieną lapuką pasirinkdami specialistą ir įvedę kliento vardą.
* Paspaudę ant logotipo (Lapukai 🍃), sugrįšite į švieslentę, užpildytą klientais.
* Laiko lentelėse matysite užrašą "NaN min" - tai nėra klaida, paprasčiausiai aplikacija dar nežino, kiek vidutiniškai užtrunka apsilankymas pas specialistą. Aplikaciją tą išmoks ilgainiui, aptarnaujant klientus aptarnavimo puslapyje (meniu mygtukas "Aptarnauti").
* Norėdami stebėti vieną lapuką, paspaudę "Tavo Lapukas", įveskite lapuko numerį ir spauskite "Surasti". Laikas šiame puslapyje atsinaujina kas 5 sekundes.

### Techninė Informacija

* Naudoti paprasti CSS, HTML ir JavaScript be karkasų.
* CSS stiliams ir grid išdėstymui naudota biblioteka [siimple](https://www.siimple.xyz/).
* Aplikacija pilnai viekia visuose ekrano dydžiuose (responsive).
* Duomenys saugomi jūsų kompiuteryje, naudojant localStorage.
* Pavyzdiniai duomenys laikomi JSON faile serveryje, paspaudus užkrovimo mygtuką jie užsaugomi jūsų kompiuteryje

### Pastebėjimai

Kadangi reikėjo viską atlikti be karkasų, yra nemažai JavaScript kodo, su Vue.js ar kitu karkasu būtu paprasčiau valdyti kodą, plėsti projektą. Html objektų generavimas be karkasų gan nepatogus. Dalis kodo parašyta objektiškai (pagrindinė Leaf klasė), tačiau JS nėra parankiausia OP kalba, nėra deramos inkapsuliacijos. Stengiausi kodą rašyti kuo mažiau pasikartojantį, kelti funkcijas ir klases į atskirus failus, pačias funkcijas rašyti neilgas ir atliekančias vieną darbą, tačiau tikrai yra kur tobulėti.

### NFQ Akademijos Koordinatoriams

Atlikau visus Level 1 ir Level 2 užduotis punktus. Kodas sutvarkytas naudojant Beautify plugin'ą. Iš užduoties supratau, kad karkasų naudoti nereikia, esu daręs panašų projektą su Vue.js.

### Kontaktai

* Matas Speičys
* matasspeicys@gmail.com
