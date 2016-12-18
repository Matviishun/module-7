var out = ''

function print(data) {
    out += '<h2>' + data + '</h2>';
    document.getElementById('out').innerHTML = out;
}

function read(id) {
    return document.getElementById(id).value;
}

(function launch() {

})();

function isAdult() {

    var age = read('age');
    /*
     * 1. check isNaN or is empty;
     * 2. age is within 18 to 100
     * 3. print is access allowed
     */
    /*if(isNaN(age) || age == '') { //1. check isNaN or is empty;
     print('Passed values is not a number or' +
     'any value was not passed!');
     } else { //2. age is within 18 to 100
     if(+age >= 18 && +age <= 100) { //2. age is within 18 to 100
     print('Welcome to our site!'); //3. print is access allowed
     } else {
     print("Access denied! You`re too young or old!");
     }
     }
     }
     */
    if (!(isNaN(age) || age == '')) { //1. check isNaN or is empty;
        if (!(+age >= 18 && +age <= 100)) {
            print("Access denied! You`re too young or old!");
        } else {
            print('Welcome to our site!');
        }
    } else {
        print('Passed values is not a number or' +
            'any value was not passed!');
    }
}
/*
function whichSeason() {

    var season = read('season').toString().toLowerCase();


    * 1. Check is not empty.
    * 2. Pass to switch and check for literals.
    * 3. Provide output if not expected value passed.
    * */
    /*
    if(season != '') { // 1. Check is not empty.
          switch(season) {
              case 'spring': {
                  print('Welcome to spring!');
                  break;
              }
              case 'summer': {
                  print('Welcome to summer!');
                  break;
              }
              case 'autumn': {
                  print('Welcome to autumn!');
                  break
              }
              case 'winter': {
                  print('Welcome to winter!');
                  break;
              }
              default: {
                  print('There is no any season passed!');
              }
          }
    } else {
        print('No any value passed!')
    }
}
        */

    function lightTraffic() {
        var color = read('color').toString().toLowerCase();

        if(color!= '') { // 1. Check is not empty.
            switch(color) {
                case 'red': {
                    print('Stop!');
                    break;
                }
                case 'yellow': {
                    print('Wait few seconds and you will can go!');
                    break;
                }
                case 'green': {
                    print('Go!');
                    break
                }
                default: {
                    print('There is no any color passed!');
                }
            }
        } else {
            print('No any value passed!')
        }

    }
