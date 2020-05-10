---
title: "HotkeyP, část 2: Další vychytávky pro ještě lepší efektivitu"
date: "2020-05-10"
---
V tomto pokračování bych vás ráda provedla svým druhým hlavním využitím programu HotkeyP: příkazy Vložit text a Makro, které mohou vést až k polo-automatizaci některých činností. Před tím se ale ještě podíváme na to, jak si na klávesnici simulovat multimediální klávesy, přestože je tam nemáte.

## Pro koho to je?

* Pro ty, kteří četli [první díl](/blog/2020-05-03-hotkeyp-ovladnete-pocitac-svymi-klavesovymi-zkratkami).
* Pro ty, kteří nemají klávesnici s multimediálními klávesami (např. pro ovládání přehrávače) a přesto by je chtěli používat.
* Pro ty, které nebaví opakovaně kamkoliv psát stejné kousky textu (a nebaví je ani připravené texty kopírovat z Poznámkového bloku) nebo používat nějaké jiné opakující se sekvence kláves.

## Potřebné znalosti

Tento článek navazuje na předchozí článek [HotkeyP: Ovládněte počítač svými klávesovými zkratkami](/blog/2020-05-03-hotkeyp-ovladnete-pocitac-svymi-klavesovymi-zkratkami), pokud jste ho ještě nečetli, doporučuji přečíst, obsahuje informace k instalaci i základnímu nastavení programu HotkeyP. Předpokládám, že máte znalosti potřebné pro předchozí díl. 😉

## Proč?

Svoje důvody jsem popsala v minulém díle, chtěla bych asi už jen zmínit, proč jsem vytvořila sekvenci kláves, kterou vás naučím používat na konci článku. Jde o makro, které umí vzít označený text z jednoho okna, přepnout se do jiného a v něm ten text vyhledat.

Potřebovala jsem totiž zkontrolovat asi 50 atributů ze zdrojového kódu nějakého programu ve vývojovém prostředí (IDE) a porovnat je s dokumentací ve webovém prohlížeči. Název každého atributu musel přesně sedět (včetně velikosti písmen) a každý atribut musel být v dokumentaci zapsaný. Pokud nevíte, co je to IDE, vývojové prostředí nebo atribut, nedělejte si s tím starosti, není to teď důležité, můžete si představit třeba v Poznámkovém bloku pod sebou napsaných 50 názvů ve stylu mujUzasnyNazevAtributu.

První věc, která by asi každého napadla, bylo přečíst název atributu ve zdrojovém kódu a porovnat ho s atributem v dokumentaci a tohle zopakovat 50×. Jenže člověk se jednoduše přehlédne a vzniká tak riziko, že si nevšimne překlepu a nechá ho tam, nebo že si nevšimne rozdílné velikosti písmen apod.

Lepším nápadem tedy bylo název vždy označit (jelikož jsou názvy atributů ve zdrojovém kódu bez mezer, stačí je označovat dvojklikem), zkopírovat ho do schránky, přepnout se do webového prohlížeče s dokumentací a tam ho vložit do vyhledávání na stránce. Jenže když tohle člověk nějakou chvíli dělá, začne mu neustálé přejíždění myší a klikání na atributy a do políček připadat zbytečně zdlouhavé. Zamyslí se tedy nad klávesovými zkratkami, které by se na to daly použít, protože přeci jen přehmátnout na klávesnici z jedné zkratky na druhou, zvlášť když si správně položíte prsty tak, aby ty přehmaty byly co nejkratší, je často rychlejší, než někam tahat myš.

Takže jsem si dala IDE se zdrojovým kódem a prohlížeč na obrazovku hezky vedle sebe a postupovala takto:

* označení názvu atributu ve zdrojovém kódu pomocí dvojkliku myší,
* zkopírování tohoto názvu do schránky pomocí Ctrl + C,
* přepnutí do naposledy aktivního okna pomocí Alt + Tab (aby toto fungovalo, je potřeba nejdříve "nakliknout" do okna prohlížeče a pak zpátky do IDE),
* aktivace vyhledávání na stránce stisknutím Ctrl + F (ve většině programů, včetně mého prohlížeče Firefox, tato zkratka zobrazí panel pro vyhledávání na stránce (pokud již není zobrazený) a přepne přímo do políčka pro vyhledávací dotaz s tím, že pokud v tom políčku už je něco napsané, tak to označí, takže se to následným vložením vždy přepíše),
* vložení zkopírovaného názvu pomocí kláves Ctrl + V (prohlížeč automaticky začne hledat, pokud by nezačal, bylo by potřeba ještě stisknout Enter). 

Pomocí této posloupnosti dvojkliků myší na jednotlivé atributy a postupného stisknutí dané sekvence kláves mi kontrola těch atributů šla daleko rychleji. Jenže mačkání stejných kláves za sebou stále dokola po nějaké chvíli omrzí, takže odsud už byl jen krůček k tomu, abych si vzpomněla na HotkeyP a jeho makra. Tuto sekvenci popsanou výše jsem tam nastavila, tedy bez kliknutí myší a s drobným vylepšením. Nejprve jsem ji měla jako dočasnou pro kontrolu zbytku toho seznamu atributů, s tím, že ji pak možná smažu, ale už nejspíš nepoužiji, a od té doby jsem ji už několikrát použila a zjistila jsem, že byl opravdu dobrý nápad ji vytvořit. 😁

Pokud chcete mít také svoje "Proč", pozorujte se, co děláte při práci s počítačem. Děláte někdy opakovanou činnost, která není moc variabilní, je téměř stále stejná? Pravděpodobně je to něco, co se dá zautomatizovat nebo alespoň polo-automatizovat. (Polo-automatizace, alespoň jak ji chápu já, spočívá v tom, že počítač provede zadaný postup akcí, ale člověk musí stisknout pokaždé to správné tlačítko. Plně automatický program pustíte a on se postará o opakované vykonávání toho, na co byl naprogramován.)

Pokud tedy na klávesnici při určité činnosti mačkáte stále za sebou stejnou nebo podobnou posloupnost kláves, pravděpodobně by se tato posloupnost dala zapsat do makra, které pak spustíte stisknutím jedné klávesové zkratky přesně ve chvíli, kdy potřebujete danou posloupnost vykonat. Pozorujte se tedy zejména ve chvílích, kdy mačkáte na klávesnici dokola stejné věci, můžete to využít pro inspiraci ve chvíli, kdy si budete chtít vytvořit vlastní klávesovou zkratku. I psaní dnešního data se dá hodit na klávesovou zkratku, jak si dnes ukážeme. 😉

## Jak na to?

### Simulace multimediálních kláves

Jako první si ukažme tak trochu opak k přemapování funkce multimediální klávesy na něco jiného, které jsme si ukazovali minule. Nyní si ukážeme přemapování libovolné klávesové zkratky na funkci multimediální klávesy. Hodí se to především v případě, kdy na své klávesnici nemáte multimediální klávesy, nebo nemáte ty, které potřebujete. V minulém díle jsem dávala příklad s přehrávačem hudby Spotify, který neposkytuje uživateli možnost nastavit si globální klávesové zkratky, ale reaguje na multimediální klávesy. Pokud si tedy chceme nastavit simulaci stisku multimediální klávesy, dejme tomu pro spuštění či pozastavení přehrávání hudby, na vlastní klávesovou zkratku, postupujme takto:

1. Otevřeme dialog pro přidání klávesové zkratky tlačítkem Přidat.
2. Nastavíme klávesovou zkratku, kterou chceme mačkat pro spuštění dané funkce (já třeba použiji _Ctrl_ + _Shift_ + _Alt_ + _F9_). Nastavuje se stejným způsobem, jakým jsme ji nastavovali v minulém díle, takže zde nebudu zacházet do podrobností.
3. Vedle políčka Příkaz klikneme na tlačítko se symbolem **<**, v zobrazené nabídce vybereme možnost _Makro_ -> _Makro_.
4. V tuto chvíli můžeme stisknout tlačítko _Nápověda_. Zobrazí se nápověda k programu HotkeyP, která by se měla otevřít v místě, které program vyhodnotí, že zrovna potřebujeme - nyní by se tedy měla otevřít v části _Makro_. V nápovědě můžeme najít způsoby, jak zapisovat jednotlivé klávesy včetně těch multimediálních, najdeme zde i simulaci stisků tlačítek myši a další speciální parametry. Do políčka Parametry tedy nyní napíšeme `\play_pause`.
5. Potvrdíme kliknutím na OK. Od teď by nám měla vybraná klávesová zkratka spouštět a pozastavovat hudbu, pokud máme spuštěný hudební přehrávač, který umí reagovat na multimediální klávesu _Play/Pause_.

![HotkeyP - Play/Pause](/images/hotkeyp/hotkeyp_play_pause.png)

### Vkládání textu

Na začátku této části se chci omluvit za menší dezinformaci v předchozím díle, kde jsem uvedla, že HotkeyP nepotřebuje schránku, do které by kopíroval text. V nápovědě jsem se dozvěděla, že při použití příkazu _Vložit text_, který zde budeme využívat, schránku používá a vkládá text do aktivního okna pomocí klávesové zkratky _Ctrl_ + _V_. Lze ji pravděpodobně tedy využít všude tam, kde funguje vkládání pomocí klávesové zkratky _Ctrl_ + _V_. Když jsem s tímhle příkazem dělala pár pokusů, zjistila jsem ale, že obsah schránky se nepřepíše. Přestože použiji tuto funkci, která využívá schránku, tak po jejím použití mám ve schránce stejný obsah, co před jejím použitím. Pravděpodobně si tedy obsah schránky HotkeyP krátkodobě zapamatuje, vymění ho za text k vložení, vloží ho pomocí simulace _Ctrl_ + _V_ do aktivní aplikace a nakonec do schránky vrátí původní zapamatovaný obsah. Je to ale můj odhad, kdo má zájem, může si projít zdrojové kódy HotkeyP, já se spokojím s vědomím, že to funguje. 😀

Vkládání textu se hodí ve chvíli, kdy často píšete stejný text na různá místa. Například to může být vaše jméno, e-mail, telefonní číslo, dnešní datum apod. Pojďme si tedy ukázat příklad se jménem:

1. Opět otevřeme dialog pro přidání klávesové zkratky a zvolíme klávesovou zkratku, kterou budeme jméno vkládat, např. _Ctrl_ + _Shift_ + _Alt_ + _F1_.
2. Vedle políčka Příkaz klikneme na tlačítko se symbolem **<**, v zobrazené nabídce vybereme možnost _Makro_ -> _Vložit text_.
3. Do políčka Parametry zadejme jméno tak, jak ho běžně píšeme, já tedy napíšu `Monika Majorová`, bez nějakých příkazů nebo speciálních znaků okolo. Opět v tomto místě najdeme pod tlačítkem Nápověda různé speciální znaky, které můžeme použít pro případné další zpracování / doplnění programem HotkeyP. Teď ale chceme zapsat jen jednoduchý pevný text, speciální znaky tedy nepotřebujeme.
4. Potvrdíme kliknutím na OK. Nyní můžeme vkládat své jméno kamkoliv, kde lze použít klávesovou zkratku Ctrl + V pro vložení textu ze schránky.

Tuto klávesovou zkratku pak můžete použít třeba při vyplňování registračních formulářů na internetu (pozor, někde mají oddělená políčka pro jméno a příjmení, někde mají jedno políčko pro oboje), na konci e-mailů jako podpis (pokud nemáte nastavený automatický podpis), při představování se v chatu nebo v komentářích na sociálních sítích, při psaní článků apod.

![HotkeyP - jméno](/images/hotkeyp/hotkeyp_jmeno.png)

Pokud chcete vložit dnešní datum, pravděpodobně se vám nebude chtít nastavovat každý den nové datum a je to taky zbytečné. HotkeyP umí totiž jednoduše vložit dnešní datum použitím parametru `%x` místo textu (nebo i v rámci textu). Datum se vloží v běžně používaném číselném formátu den.měsíc.rok, např. 2.5.2020 (což není úplně [pravopisně korektní](https://prirucka.ujc.cas.cz/?id=810), správně by za každou tečkou měla být mezera, ale i toho se dá celkem snadno docílit použitím parametru `%#d. %#m. %Y`, případně by měl být den a měsíc vždy dvouciferný, k tomu může posloužit parametr `%d.%m.%Y`). Další možnosti pro datum a čas najdete v nápovědě a můžete si tak složit vlastní formát data.

![HotkeyP - datum](/images/hotkeyp/hotkeyp_datum.png)

Příkaz vložit text nabízí ještě jednu vychytávku. Pokud máte hodně údajů, které často někam vyplňujete, nebo máte třeba několik běžných odpovědí na zprávy v chatu a máte pocit, že by vám vytvořené zkratky zaplnily všechna volná místa na klávesnici nebo byste si je brzy díky jejich množství nezapamatovali, umožňuje HotkeyP umístit více textů do jedné klávesové zkratky. Při stisknutí klávesové zkratky vám zobrazí menu, kde si můžete vybrat text, který chcete vložit. Dělá se to úplně stejně, jako při vkládání jednoho textu, jen do políčka Parametry napíšete všechny texty za sebe s tím, že je oddělíte pomocí `%|`. V jednotlivých částech můžete samozřejmě použít též jiné speciální znaky, takže můžete vyzkoušet například tento text: `Ahoj%|světe.%|Dnes je %x.` - v zobrazeném menu pak můžete vybírat konkrétní text šipkami a potvrzovat enterem, případně dvojklikem myší.

![HotkeyP - ahoj světe](/images/hotkeyp/hotkeyp_ahoj_svete.png)

![HotkeyP - ahoj světe - menu](/images/hotkeyp/hotkeyp_ahoj_svete_menu.png)

Ještě bych chtěla dodat důležitou věc - nedoporučuji HotkeyP používat na vkládání hesel do přihlašovacích formulářů (nebo kamkoliv jinam). Nebo to alespoň nepoužívejte na hesla k účtům, na kterých vám alespoň trochu záleží. Vkládané texty sice zůstávají na vašem počítači, ale jsou tam uloženy v nezašifrované formě a kdokoliv, kdo se buď nabourá do vašeho počítače nebo v horším případě k němu získá fyzický přístup, si může zobrazit vaše hesla jak na stříbrném podnosu. Pro ukládání hesel existují specializované programy jako třeba [KeePass](https://keepass.info/), který také umožňuje nastavit si vložení hesla na klávesovou zkratku, s tím rozdílem, že ukládá hesla zašifrovaná pomocí jednoho hlavního hesla.

### Makra aneb. vlastní posloupnosti stisků kláves

Pravděpodobně nejzajímavější částí HotkeyP jsou právě makra. Pozorní čtenáři si už jistě všimli, že jsme makro dnes již vytvářeli, a to v části Simulace multimediálních kláves. Makro vlastně není nic jiného než simulace stisků kláves (případně tlačítek myši). Jejich hlavní výhoda ale spočívá v tom, že dokáží simulovat stisk více kláves v jednom makru a tyto stisky lze navíc časovat (tedy vytvářet mezi nimi časové prodlevy). Díky tomu je možné vytvořit polo-automatizaci některých akcí na počítači, třeba i vyplnění konkrétního formuláře na webu. Pojďme se tedy rovnou vrhnout na vytvoření makra obsahující sekvenci stisků kláves pro vyhledání textu ve "druhém okně", o které jsem psala v části _Proč_:

1. Vytvoříme novou klávesovou zkratku s příkazem Makro tak, jak jsme to dělali v části _Simulace multimediálních kláves_.
2. Do políčka Parametry vložíme tento text: `\ctrl.c\alt\tab\sleep5\ctrl.f\sleep2\ctrl.v`
3. Jelikož je to složitější makro, na kterém není na první pohled vidět, co dělá, můžeme napsat do políčka _Popis_ text o tom, co makro dělá. Tento popis se pak zobrazí v seznamu klávesových zkratek a slouží především pro lepší orientaci v něm.
4. Klávesovou zkratku uložíme kliknutím na _OK_.

![HotkeyP - vyhledávání](/images/hotkeyp/hotkeyp_vyhledavani.png)

V nápovědě najdete význam jednotlivých položek, zde bych chtěla některé z nich popsat, aby bylo zřejmé, proč je makro zapsané tak, jak je. Začneme tedy postupně zleva: `\ctrl` stiskne klávesu _Ctrl_. Klávesy _Ctrl_, _Shift_, _Alt_ a _Win_ mají výjimku, zůstávají totiž stisknuté spolu s dalším znakem. Tento příkaz tedy znamená stisknutí **a podržení** klávesy _Ctrl_. Tečka slouží pouze jako oddělovač kláves, aby tam nebylo napsáno `\ctrlf`, je ale nepovinná. Dále `c` stiskne písmeno _C_ (spolu se stisknutou klávesou _Ctrl_, která se hned poté uvolní). Tento zápis je vázaný na aktivovaném rozložení klávesnice - nebude tedy pravděpodobně fungovat např. na ruské klávesnici. Dá se nahradit zápisem `\C`, který by měl fungovat i na rozložení klávesnice, které nepoužívá latinku. Zápis `\ctrl.c` tedy vlastně simuluje stisk klávesové zkratky _Ctrl_ + _C_. Podobně následující zápis `\alt\tab` představuje klávesovou zkratku _Alt_ + _Tab_, která přepíná na naposledy aktivní aplikaci.

Následuje příkaz `\sleep5`, se kterým jsme se zatím nesetkali. Tento zápis říká, že má HotkeyP počkat 5 desetin sekundy - tedy půl sekundy - před dalším příkazem. Tuto pauzu jsem tam přidala proto, že přepnutí na jinou aplikaci počítači nějakou chvíli trvá, v závislosti na jeho zatížení. Když tam pauza nebyla, následující klávesové zkratky se provedly ještě v té původní aplikaci, odkud jsme text kopírovali pomocí _Ctrl_ + _C_. Může se tedy logicky stát, že když bude počítač velmi vytížený, ani tato půlsekundová pauza mu nebude stačit, podle mých zkušeností je to ale v naprosté většině případů dostatečná prodleva.

Dále je použit příkaz `\ctrl.f`, u kterého je asi jasné, že simuluje klávesovou zkratku _Ctrl_ + _F_. Dále se opět čeká, tentokrát jen dvě desetiny - tedy jednu pětinu - sekundy. Vysledovala jsem totiž, že prohlížeči chvilinku trvá, než zobrazí vyhledávací panel a aktivuje políčko pro vkládání textu. Je to sice zpravidla tak krátký okamžik, že to běžně člověk nepostřehne, ale program klávesové zkratky simuluje tak rychle, že text bez této pauzy často skončí někde ve stránce (pokud je třeba aktivní políčko formuláře) nebo se nevloží nikam. Pro úplnost dodávám, že poslední část makra, tedy `\ctrl.v` vloží text pomocí simulace stisku klávesové zkratky _Ctrl_ + _V_ do vyhledávacího políčka.

Můžeme tuto klávesovou zkratku nyní vyzkoušet tak, že si otevřeme Poznámkový blok a internetový prohlížeč (já používám Firefox, ale mělo by to fungovat snad v každém běžném prohlížeči) s nějakou webovou stránkou. Vybereme si slovo na této stránce, nyní se přepneme do Poznámkového bloku, kam to slovo napíšeme. Pozor - je důležité, aby poslední aktivovanou aplikací (tedy aplikací, do které jsme naposledy klikli) byl prohlížeč, ze kterého přepneme do Poznámkového bloku a pak už nikam nepřepínáme - díky tomu bude korektně fungovat klávesová zkratka _Alt_ + _Tab_. Potom už jen slovo označíme (třeba dvojklikem) a stiskneme nastavenou klávesovou zkratku. HotkeyP by měl zkopírovat označený text, přepnout se do prohlížeče a tam text vyhledat pomocí vyhledávání na stránce. Můžete postup porovnat s postupem uvedeným v části _Proč_. 😉

Pokud vám klávesová zkratka nefunguje, můžete udělat drobné úpravy, vyzkoušejte například parametr `\ctrl.c\altdown\tab\sleep2\altup\sleep5\ctrl.f\sleep2\ctrl.v`. Teď jsem makro zkoušela na Windows 7 (makro původně vzniklo na Windows 10) a zdá se, že potřebuje chvilku, aby mohl správně zachytit klávesovou zkratku _Alt_ + _Tab_ (stalo se totiž to, že se deaktivoval Poznámkový blok, ale neaktivoval se prohlížeč, takže se zbytek kláves "neposlal nikam"). Jen pro pochopení: zápis `\altdown` znamená stisk a trvalé držení klávesy _Alt_, zápis `\altup` znamená uvolnění této klávesy. Systém tedy potřebuje po stisku klávesy Tab a před uvolněním klávesy Alt malý moment na to, aby přepnul na správnou aplikaci. Opět je to věc, kterou při běžném používání počítače asi nepostřehnete, jelikož člověk mačká klávesy pomaleji, než program. 😉

Pokud vám ani přesto klávesová zkratka nefunguje, nezoufejte, toto makro je opravdu hodně závislé na konkrétním systému, jeho zatížení i použitých programech. Můžete zkusit pozorovat, co systém dělá, která aplikace po použití klávesové zkratky zůstala aktivní (poznáte podle změny barvy horní lišty okna), vyzkoušejte, co zůstalo ve schránce, co se provedlo v prohlížeči (můžete třeba zkusit ještě na konec makra přidat `\enter`, některé prohlížeče možná potřebují vyhledávací dotaz potvrdit), ujistit se, zda vám žádný program neblokuje (neodchytává) hlavní klávesovou zkratku nebo některou z použitých klávesových zkratek (není to úplně jednoduché, trochu jsem o tom psala v minulém díle), případně si můžete trochu pohrát s časováním (ze začátku doporučuji nastavit delší časy a postupně to zkoušet a snižovat je, dokud to bude spolehlivě fungovat třeba i při mírné zátěži počítače).

Pro testování, jaké klávesy jsou pomocí makra stisknuty, můžete vykoušet třeba [Online KeyBoard Tester](http://onlinekeyboardtester.blogspot.com/p/tester.html). Je zajímavé sledovat, že do programu (nebo v tomto případě do webové aplikace) je většinou odeslána jak původní klávesová zkratka, tak i klávesy či klávesové zkratky, jejichž stisky simuluje HotkeyP. Jak jsem tedy uváděla v prvním dílu, je dobré si zvolit takové klávesové zkratky, které s ničím nekolidují a tedy nemají žádný "vedlejší efekt".

Teď už umíte téměř vše, co umím s HotkeyP já. Hlavně ale víte, jak si zobrazit nápovědu, takže se toho můžete naučit ještě mnohem více, než umím já. Přesto bych se v příštím článku k HotkeyP ještě jednou vrátila a podělila se s vámi o několik dalších vychytávek a drobných tipů, na které jsem přišla při psaní článku a při používání HotkeyP.

Třetí díl by se tu měl objevit příští týden, nejdéle za 14 dní. 😉