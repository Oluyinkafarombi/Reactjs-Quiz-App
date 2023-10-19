// Declare the UI elements
var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var prevButton = document.getElementById('btnPrev');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
        questions:[
            {
                q:'One of this is the name of a river in Nigeria',
                options: ['Danube', 'Niger', 'Congo', 'Limpopo'],
                answer:2
            },
            {
                q:'What is the name of the current Deadly virus',
                options: ['Antrax', 'Killvi', 'Corona', 'Wuhanvi'],
                answer:3
            },
            {
                q:'The reaction between fats and oil and caustic alkali is',
                options: ['Oxidation', 'Saponification', 'Substitution', 'Reduction'],
                answer:2
            },
            {
                q: 'Every object will continue in a state of rest except acted upon by an external force is which law',
                options: ['Inertia', 'Universal gravitation', 'Newton 1st Law', 'Newton 2nd Law'],
                answer:3
            },
            {
                q: 'The branch of Engineering that integrate Electronic Engineering with Computer Science is',
                options: ['Chemical Engineering', 'Computer Engineering', 'Mechanical Engineering', 'Civil Engineering'],
                answer:2
            },
            {   q: 'The branch of Artificial Intelligence that deals with reasoning algorithms is',
                options: ['Genetic Algorithm', 'Neural Network', 'Fuzzy Logic', 'Ant Algorithm'],
                answer:3
            },
            {   
                q: 'The branch of Computer science that deals with graphical and mathematical modelling tool applicable to many systems is',
                options: ['Computer grahics', 'Machine learning', 'Data Science', 'Petri-net'],
                answer:4
            },
            {
                q: 'The mathematical discipline that studies systems intended for servicing a random flow of requests in Computer science is',
                options: ['Queuing theory', 'Ant Colony algorithm', 'Case base reasoning', 'Poisson probability distribution'],
                answer:1
            },
            {
                q: 'In Computer Hacking, Bit-Flipping attack is an attack on',
                options: ['MAC Address spoofing', 'Cryptographic cipher', 'DNS enumeration', 'NS lookup'],
                answer:2
            },
            {
                q: 'The process of creating a blueprint or map of an organizations network and systems is',
                options: ['Network blocks', 'System architecture', 'Information theft', 'Footprinting'],
                answer:4
            },
            {   q: 'In Ethical Hacking, Reconnaissance applies to the process of',
                options: ['Footprinting', 'Spy fu', 'Information gathering', 'Information theft'],
                answer:3
            },
            {   q:  'The process of locating all the DNS servers and their corresponding records for an organization is',
                options: ['DNS configuration', 'DNS enumeration', 'DNStuff', 'NSlookup'],
                answer:2
            },
            {   q:  'The numerical optimization Algorithm that has both natural selection and natural genetics is',
                options: ['Ant colony optimization algorithm', 'Genetic algorithm', 'Cultural-Base algorithm', 'Simulated annelling'],
                answer:2
            },
            {   q:  'The branch of mathematical analysis developed to study decision making in conflict situations is',
                options: ['Game theory', 'Solution theory', 'Poisson theory', 'Pythagoras theorem'],
                answer:1
            },
            {   q:   'In music, what is GAVOTTE?',
                options: ['Sing', 'Chorus', 'Drum', 'Dance'],
                answer:4
            } 
        ],

        index:0,

        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
                prevButton.style.display="none";
            }
        },

        next: function(){
            this.index++;
            this.load();
        },

        previous: function(){
            if (this.index <= 0 === true) {
                previous.style.display = "none"
                this.load();
            }
            else {
                this.index--;
                this.load();
            }
        },

        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },

        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].styles.pointerEvents="none";
            }
        },

        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.score + "/" +this.questions.length;
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}

function prev(){
    app.prev();
    app.allowClick();
}