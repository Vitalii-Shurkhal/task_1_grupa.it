const button = document.querySelector('#btn-1');

button.addEventListener('click', function () {

    // delete last table 
    if (document.querySelector('table')) {
        document.querySelector('table').remove()
    }

    // function which generated random numbers and return array 
    function generateRandomArray() {
        let rundomNumberArray = [];
        for (let i = 0; i < 20; i++) {
            const getRundomNumber = Math.floor(Math.random() * 101);
            rundomNumberArray.push(getRundomNumber);
        }
        return rundomNumberArray;
    }

    // function sort generate array from min to max number from  generated random numbers function
    function sortArray(callback) {

        return callback().sort(function (a, b) {
            return a - b
        })
    }

    // write the sorted array 
    let sortedArr = sortArray(generateRandomArray)

    // function return sorted numbers table and check Even or Odd values  
    function createTable(array) {

        let table = document.createElement('table');
        let rowHeader1 = table.insertRow();
        let rowTitle1 = rowHeader1.insertCell()
        rowTitle1.innerText = 'Even'
        let rowHeader2 = table.insertRow();
        let rowTitle2 = rowHeader2.insertCell()
        rowTitle2.innerText = 'Odd'

        // check Even or Odd values 
        array.forEach(element => {

            if (element % 2 == 0) {
                let cell = rowHeader1.insertCell();
                cell.innerText = element
            } else {
                let cell = rowHeader2.insertCell();
                cell.innerText = element
            }

        });
        return table

    }

    // output the table to the HTML document 
    document.body.append(createTable(sortedArr))

})






