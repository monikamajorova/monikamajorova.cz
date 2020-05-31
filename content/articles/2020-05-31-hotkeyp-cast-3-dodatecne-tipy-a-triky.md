---
title: "HotkeyP, část 3: Dodatečné tipy a triky"
date: "2020-05-31"
---
Po delší neplánované pauze je zde konečně závěrečný článek série článků o programu pro definování vlastních klávesových zkratek, HotkeyP. Dnes se podíváme na několik posledních tipů pro práci s tímto programem.

## Pro koho to je?

Článek je určen pro ty, kteří četli první dva díly série článků o programu HotkeyP a rádi by se dozvěděli nějaké další tipy a triky, jak se dá HotkeyP využít. Pokud jste je nečetli a HotkeyP nepoužíváte, doporučuji začít prvním dílem: [HotkeyP: Ovládněte počítač svými klávesovými zkratkami](/blog/2020-05-03-hotkeyp-ovladnete-pocitac-svymi-klavesovymi-zkratkami).

## Tip 1: Přidání "klávesové zkratky" do tray ikony HotkeyP

Některé funkce, které nepotřebujete až tak často, abyste pro ně potřebovali nastavovat klávesovou zkratku, ale přesto dostatečně často na to, abyste hledali rychlejší cestu, než se k nim pokaždé "proklikávat", si můžete přidat do menu v tray ikoně programu HotkeyP.

Aby bylo jasno, tray ikonami mám na mysli takové ty ikonky vedle hodin, nejčastěji v pravém dolním rohu obrazovky. Tam se nachází i ikonka HotkeyP, pokud je program zapnutý. Vypadá takto:

![HotkeyP - Tray ikona](/images/hotkeyp/hotkeyp_tray_ikona.png)

Když na tuto ikonu kliknete pravým tlačítkem, objeví se menu, které bude pravděpodobně (zatím) obsahovat jen dvě položky: Zobrazit a Konec. Nyní si ukážeme, jak do tohoto menu přidat vlastní položku, která spustí tu akci, kterou si tam nastavíme. Schválně jsem tento tip nazvala Přidání "klávesové zkratky", jelikož tato položka se nastavuje úplně stejně, jako kterákoliv klávesová zkratka, kterých jsme v této sérii článků už několik nastavili, s tím rozdílem, že místo nastavení klávesové zkratky v horní části dialogu pouze zaškrtneme box _Přidat do menu u ikony v systémové liště_.

Důležité je vědět, že zkratky takto přidané do tray ikony by neměly vykonávat žádné akce s nějakým konkrétním oknem, jelikož při kliknutí na tray ikonu se dané okno "zneaktivní" a akce se vykonávají (pravděpodobně) nad samotnou ikonou nebo systémovou lištou. Akce jako makra (určené k použití v konkrétním místě) nebo vkládání textu tedy pravděpodobně nebudou fungovat nebo se budou chovat nesprávně. Akce jako spouštění programu, které jsme si ukazovali v prvním dílu, nebo třeba ztišení zvuku, by měly fungovat bez problému.

Ukažme si tedy pro jistotu polopatě, jak třeba udělat do menu v tray ikoně zkratku pro zobrazení seznamu nainstalovaných programů z Ovládacích panelů, abychom ho tam nemuseli hledat pokaždé, když chceme z počítače odinstalovat nějaký program:

1. Otevřeme okno pro přidání klávesové zkratky jako obvykle pomocí tlačítka _Přidat_ v hlavním okně.
2. Vedle políčka Příkaz klikneme na tlačítko se symbolem **<**, v zobrazené nabídce vybereme možnost _Systém_ -> _Ovládací panely_ -> _Přidat nebo odebrat programy_.
3. Zaškrtneme políčko _Přidat do menu u ikony v systémové liště_ v pravé části okna (mělo by to být druhé zaškrtávací políčko odshora).
4. Uložíme zkratku tlačítkem _OK_.

![HotkeyP - Tray ikona](/images/hotkeyp/hotkeyp_tray_ikona_zkratka.png)

To je celé. Nyní by se po kliknutí pravým tlačítkem myši na tray ikonu HotkeyP mělo objevit menu s novou položkou _Přidat nebo odebrat programy_.

![HotkeyP - Tray ikona](/images/hotkeyp/hotkeyp_tray_ikona_menu.png)

Pokud bychom chtěli, aby se položka menu jmenovala jinak, není to problém - stačí při vytváření klávesové zkratky vyplnit libovolný název (třeba "Vybrat program k odinstalování...") do políčka _Popis_ v levé spodní části okna. Samozřejmě lze i existující zkratku upravit pomocí tlačítka _Upravit_, jak jsme si ukazovali v prvním dílu.

Zkratce lze současně nastavit jak klávesovou zkratku, tak přidání do tray ikony, pokud se vám to z nějakého důvodu hodí. Není potřeba vytvářet zkratku dvakrát - jednoduše stačí vyplnit obě položky: klávesovou zkratku i zvolit přidání do ikony.

## Tip 2: Používání klávesových zkratek v okně pro přidání klávesové zkratky

Zde bych chtěla uvést pár malých tipů týkajících se okna pro přidávání klávesové zkratky.

### Tip 2.1: Nastavení klávesové zkratky

Už jsme si ukázali, že klávesová zkratka, která má spouštět danou akci, se nastavuje v horním políčku tak, že ji prostě stiskneme. Je tu ale ještě jedna možnost, jak zkratku nastavit: Stačí stisknout pouze klávesu samotnou (bez podržení kláves _Ctrl_, _Alt_, _Shift_ nebo _Win_) a následně zaškrtnout příslušné políčko _Ctrl_, _Alt_, _Shift_ nebo _Win_. Musí to být v tomto pořadí, ne naopak - tato políčka se totiž při nastavování klávesy zaškrtnou nebo odškrtnou podle toho, které klávesy jste přitom drželi. Já tento způsob nastavování většinou nepoužívám, rychlejší a jednodušší je tu klávesovou zkratku stisknout celou, zároveň se tím i částečně ověří případné konflikty - v případě, že je klávesová zkratka zachycena někde jinde, buď se v políčku nezobrazí, nebo se může zobrazit i něco jiného, než by se zobrazit mělo - ještě se o tom zmíním v dalším z tipů.

### Tip 2.2: Deaktivace upravované klávesové zkratky

Když je otevřené okno pro úpravu klávesové zkratky, je tato klávesová zkratka deaktivována. Proto, pokud vám nefunguje nějaká klávesová zkratka, jedna z věcí, která to může způsobovat, je právě otevřené okno pro její úpravu. Před testováním každé klávesové zkratky se proto přesvědčete, že jste ji uložili kliknutím na tlačítko _OK_ a okno pro její úpravu je zavřené. Je dobré zmínit, že to platí jen pro klávesovou zkratku, jejíž okno pro úpravu je právě otevřené, ostatní klávesové zkratky z HotkeyP běžně fungují, a to dokonce i v tomto okně - z čímž souvisí následující tip.

### Tip 2.3: Konflikty s již nastavenými klávesovými zkratkami

Při vkládání nové klávesové zkratky (nebo úpravě stávající) se vám může stát, že při stisknutí klávesové zkratky pro její nastavení do horního políčka pro klávesovou zkratku se nic neděje, nebo se v políčku objeví něco úplně jiného, než bylo stisknuto, případně se objeví chybová hláška nebo se dokonce celé okno zavře. Může to být způsobeno tím, že jste stiskli klávesovou zkratku, kterou už máte v HotkeyP nastavenou, případně ji odchytává a zpracovává nějaký jiný program.

HotkeyP totiž při editaci zkratky sice tuto zkratku blokuje, ale žádnou jinou (která je v něm nastavená) ne, místo toho se standardně vykoná. A tak se může stát, že se v políčku objeví třeba poslední písmeno makra, pokud jste použili makro, nebo třeba _Ctrl_ + _V_, pokud jste použili funkci pro vkládání textu, jelikož ta vnitřně vkládá texty právě pomocí klávesové zkratky _Ctrl_ + _V_. Pokud je políčko pro nastavení klávesové zkratky aktivní (bliká v něm kurzor), tak HotkeyP sice zkratky odchytává, ale před tím je zpracovává, pokud jsou v něm nastaveny (s výjimkou právě upravované klávesové zkratky). Takže pokud tam stisknete třeba klávesu pro pozastavení hudby, vloží se tato klávesa do políčka, ale hudební přehrávač ji nezaregistruje. Pokud ovšem stisknete klávesovou zkratku, která je už v HotkeyP nastavená pro spouštění programu, spustí se tento program a do políčka se nevloží nic.

### Tip 2.4: Zpětné lomítko

Pokud tvoříme makro, je dobré si dát pozor na to, abychom ke speciálním klávesám dávali opravdu zpětné lomítko. Například jsem jednou napsala makro `/play_pause` v naději, že tím nastavením na klávesovou zkratku pozastavení přehrávače hudby. Chvíli jsem zjišťovala, proč se nic neděje, jen počítač cinkal jako že jsem zmáčkla něco, co jsem neměla. Zkusila jsem restartovat HotkeyP i hudební přehrávač a stále nic. Už jsem začínala přemýšlet o restartu celého počítače, když mě v tu chvíli ještě napadlo otevřít Poznámkový blok a tuhle zkratku tam zmáčknout. Samozřejmě se celé makro vypsalo jako text a mě v tu chvíli došlo, že HotkeyP to celé bral jako text právě proto, že tam nebylo zpětné lomítko a snažil se tento text napsat do právě aktivního okna (ve kterém ale nebylo aktivní žádné políčko pro vstup, proto počítač cinkal). Správný tvar toho makra je totiž `\play_pause`. 😉

A pokud chcete napsat pomocí makra do textu zpětné lomítko, stačí ho napsat dvakrát: `\\`.

## Tip 3: Štítky s popisky kláves

Pokud si, stejně jako já, nastavujete různé akce na klávesové zkratky Ctrl + Shift + Alt + F1 ... Ctrl + Shift + Alt + F12, u kterých je pravděpodobně nejmenší šance, že bude nějaký program využívat také, možná je pro vás těžké si všechny ty klávesové zkratky zapamatovat. Napadl mě menší tip: nalepte si ke klávesám _F1_ - _F12_ štítky s popisky, co která klávesa dělá. Pak si na ně nebudete muset dlouze vzpomínat a časem se je třeba naučíte zpaměti - do té doby vám ale štítky mohou velmi usnadnit práci. Já je sice nepoužívám, jelikož jsem si zkratky vytvářela postupně jednu po druhé a postupně jsem si je zapamatovala, ale možná se to někomu bude jako rada hodit. 😉

## Konec

A to je pro tuto sérii ode mě vše. HotkeyP toho bezpochyby umí ještě mnohem více, podělila jsem se s tím, co z toho používám já a také s několika tipy, na které jsem během používání přišla. Některé postupy a tipy jsem vymyslela dokonce přímo při psaní této série článků. 😀

Tímto uzavírám celou sérii článků o HotkeyP, první sérii na tomto blogu. Neříkám, že se k HotkeyP nikdy nevrátím v nějakém z dalších článků, to hlavní ale bylo napsáno. Pokud se vám série líbila či vám články dokonce pomohly, klidně mi to můžete napsat, potěší mě to. 😉 Pokud byste si přáli o HotkeyP vědět něco konkrétního, co ve článcích nezaznělo, klidně se můžete zeptat, třeba z toho vznikne i nějaký další článek, když to bude potřeba rozebrat trochu více. 🙂