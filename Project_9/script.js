document.addEventListener('DOMContentLoaded', function() {
    var dieArray = [];
    var generateDie = document.createElement('button');
    
    generateDie.setAttribute('id', 'gd');
    generateDie.innerHTML = 'Generate Die';
    

    var rollDice = document.createElement('button');
    rollDice.setAttribute('id', 'rd');
    rollDice.innerHTML = 'Roll Dice';

    var sum = document.createElement('button');
    sum.setAttribute('id', 'sum');
    sum.innerHTML = 'Sum';


    document.body.appendChild(generateDie);
    document.body.appendChild(rollDice);
    document.body.appendChild(sum);

    document.getElementById('gd').addEventListener('click', function() {
        var issaDiv = document.createElement('div');
        issaDiv.className = 'die';
        issaDiv.innerHTML = random();
        document.body.appendChild(issaDiv);

    document.getElementById('rd').addEventListener('click', function() {
            
      issaDiv.innerHTML = random();
                    });          
            
    document.getElementById('sum').addEventListener('click', function() {
        alert 

    });
    issaDiv.addEventListener('click', function() {
        issaDiv.innerHTML = random();
    
    });

});
    
    

     function Die() {
        this.roll = function() {
            var numbers = random();
            this.value = numbers;
        }};
      
    
    
        

    

});










// Die.prototype.rolling = function() {
//     random();
// };

function random() {
return Math.floor((Math.random() * 6 + 1));
}

function getSum() {
var dice = 
}