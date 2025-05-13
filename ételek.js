let eteltomb = [
    {
        "etelNeve":"Szuvl�ki, a ny�rs",
        "kep":"1.jpg",
        "szoveg":"A souvlakiban a sert�sh�s vagy csirkemell v�konyra szeletelve �s fqszerezve ker�l r� a ny�rs, majd pedig grillezik. Ennek a hagyom�nyos �telnek a sikere az egyszerqs�g�ben �s persze fantasztikus �z�ben rejlik."
    },
    {
        "etelNeve":"Muszaka, a rakott padlizs�n",
        "kep":"2.jpg",
        "szoveg":"A tradicion�lis g�r�g konyha alapk�ve Moussaka, ami egy h�sos �s padlizs�nos rakott komfort�tel. Kedvelt �s ismert fog�s term�szetesen G�r�gorsz�gon k�v�l is, nagyszerq �zvil�g �s text�ra jellemezi, �gyhogy gourmet kalandra fel!"
    },
    {
        "etelNeve":"Tzatziki, a sz�sz",
        "kep":"3.jpg",
        "szoveg":"A Tzatziki (eredetileg dzadz�ki), egy hqs�tQ joghurtos sz�sz, melyet fokhagym�val, ubork�val �s friss fqszern�v�nyekkel k�sz�tenek. Ide�lis k�ret grillezett h�sokhoz vagy pit�hoz. A tzatziki egy hqs�tQ, friss�tQ sz�sz, tal�n a g�r�g sz�szok k�z�l a legismertebb."
    },
    {
        "etelNeve":"Spanakopita, a pite",
        "kep":"4.jpg",
        "szoveg":"A g�r�g konyha egyik k�l�nlegess�ge, amit tal�n itthon kevesen ismernek vagy jobban mondva kev�sb� ismert fog�sk�nt tartanak sz�mon, a spanakopita, ami val�j�ban egy spen�tos �s sajtos pite. K�nnyq �tel, melyet t�bb r�teg v�kony t�szta bor�tja �s t�k�letes uzsonna vagy t�z�rai fog�sk�nt elfogyasztani."
    },
    {
        "etelNeve":"Gyros",
        "kep":"5.jpg",
        "szoveg":"Azt joggal mondhatjuk, hogy a gyros, mint �tel a legink�bb ismert sz�munkra, viszont az m�r kev�sb� biztos, hogy az ikonikus, n�pszerq �telbQl a g�r�g v�ltozatot ismerj�k a legjobban. A gyros hasonl�t a Souvlakira, de a h�st f�ggQleges forg�n s�tik, majd v�kony szeletekre v�gj�k. A t�lal�s sor�n gyakran haszn�lnak tzatzikit �s pit�t is. A fqszeres, grillezett h�s k�l�nlegess�ge, hogy f�ggQlegesen ny�rson forgatj�k, majd a megs�lt r�szt folyamatosan legv�gj�k."
    },
    {
        "etelNeve":"Dolmades, a t�lt�tt finoms�g",
        "kep":"6.jpg",
        "szoveg":"A g�r�gnek is van t�lt�tt k�poszta kateg�ri�j�ba esQ finoms�guk, csak �pp szQlQlevelekbe tekerik a fqszeres rizses h�st, amit �gy h�vnak, hogy dolmades. Tov�bbi elt�r�s, hogy �ltal�ban hidegen t�lalj�k �s citrommal locsolj�k meg, illetve legink�bb elQ�telk�nt t�lalj�k."
    },
    {
        "etelNeve":"Feta sajt",
        "kep":"7.jpg",
        "szoveg":"Ha egy g�r�g sajtot kell mondanunk, akkor term�szetesen mindenkinek a feta sajt jut esz�be. A feh�r t�mbben - mely t�k�letes kieg�sz�tQje a sal�t�katnak, pit�knak �s a leveles t�szt�knak -, egyes�lnek a s�s �s �des �zek."
    },
    {
        "etelNeve":"Baklava, az �dess�g",
        "kep":"8.jpg",
        "szoveg":"Kanyarodjunk vissza a leveles t�szt�s g�r�g vil�ghoz, azon bel�l is a baklava s�tem�nyhez, amely a t�szta mellett di�b�l �s m�zbQl k�sz�l �s tetej�t is di� vagy �pp mandula d�sziti."
    },
    {
        "etelNeve":"G�r�g sal�ta",
        "kep":"9.jpg",
        "szoveg":"El is �rkezt�nk a sal�t�khoz, sQt mag�hoz a vil�gh�d�t�, ikonikus g�r�g sal�t�hoz, amely egy egyszerq, de �nmag�ban is �zletes finoms�g."
    },
    {
        "etelNeve":"Kleftiko",
        "kep":"10.jpg",
        "szoveg":"Hagyom�nyos lass� s�t�ssel k�sz�l ez az �tel, ahol a h�st fokhagym�val �s fqszerekkel tqzdelik, majd puh�ra s�tik. A neve eredetileg a 'rabl�k' vagy 'bandit�k' sz�ra utal, mivel a hagyom�ny szerint ez a fog�st a g�r�g szabads�gharc idej�n alkott�k meg a hegyi gerillaharcosok, akik titokban k�sz�tett�k az �telt a t�boraikban, hogy ne vegye �szre az ellens�g."
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