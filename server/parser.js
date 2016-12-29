var fs = require('fs')
var parse = require('csv-parse')

module.exports = function(file) {

  /* Parser qui va retourner un tableau contenant
  * toutes les donnees du fichier csv en entree
  */
  var readCSV = function(callback) {
    var parser = parse({delimiter: ','}, function(err, data){
      if (typeof callback === "function") {
        callback(data);
      }
    });

    fs.createReadStream(__dirname+file).pipe(parser);
  }

  /* Fonctions et variables utiles au parserFeedbacks */
  rowEltsConcernes = [];
  donneesDeLaMatiere = [];
  listeQuestions = [];
  tableauIndex = [];

  function selectionDesQuestionsConcernees(elt, index) {
    var arrayOfEltSplitted = elt.split('-');
    var codeElt = arrayOfEltSplitted[0];
    var nomQuestion = arrayOfEltSplitted[1];
    if (codeElt == codeMat) {
      tableauIndex[tableauIndex.length] = index;
      listeQuestions[listeQuestions.length] = nomQuestion;
    }
  };

  function selectionDesResultatsConcernes(elt, index) {
    for (var j = 0; j < tableauIndex.length; j++) {
      if (index == tableauIndex[j]) {
        rowEltsConcernes[j] = elt;
      }
    }
  };

  function traitementDonneesRecoltees(row, i) {
    if (i == 0) {
      row.forEach(selectionDesQuestionsConcernees);
      donneesDeLaMatiere[0] = listeQuestions;
    } else {
      row.forEach(selectionDesResultatsConcernes);
      donneesDeLaMatiere[i] = rowEltsConcernes;
    }
  };

  /* Parser qui va retourner un tableau contenant uniquement les feedbacks
  * concernant la matiere (de code codeMatiere)
  * les questions dans la premiere ligne
  * et 1 retour par ligne suivante (contenant notes ou commentaires)
  */
  var parserFeedbacks = function(codeMatiere, callback) {
    codeMat = codeMatiere;
    var parser = parse({delimiter: ','}, function(err, data){
      data.forEach(traitementDonneesRecoltees);
      if (typeof callback === "function") {
        callback(donneesDeLaMatiere);
      }
    });

    fs.createReadStream(__dirname+file).pipe(parser);
  }

  return {
    readCSV: readCSV,
    parserFeedbacks: parserFeedbacks
  }
}
