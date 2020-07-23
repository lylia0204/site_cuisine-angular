
export class Recette{
    constructor(
      public  _id : string,
      public nomRecette : string,
      public  imageRecette : string,
      public note : string,
      public noten : Number = parseInt(note),
      public  tpsTotal : string,
      public  difficulte :string,
      public  portion :string,
      public  budget :string,
      public  tpsPreparation :string,
      public  tpsCuisson :string,
      public  ingredients :string,
      public  materiels :string,
      public  etapesPreparation :string,
      public  conseil :string,
      public  typeRecette :string,
      public  source :string,
      public  site :string,
      public  optionType :string,
    ){}
}
