//Here we recover the JSON content from notes.js then we parse it into a JS object.
let noteToObject = JSON.parse(notesJSON);

class Note {
    constructor(titre, date, couleur, dateRappel = undefined) {
        //To be checked later!!
        this._titre = titre;
        this._date = date;
        this._couleur = couleur;
        this._dateRappel = dateRappel;
    }

    get titre() {
        return this._titre;
    }

    get date() {
        return this._date;
    }

    get couleur() {
        return this._couleur;
    }

    get dateRappel() {
        return this._dateRappel;
    }

    set titre(titre) {
        if (typeof titre === "string") {
            this._titre = titre;
        }
    }

    set date(date) {
        if (typeof date === "string") {
            this._date = date;
        }
    }

    set couleur(couleur) {
        //Down here the array is created in the condition itself!! 
        //No need to check the type for the values in the array are already stings!!
        if (["rouge", "orange", "jaune", "vert"].includes(couleur)) {
            this._couleur = couleur;
        }
    }

    set dateRappel(dateRappel) {
        if ((typeof dateRappel === "string") || (typeof dateRappel === undefined)) {
            this._dateRappel = dateRappel;
        }
    }

    static displayNote(instancesArray,container) {
    
        instancesArray.forEach(instance=>{
            container.insertAdjacentElement("beforeend",instance.render());
        });
        
    }


}


/* __________________First Extension of Note_____________________ */

//Handles the notes object!!

class TextNote extends Note {
    constructor(titre, date, couleur, dateRappel, text) {
        super(titre, date, couleur, dateRappel);
        if (typeof text === "string") {
            this._text = text;
        }
    }

    get text() {
        return this._text;
    }

    set text(text) {
        if (typeof text === "string") {
            this._text = text;
        }
    }
    
    render(){
    
        let paragraph = document.createElement("div");
        paragraph._noteReference_ = this;
        paragraph.innerHTML =  `<h1>Le titre:</h1><h3>${this.titre}</h3>
                                <h1>Le titre:</h1><h3>${this.date}</h3>
                                <h1>Le titre:</h1><h4>${this.couleur}</h4>
                                <h1>Le titre:</h1><h4>${this.dateRappel}</h4>
                                <h1>Le titre:</h1><p>${this.text}</p>`; 
                                                        
        document.body.appendChild(paragraph);
        
        return paragraph;
        
    }
}


/* __________________Second Extension of Note_____________________ */

//Handles the checklist object!!

class ChecklistNote extends Note {

    constructor(titre, date, couleur, dateRappel, toDo) {
        super(titre, date, couleur, dateRappel);
        this._toDo = toDo;
    }

    get toDo() {
        return this._toDo;
    }

    set toDo(toDo) {
        //This is how we check the the type array (instanceof)!!
        //Check this other way: Array.isArray([1, 2, 3]); true!!
        if (toDo instanceof Array) {
            this._toDo = toDo;
        }
    }
    
    render(){
    
    
    }

}

//In this array we will push the instances of both TextNote class(extended from Note) ChecklistNote class(extended from Note)
let instancesArray = [];
console.log(instancesArray);

//A for of loop is used to iterate on (noteToObject) object but not in a random way!!
//Each child class is meant for a specific part of the objects within (noteToObject)!!
//So the need to distinguish which class will get what object coming from (noteToObject)!!
//For that we use what is specific to the object: 
//The texNote has a "texte" key.
//The toDo has a "toDo" key.

for (let value of noteToObject) {
    if (value.texte !== undefined) {
        //Same parameters order as bellow(on the extended class constructor) for the instantiation !!!!
        //titre,date,couleur,dateRappel,text!!
        let textNote = new TextNote(value.titre, value.date, value.couleur, value.dateRappel, value.text);
        instancesArray.unshift(textNote);
    } else if (value.toDo !== undefined) {
        //Same parameters order as bellow(on the extended class constructor) for the instantiation!!!!
        //titre,date,couleur,dateRappel,toDo
        let toDo = new ChecklistNote(value.titre, value.date, value.couleur, value.dateRappel, value.toDo);
        instancesArray.unshift(toDo);
    };

};

