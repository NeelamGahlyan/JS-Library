/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var g = G$('John', 'Doe');
// example of chainable methods
g.greet().setLang('es').greet(true);
// creating new object of greeter and fetching language on login button and embeding greetings in H1 tag
$('#login').click(function(){
    var loginGrtr = G$('John', 'Doe');
    $('#logindiv').hide();
    loginGrtr.setLang($('#lang').val()).HTMLGreetings('#greetings', true).log();
});