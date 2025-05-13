let templomtomb = [
    {
        "Neve":"Olimpiai Zeusz templom",
        "kep":"1.jpg",
        "szoveg":"Az olümposzi Zeusz templomának építése az i. e. 6. században, az athéni zsarnokok uralma alatt kezdődött. Befejezése több évszázadot vett igénybe, és végül a Kr. u. 2. században, Hadrianus római császár idején fejeződött be. Ez a kiterjedt időkeret a hatalom változásait, valamint a görög és római hatások keveredését szimbolizálja. A Zeusznak, az olümposzi istenek királyának szentelt templom nemcsak vallási központként, hanem az athéni politikai hatalom jelképeként is szolgált. A befejezéséhez való római hozzájárulás kiemeli a Róma és az ókori Görögország közötti kulturális és politikai közeledést. A templom történelmi rétegei mély betekintést nyújtanak az ókori mediterrán civilizációk fejlődésébe."
    },
    {
        "Neve":"Sounion-i Poszeidón temploma",
        "kep":"2.jpg",
        "szoveg":"Az Attika-félsziget legdélebbi csücskében található a Szunion-fok, ami a tenger istene, Poszeidón ősi templomának maradványairól ismert. A hegyfokon álló romokat három oldalról veszi körül a tenger, amit gyakran egynapos kirándulásként keresnek fel az Athénból érkező turisták, hogy onnan szemléljék az Égei-tenger naplementéjét"
    },
    {
        "Neve":"Cyrene – Zeusz temploma",
        "kep":"3.jpg",
        "szoveg":"A Kirenaika (Cyrenaica) ókori tartomány fővárosa, Cyrene-ben a Zeusz-templom egy nagyméretű, dorosz stílusban épült templom volt, amely a város hatalmát szimbolizálta. A templomot a 6. században i.e. építették, és később többször is károsodott, majd elhagyatottá vált. "
    },
    {
        "Neve":"Erechtheum",
        "kep":"4.jpg",
        "szoveg":"A rendkívül kecses, attikai ión stílusú épület i.e. 421 és i.e. 406 között épült, befejezésére azonban a Spártától elszenvedett vereség miatt soha nem került sor. Tervezője nem ismert. A hagyományok szerint azon a helyen épült fel, ahol Athéné és Poszeidón versengése zajlott a város védnökségéért: ezen a helyen fakasztott a tengerek főistene forrást, itt hullott le az égből a győztes Athéné olajfából készült szobra. Valószínűleg itt volt Erekhtheusz legendás király sírja is, akiről az épület nevét kapta."
    },
    {
        "Neve":"Apolló Epicurius templom",
        "kep":"5.jpg",
        "szoveg":"Apollón Epikuriosz temploma egy ókori eredetű épület Görögországban a Peloponnészoszi-félszigeten. Az i. e. 429 és i. e. 400 között emelt templom 1986-ban a görögországi helyszínek közül elsőként felkerült az UNESCO világörökségi listájára."
    },
    {
        "Neve":"Segestai Dór templom",
        "kep":"6.jpg",
        "szoveg":"A Segesta-i dór templom egy kiváló állapotban megmaradt ókori dór templom, amely Szicíliában található, Trapani megyében, Alcamo és Gibellina közelében. Az épület a mai napig lenyűgöző látványt nyújt a vadregényes tájban. "
    },
    {
        "Neve":"Paestum",
        "kep":"7.jpg",
        "szoveg":"Paestum az görög és római időkből jelentős műemlékekkel szolgál. Különös jelentőséggel bír a három dór templom, amelyek a stílus építészeti korszakában mintaértékűnek számítanak."
    },
    {
        "Neve":"Hephaistos temploma",
        "kep":"8.jpg",
        "szoveg":"A Héphaiszteion Héphaisztosz dór stílusú temploma Athénban, az Agora nyugati szélén emelkedő dombon. Thészeionként is ismert a párkányzatán végigvonuló, Thészeusz hőstetteit ábrázoló, triglifes dór metópéi után."
    },
    {
        "Neve":"Templomok Völgye",
        "kep":"9.jpg",
        "szoveg":"Valle dei Templi, azaz a Templomok völgye, Szicília egyik legszebb ókori látványossága. A Taormina kötelező látnivalójának számító görög színház illetve Piazza Armenia csodálatos mozaikjai mellett ez az épületegyüttes a leghíresebb és kiváló állapotban megmaradt építészeti emlék. Az ókorból származó romokat Agrigento településétől délre, egy völgyben és egy széles fennsíkon találjuk. Agrigento ma Olaszország egyik legszegényebb települése, de az ókorban nagyon virágzó város állt itt, Akragasz néven - ennek latin változata az Agrigentum."
    },
    {
        "Neve":"Parthenón, Akropolisz",
        "kep":"10.jpg",
        "szoveg":"A Parthenónt nem templomnak, hanem fogadalmi ajándéknak tekintették, ezenkívül így akarták kifejezésre juttatni Athénnek a szövetségben betöltött vezető szerepét. A munkálatokat Pheidiasz felügyelte. Az építkezést i. e. 448-ban kezdték el és i. e. 438-ban fejezték be. Azon a napon, amikor a Parthenónt felavatták, Athén egész lakossága a szentélyhez vonult, hogy együttesen adják át a városvédő istennőnek az új peploszt."
    }
    
]
let sz=""

for (const elem of templomtomb) {
    sz+=`
    <div class="col-sm-6">
    <div class="dobozdiv">
    <div>${elem.Neve}</div>
    <div><img class="img-fluid" src="templomok/${elem.kep}" ></div>
    <div>${elem.szoveg}</div>
    </div>
    </div>
    `
}
document.getElementById("templomAdatok").innerHTML=sz