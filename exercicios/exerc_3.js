const assert = require('assert');

function temHabilidade(skills) {
    for (let i = 0; i < skills.length; i++) {
        if(skills[i] == "Javascript"){
            return true;
        }
    }
    return false;
}
 function temHabilidade2(skills) {
         if(skills.indexOf("Javascript") != 1){
            return true;
         }
    return false;
 }



var skills = ["Javascript", "ReactJS", "React Native"];
var teste = temHabilidade(skills);
var teste2 = temHabilidade2(skills);

try{
    assert.equal(true, teste);
    assert.equal(true, teste2);
}catch (e) {
    console.log(e);
}