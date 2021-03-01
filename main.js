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
        if(typeof couleur === "string"){
            this._couleur = couleur;
        }   
    }
    
    displayNote(){
    
    
    }




}

class TextNote extends Note
{

}

let textNoteTest = new TextNote("BlaBla","02.02.2022","Red");
console.log(textNoteTest);

class ChecklistNote extends Note
{

}


