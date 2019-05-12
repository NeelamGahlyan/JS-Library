/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(global, $){
    var Greeter = function(firstName, lastName, language){
        return new Greeter.init(firstName, lastName, language);
    }
    //these are the only languages supported, pass any other language will throw error
    var supportedLangs = ['en', 'es'];
    // greeting return based on langauge
    var greetings = { 
        en: 'Hello',
        es: 'Hola'
    };
    // formal greeting return based on langauge
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    var logMessages = {
        en: 'Logged In',
        es: 'Inicio session'
    }
    
    Greeter.prototype = {
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        },
        // throw error if language is not the supportedLangs
        validate: function(){
            if(supportedLangs.indexOf(this.language) === -1){
                throw "Invalid Language";
            }
        },
        greeting: function(){
            return greetings[this.language]+ ' '+ this.firstName;
        },
        formalGreetings: function(){
            return formalGreetings[this.language]+ ' '+ this.fullName();
        },
        greet: function(formal){
            var msg;
            if(formal){
                msg = this.formalGreetings();
            } else{
                msg = this.greeting();
            }
            
            if(console){
                console.log(msg)
            }
            
            return this;
        },
        // log function for developers 
        log: function(){
            if(console){
                console.log(logMessages[this.language] + '' + this.fullName());
            }
            return this;
        },
        // this function will let developer to change language on the fly
        setLang: function(lang){
            this.language = lang
            this.validate()
            return this;
        },
        // this methon is invoked on login 
        //==selector is the tag in which we are showing the greetings == formal defines which type of greetings 
        HTMLGreetings: function(selector, formal){
            console.log(selector)
            if(!$){
                throw "jquery not found"
            }
            if (!selector){
                throw "missing selector"
            }
            var msg;
            if(formal){
                msg = this.formalGreetings();
            } else {
                msg = this.greeting();
            }
            $(selector).html(msg);
            return this;
        }
    };
    // constructor for greeter library
    Greeter.init = function(fistName, lastName, language){
        var self = this;
        self.firstName = fistName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }
    Greeter.init.prototype = Greeter.prototype;
    // you can use this library by G$ ( same as jQuery with $)
    global.Greeter = global.G$ = Greeter;
}(window, jQuery));