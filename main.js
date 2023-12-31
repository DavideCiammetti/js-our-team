'use strict';

// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

const team =  [
    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto': 'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'foto': 'img/angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'foto': 'img/walter-gordon-office-manager.jpg'
    },
    {
        'nome': ' Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto': 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'foto': 'img/scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto': 'img/barbara-ramos-graphic-designer.jpg'
    }
];
// stampo in conosle chiavie valori 
console.log(team[0]);
console.log(team[1]);
console.log(team[2]);
console.log(team[3]);
console.log(team[4]);
console.log(team[5]);

// creo elemeti per aggiungere le info al dom
const mainContainer = document.querySelector('.main-container');

for(let i = 0; i < team.length; i++){
    const info = document.createElement('div');
    info.innerHTML = `<img src="${team[i].foto}" alt="foto" class="img-size"> <div class="text-content"><p class="name-col">${team[i].nome} </p><p class="rule-col">${team[i].ruolo}</p></div>`;
    info.classList.add('p-mar');
    mainContainer.append(info);
}
