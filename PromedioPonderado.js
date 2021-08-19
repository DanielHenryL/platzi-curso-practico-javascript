const notes= [
    {
       course:"Educacion Fisica",
       note:10,
       credit:2, 
    },
    {
       course:"Programacion",
       note:8,
       credit:5,
    },
    {
        course:"Finanzas Personales",
        note:7,
        credit:5, 
    },
];

const notesWithCredit = notes.map(function(noteObject)
{
    return noteObject.note * noteObject.credit;
}
);

const sumOfNotesWithCredit=notesWithCredit.reduce(
    function(sum=0,newvalor){
        return sum + newvalor;
    }
);
const Credits=notes.map(function(ObjectCredit){
    return ObjectCredit.credit;
}
);
const sumOfCredits= Credits.reduce(
    function(sum=0,newVal){
        return sum + newVal;
    }
);

const promedioPonderado=sumOfNotesWithCredit / sumOfCredits;