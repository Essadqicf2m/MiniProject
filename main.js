//Here we recover the JSON content from notes.js then we parse it into a JS object.
let noteToObject = JSON.parse(notesJSON);


class Note
{
    constructor(titre,date,couleur,dateRappel = undefined){
    //To be checked later!!
        this._titre = titre;  
        this._date =  date;  
        this._couleur = couleur;
        this._dateRappel = dateRappel;
    }

    get titre(){
        return this._titre;
    }
    
    get date(){
        return this._date;
    }
    
    get couleur(){
        return this._couleur;
    }
    
    get dateRappel(){
        return this._dateRappel;
    }
    
    set titre(titre){
        if(typeof titre === "string"){
            this._titre = titre;  
        }
    }
    
    set date(date){
        if(typeof date === "string"){
            this._date = date;
        }
    }
    
    set couleur(couleur){
        //Down here the array is created in the condition itself!! 
        //No need to check the type for the values in the array are already stings!!
        if(["rouge","orange","jaune","vert"].includes(couleur)){
            this._couleur = couleur;
        }  
    }
    
    set dateRappel(dateRappel){
        if((typeof dateRappel === "string")||(typeof dateRappel === undefined)){
            this._dateRappel = dateRappel;
        }   
    }
    
    displayNote(){
    
    
    }


}


/* __________________First Extension of Note_____________________ */

/* {
    "titre": "Notes Javascript",
    "texte": "Une méthode est une fonction appartenant à un objet",
    "date": "15/01/2021",
    "couleur": "rouge",
    "dateRappel": "null"
} */

class TextNote extends Note
{
    constructor(titre,date,couleur,dateRappel,text){
        super(titre,date,couleur,dateRappel);
        this._text = text;   
    }
    
    get text(){
        return this._text;
    }
    
    set text(text){
        if(typeof text === "string"){
            this._text = text;  
        }
    }
    
}

/* let textNoteTest = new TextNote("BlaBla","02.02.2022","Red",undefined,"ighijs dqhgfoi sdghfij jsbjf dglkjhbs dfgijhqsdfl gjh sdflgjhsdfg");
console.log(textNoteTest); */


/* __________________Second Extension of Note_____________________ */

/* {
    "titre": "Notes Javascript",
    "toDo": [
        {"Faire les courses": true},
        {"Payer le loyer": false}
    ],
    "date": "18/01/2021",
    "couleur": "rouge",
    "dateRappel": "null"
} */

class ChecklistNote extends Note
{

    constructor(titre,date,couleur,dateRappel,toDo){
        super(titre,date,couleur,dateRappel);
        this._toDo = toDo;   
    }
    
    get toDo(){
        return this._toDo;
    }
    
    set toDo(toDo){
    //This is how we check the the type array!!
    //Check this other way: Array.isArray([1, 2, 3]); true!!
        if(toDo instanceof Array){
            this._toDo = toDo;  
        }
    }
    
}

//In this array we will push the instances of both TextNote class(extended from Note) ChecklistNote class(extended from Note)
let textNoteArray = [];

for(let value of noteToObject){
    //Same parameters order as bellow(on the extended class constructor) for the instantiation !!!!
    //titre,date,couleur,dateRappel,text!!
    //A for of loop is used to iterate on (noteToObject) object but not in a random way:
    //Each child class is meant for a specific part of the objects within (noteToObject) so the need to distinguish
    //which is the iteration of which class
/* _____________________________________________________________________ */
    /* {
    "titre": "Notes Javascript",
    "texte": "Une méthode est une fonction appartenant à un objet",
    "date": "15/01/2021",
    "couleur": "rouge",
    "dateRappel": "null"
    } */
/* _____________________________________________________________________ */

    if(value.texte !== undefined){
        let textNote = new TextNote(value.titre,value.date,value.couleur,value.dateRappel,value.text);
        textNoteArray.unshift(textNote);
    //Same parameters order as bellow(on the extended class constructor) for the instantiation!!!!
    //titre,date,couleur,dateRappel,toDo
    }else if(value.toDo !== undefined){
        let toDo = new ChecklistNote(value.titre,value.date,value.couleur,value.dateRappel,value.toDo);
        textNoteArray.unshift(toDo);       
    };
    
};



