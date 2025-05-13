let eteltomb = [
    {
        "etelNeve":"Szuvláki, a nyárs",
        "kep":"1.jpg",
        "szoveg":"A souvlakiban a sertéshús vagy csirkemell vékonyra szeletelve és fűszerezve kerül rá a nyárs, majd pedig grillezik. Ennek a hagyományos ételnek a sikere az egyszerűségében és persze fantasztikus ízében rejlik."
    },
    {
        "etelNeve":"Muszaka, a rakott padlizsán",
        "kep":"2.jpg",
        "szoveg":"A tradicionális görög konyha alapköve Moussaka, ami egy húsos és padlizsános rakott komfortétel. Kedvelt és ismert fogás természetesen Görögországon kívül is, nagyszerű ízvilág és textúra jellemezi, úgyhogy gourmet kalandra fel!"
    },
    {
        "etelNeve":"Tzatziki, a szósz",
        "kep":"3.jpg",
        "szoveg":"A Tzatziki (eredetileg dzadzíki), egy hűsítő joghurtos szósz, melyet fokhagymával, uborkával és friss fűszernövényekkel készítenek. Ideális köret grillezett húsokhoz vagy pitához. A tzatziki egy hűsítő, frissítő szósz, talán a görög szószok közül a legismertebb."
    },
    {
        "etelNeve":"Spanakopita, a pite",
        "kep":"4.jpg",
        "szoveg":"A görög konyha egyik különlegessége, amit talán itthon kevesen ismernek vagy jobban mondva kevésbé ismert fogásként tartanak számon, a spanakopita, ami valójában egy spenótos és sajtos pite. Könnyű étel, melyet több réteg vékony tészta borítja és tökéletes uzsonna vagy tízórai fogásként elfogyasztani."
    },
    {
        "etelNeve":"Gyros",
        "kep":"5.jpg",
        "szoveg":"Azt joggal mondhatjuk, hogy a gyros, mint étel a leginkább ismert számunkra, viszont az már kevésbé biztos, hogy az ikonikus, népszerű ételből a görög változatot ismerjük a legjobban. A gyros hasonlít a Souvlakira, de a húst függőleges forgón sütik, majd vékony szeletekre vágják. A tálalás során gyakran használnak tzatzikit és pitát is. A fűszeres, grillezett hús különlegessége, hogy függőlegesen nyárson forgatják, majd a megsült részt folyamatosan legvágják."
    },
    {
        "etelNeve":"Dolmades, a töltött finomság",
        "kep":"6.jpg",
        "szoveg":"A görögnek is van töltött káposzta kategóriájába eső finomságuk, csak épp szőlőlevelekbe tekerik a fűszeres rizses húst, amit úgy hívnak, hogy dolmades. További eltérés, hogy általában hidegen tálalják és citrommal locsolják meg, illetve leginkább előételként tálalják."
    },
    {
        "etelNeve":"Feta sajt",
        "kep":"7.jpg",
        "szoveg":"Ha egy görög sajtot kell mondanunk, akkor természetesen mindenkinek a feta sajt jut eszébe. A fehér tömbben - mely tökéletes kiegészítője a salátákatnak, pitáknak és a leveles tésztáknak -, egyesülnek a sós és édes ízek."
    },
    {
        "etelNeve":"Baklava, az édesség",
        "kep":"8.jpg",
        "szoveg":"Kanyarodjunk vissza a leveles tésztás görög világhoz, azon belül is a baklava süteményhez, amely a tészta mellett dióból és mézből készül és tetejét is dió vagy épp mandula dísziti."
    },
    {
        "etelNeve":"Görög saláta",
        "kep":"9.jpg",
        "szoveg":"El is érkeztünk a salátákhoz, sőt magához a világhódító, ikonikus görög salátához, amely egy egyszerű, de önmagában is ízletes finomság."
    },
    {
        "etelNeve":"Kleftiko",
        "kep":"10.jpg",
        "szoveg":"Hagyományos lassú sütéssel készül ez az étel, ahol a húst fokhagymával és fűszerekkel tűzdelik, majd puhára sütik. A neve eredetileg a 'rablók' vagy 'banditák' szóra utal, mivel a hagyomány szerint ez a fogást a görög szabadságharc idején alkották meg a hegyi gerillaharcosok, akik titokban készítették az ételt a táboraikban, hogy ne vegye észre az ellenség."
    }
    
]
let sz=""

for (const elem of eteltomb) {
    sz+=`
    <div class="col-sm-4">
    <div class="dobozdiv">
    <div>${elem.etelNeve}</div>
    <div><img class="img-fluid" src="etelek/${elem.kep}" ></div>
    <div>${elem.szoveg}</div>
    </div>
    </div>
    `
}
document.getElementById("EtelAdatok").innerHTML=sz