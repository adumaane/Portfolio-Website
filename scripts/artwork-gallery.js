const absurds = {
  name: 'Absurds',
  mainImg: 'https://fv2-2.failiem.lv/thumb_show.php?i=4kg75cbr622vj5b8&view&v=1&PHPSESSID=f830eebf46be1eefbd83eacf014a42f7bf5ca6bf',
  description: `Interaktīva instalācija. 1920x1080 px. 6'30''. 2025

Sinhronizēts video un interaktīvas 3D vides darbs, kurā tiek vizualizēta irracionāla stāsta interpretācija un tās izveidošanās no dažādu klausītāju skatpunktiem.

Runātājam bez priekšlaicīgas sagatavošanās ir jāizdomā irracionāls stāsts, ar irracionālu hronoloģiju, aprakstot kādu interesantu pēdējā laikā pieredzētu pastaigu, cenšoties pārliecināt klausītāju. Klausītājs vizualizē stāstu savā galvā, mēģina noticēt notikumu secībai un loģikai. Rezultātā prāts aizpilda nesakritības ar jaunu loģiku, veidojot jaunu realitāti.
Video daļa ir darba autora interpretācija, klausoties un vērojot runātāju pirmo reizi; interaktīvā daļa ir skatītāja iespēja patstāvīgi iziet cauri absurdā stāsta videi un manipulēt tās izveidi`
};

console.log(absurds);
document.querySelector('.art-name').innerHTML = `${absurds.name} JS`;
document.querySelector('.main-image').src = absurds.mainImg;
document.querySelector('.description').innerHTML =  absurds.description;