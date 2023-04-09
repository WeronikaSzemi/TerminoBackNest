# Termino – an app for storing vocabulary

<< *[wersja polskojęzyczna](#termino--aplikacja-do-przechowywania-s%C5%82ownictwa)* >>

<ol>
  <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#project-description">Project description</a></li>
  <ol>
    <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#functionalities">Functionalities</a></li>
    <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#languages-and-technologies-used">Languages and technologies used</a></li>
  </ol>
  <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#next-steps">Nest steps</a></li>
  <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#contact">Contact</a></li>
  <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#demo">Demo</a></li>
  <ol>
    <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#video">Video</a></li>
    <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#screenshots">Screenshots</a></li>
  </ol>
</ol>

## Project description

<strong>Termino</strong> is an application I conceived that enables its users to create glossaries and store vocabulary, in which I have drawn from my expertise in terminology and terminography as well as specialized translation. Its back-end section is a RESTful API written in Typescript and NestJS and conecting to a MariaDB database. The repository of the front-end application, written likewise in Typescript and with the use of the React.js library and the Bootstrap framework, is available [here](https://github.com/WeronikaSzemi/TerminoFrontNest).

This is the second version of the application, rewritten in NestJS (which resulted i.e. in the relatively low number of commits). The original application based on only Node.js and Express.js, can be found <a href="https://github.com/WeronikaSzemi/TerminoBack">here</a>.

### Functionalities:
* The <strong>homepage</strong> provides information about the app and a contact form.
* New users can <strong>sign up</strong> by providing email and password.
* Then, they can <strong>sign in</strong> to access the application.
* From the <strong>dashboard</strong>, they can view their glossaries, delete their account, and log out.
* After entering the <strong>glossaries view</strong>, they see the list of their glossaries and can create a new one. Each glossary can be loaded or deleted.
* When they open a specific glossary, they see the <strong>list of entries</strong>. Individual entries can be viewed, edited, and deleted. You can also add new entries.
* By default, entries are listed alphabetically by the headword. It is, however, possible to list them by the date of creation (newest first) or by the date of modification (latwest modifications first).
* In <strong>single entry view</strong>, you see its individual fields. Also from here is it possible to edit or delete an entry.

### Languages and technologies used:
<img src="https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465"/> <img src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"/> <img src="https://camo.githubusercontent.com/8855980a487f9e31426fbfc2cbbfdda5aa3b7f1d390e262e652e639e911b3d87/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6573746a732d2532334530323334452e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6573746a73266c6f676f436f6c6f723d7768697465"/> <img src="https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642"/> <img src="https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465"/> <img src="https://camo.githubusercontent.com/19be198b22407b49a4ea491b2900b85e09d859dbb2801e3f0c165a84b66e1506/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6172696144422d3030333534353f7374796c653d666f722d7468652d6261646765266c6f676f3d6d617269616462266c6f676f436f6c6f723d7768697465"/>

## Next steps

I am planning to further develop and improve the app.

The elements that need improving are mainly:
* authorization on the front-end side: going back to homepage should not make it necessary to sign in again; after signing out, the user should not be able to enter the dashboard
* signing up view: the fields should not turn red as soon as the view is loaded; another field for confirming the password should be added

As for developing the app, I specifically intend to:
* add the option to change password and email
* add help in case a user forgets their password
* add pagination
* provide the number of entries for each glossary in the glossary list view
* enable the option to rename a glossary
* render collocations in the form of a list
* add further glossary fields, such as example sentences
* enable adding synonyms, which would become individual, related entries
* enable the user to choose the fields in their glossary (from a closed list) and edit this setting later
* add the option to export the glossary in a format that enables its import into CAT tools

… and much more!

## Contact

* Mail: <a href="mailto:weronikaszeminska@gmail.com">send a message</a>
* Socials: <a href="https://www.linkedin.com/in/weronika-szeminska/">check out my LinkedIn profile</a>

## Demo

### Video
![](https://github.com/WeronikaSzemi/TerminoFrontNest/blob/develop/public/TerminoDemo.gif)

### Screenshots

![image](https://user-images.githubusercontent.com/116355495/230779982-168d35b6-50b9-4854-9469-94e579b486fe.png)

![image](https://user-images.githubusercontent.com/116355495/230780051-a02d4f50-6eba-4801-b126-d52ab8429776.png)

![image](https://user-images.githubusercontent.com/116355495/230780109-51e26d6b-2fcf-4a32-8327-07b45b354163.png)

![image](https://user-images.githubusercontent.com/116355495/230780144-032b25ff-c4dd-4371-8161-76e873e2f5a4.png)

![image](https://user-images.githubusercontent.com/116355495/230780172-919c9864-4140-4d17-add8-0c8eb3ecf7b2.png)

![image](https://user-images.githubusercontent.com/116355495/230780265-a426551d-01bc-4c75-8e10-aa1907e25b17.png)

![image](https://user-images.githubusercontent.com/116355495/230780457-444c19a1-a70c-4381-847a-0210507f1576.png)

![image](https://user-images.githubusercontent.com/116355495/230780313-670c96a8-3e99-473e-8a2f-e20521ad48c8.png)

![image](https://user-images.githubusercontent.com/116355495/230780358-7227e52f-ff95-4759-8ca0-65c9464751c1.png)

![image](https://user-images.githubusercontent.com/116355495/230780402-967f50c4-ec5c-4399-9240-3c334514677f.png)


# Termino – aplikacja do przechowywania słownictwa

<ol>
  <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#opis-projektu">Opis projektu</a></li>
  <ol>
    <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#funkcjonalno%C5%9Bci">Funkcjonalności</a></li>
    <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#zastosowane-j%C4%99zyki-biblioteki-i-frameworki">Użyte języki, biblioteki i frameworki</a></li>
  </ol>
  <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#dalsze-plany">Dalsze plany</a></li>
  <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#kontakt">Kontakt</a></li>
  <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#demo">Demo</a></li>
  <ol>
    <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#video">Wideo</a></li>
    <li><a href="https://github.com/WeronikaSzemi/TerminoBackNest/blob/main/README.md#screenshots">Zrzuty ekranu</a></li>
  </ol>
</ol>

## Opis projektu

<strong>Termino</strong> to aplikacja mojego pomysłu pozwalająca tworzyć glosariusze i przechowywać w nich wybrane słownictwo. Do jej stworzenia wykorzystałam swoją wiedzę z zakresu terminologii i terminografii oraz tłumaczeń specjalistycznych. Jej część backendowa to RESTowe API napisane w Typescripcie z użyciem frameworka NestJS i relacyjnej bazy danych. Część frontendowa, napisana również w Typescripcie i z użyciem biblioteki React.js i frameworka Bootstrap, znajduje się <a href="https://github.com/WeronikaSzemi/TerminoFrontNest">tutaj</a>.
Jest to druga wersja aplikacji, powstała po przepisaniu backendu z samych Express.js i Node.js na NestJS (co skutkowało m.in. niewielką liczbą commitów). Wersja pierwotna backendu znajduje się <a href="https://github.com/WeronikaSzemi/TerminoBack">tutaj</a>.

### Funkcjonalności:
* Na <strong>stronie głównej</strong> można przeczytać o aplikacji i skorzystać z formularza kontaktowego. Można też przejść do krótkiego demo aplikacji.
* Nowe osoby mogą <strong>zarejestrować się</strong>, podając email i hasło.
* Następnie możliwe jest <strong>zalogowanie się</strong> dające dostęp do aplikacji.
* Z <strong>panelu użytkownika_czki</strong> można przejść do widoku słowników, usunąć konto i wylogować się.
* Po wejściu w <strong>widok słowników</strong> otrzymuje się listę swoich słowników oraz pole do utworzenia nowego. Każdy słownik można wczytać oraz usunąć.
* Po wejściu w dany słownik otrzymujemy <strong>listę haseł</strong>, które można wczytywać, edytować i usuwać. Można też dodawać nowe.
* Domyślnie hasła wyświetlają się alfabetycznie według wyrazu hasłowego, natomiast można wyświetlać je też według daty dodania (od najnowszych) oraz daty edycji (od ostatnio zmodyfikowanych).
* Po wczytaniu <strong>pojedynczego hasła</strong> widzimy jego szczegóły, czyli wszystkie dostępne pola. Również z tego widoku dostępne są edycja oraz usunięcie hasła.

### Zastosowane języki, biblioteki i frameworki:
<img src="https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465"/> <img src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"/> <img src="https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642"/> <img src="https://camo.githubusercontent.com/b768ae6e4f89b74512e6de02a8367fd71465bc3d88ef1cf2f1622e2017c32bea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f626f6f7473747261702d2532333536334437432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465"/>

## Dalsze plany

W planach są dalsza rozbudowa i dopracowywanie aplikacji.

Do dopracowania są przede wszystkim:
* autoryzacja po stronie frontendowej: cofnięcie do strony głównej nie powinno powodować konieczności ponownego logowania; po wylogowaniu nie powinno być możliwości wejścia w panel użytkownika_czki
* rejestracja: pola nie powinny podświetlać się na czerwono od razu po wyświetleniu widoku; potrzebne byłoby powtórne podanie hasła

Planowany dalszy rozwój aplikacji obejmuje m.in.:
* dodanie możliwości zmiany hasła i emaila
* podpowiadanie zapomnianego hasła
* podawanie w tabeli słowników informacji o liczbie haseł
* dodanie paginacji
* umożliwienie zmiany nazwy słownika
* dodanie wyświetlania kolokacji w formie listy
* dodanie kolejnych pól w słownikach, m.in. na przykładowe zdania
* dodanie obsługi synonimów, które stawałyby się osobnymi, powiązanymi hasłami
* umożliwienie użytkownikom_czkom samodzielnego wyboru pól (spośród zamkniętej listy) przy tworzeniu słownika oraz jego późniejszej edycji
* dodanie funkcji eksportu słownika w formacie pozwalającym na import do narzędzi CAT

… i wiele innych!

## Kontakt

* Mail: <a href="mailto:weronikaszeminska@gmail.com">wyślij wiadomość</a>
* Media społecznościowe: <a href="https://www.linkedin.com/in/weronika-szeminska/">zajrzyj na LinkedIna</a>
