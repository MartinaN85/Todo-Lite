## Reflektion – Git & Agilt

# Egen user story + Acceptance Criteria + INVEST

* US2: Som användare vill jag kunna markera aktiv/klar så att jag vet vad som behöver göras och har gjorts. (uppdaterad)

[x] Klara todos blir röda vid klick och är gröna som aktiva.

* US4: Som användare vill jag kunna redigera en todo, så att jag kan ändra eventuella fel m.m.

•	Independent: Ja – redigering påverkar inte andra funktioner direkt.
•	Negotiable: Ja – kan göras inline eller via popup.
•	Valuable: Ja – ger flexibilitet och förbättrar användbarhet.
•	Estimable: Ja – tydlig logik, kan brytas ner i UI + funktion.
•	Small: Ja – kan göras i en fokuserad PR.
•	Testable: Ja – kan testas genom att ändring sparas korrekt.

Acceptance Criteria:
[x] Varje todo har en redigeringsikon eller knapp.
[x] Klick på redigera öppnar ett inputfält med befintlig text.
[x] En spara-knapp uppdaterar todo med ny text.
[x] Tomma uppdateringar ignoreras eller ger felmeddelande.


* US5: Som användare vill jag få en bekräftelse innan jag tar bort en todo, så att jag inte tar bort en av misstag.

•	Independent: Ja – tillägg till delete-funktionen, men kan byggas separat.
•	Negotiable: Ja – typ av bekräftelse (popup, modal, alert) kan varieras.
•	Valuable: Ja – minskar risken för misstag.
•	Estimable: Ja – tydlig funktion, lätt att uppskatta.
•	Small: Ja – en dialog och en knapp.
•	Testable: Ja – kan testas genom att todo inte tas bort utan bekräftelse.

Acceptance Criteria:
[x] Klick på delete visar en bekräftelse-dialog.
[x] Dialogen har två val: "ok" och "Avbryt".
[x] Todo tas bort först efter att jag klickat "Ta bort".
[x] Klick på "Avbryt" stänger dialogen utan att todo tas bort.


* US6: Som användare vill jag kunna se hur många todos jag har kvar att göra för en bra överblick.

•	Independent: Ja – räknaren är en separat komponent.
•	Negotiable: Ja – placering och formulering kan varieras.
•	Valuable: Ja – ger översikt och motivation.
•	Estimable: Ja – enkel logik, lätt att uppskatta.
•	Small: Ja – en funktion och en DOM-uppdatering.
•	Testable: Ja – kan testas genom att antalet uppdateras korrekt.

Acceptance Criteria:
[x] En räknare visas med antal aktiva (oklara) todos.
[x] Räknaren uppdateras automatiskt när jag lägger till, tar bort eller markerar todos.
[x] Texten är tydlig, t.ex.. “3 kvar att göra”.
[x] Räknaren visas på en logisk plats i gränssnittet (t.ex. ovanför listan).

* User Story 7:  Som användare vill jag att alla interaktiva komponenter (knappar, inputfält, dialogrutor) har en enhetlig och tydlig styling så att appen känns konsekvent, professionell och lätt att använda

Acceptance Criteria:
[x] Overlay visas korrekt bakom dialogrutan och döljs när dialogen stängs
[x] Alla knappar har konsekvent padding, färg, kantlinje och hover-effekt
[x] Bekräftelserutan har en tydlig visuell stil som matchar resten av appen
[x] Inputfält har enhetlig stil och placering i förhållande till knappar
 

•	Independent: Ja – styling kan göras separat från funktionalitet, påverkar inte logik eller datamodell.
•	Negotiable: Ja – färgval, form, typografi och komponentstil kan justeras efter behov.
•	Valuable: Ja – ger användaren en mer konsekvent och professionell upplevelse.
•	Estimable: Ja – tydlig visuell uppgift, lätt att uppskatta i story points.
•	Small: Ja – gäller ett begränsat antal komponenter (knappar, inputs, dialog).
•	Testable: Ja – kan testas visuellt och genom att UI-komponenter följer designregler.

2) Sprintmål + Definition of Done (DoD)
Sprintmål: Implementera todo-funktioner enligt US4–US7, hantera Git-konflikter, och skapa PR med ren commit-historik och uppdaterad README.

DoD (checklista):

[x] Kod kör lokalt utan fel

[x] PR granskad och godkänd (minst 1 review)

[x] README uppdaterad

[x] Issue/kort länkat och stängt vid merge

3) Retro: Start / Stop / Continue
Start: Alltid välja Squash & merge för tydligare historik i git. 

Stop: Arbeta för snabbt utan att kolla att jag är i rätt branch

Continue: Använda branch-namn som feature/add-todo och commit-konventioner som feat(...), docs(...), fix(...) samt Beskrivning: varför + hur 

Förbättring jag provar nästa sprint: Jag kommer att använda squash-rebase konsekvent för att hålla commit-historiken ren. Det gör det lättare att samarbeta och granska kod i teamet.

4) Hänvisningar 
