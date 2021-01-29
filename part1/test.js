function discoutPrices (prices, discount)
{
    const discounted = [];
    const finalPrice = 0;

    for(let i = 0; i < prices.length; i++)
    {
        let discoutedPrice = prices[i] * (1-discount);
        finalPrice = Math.round(discoutedPrice * 100)/100;
        discounted.push(finalPrice);
    }

    console.log(finalPrice);

    return discounted;
}

let student = {
    name: 'Ava',
    major: 'Computer Science',
    'Grad Year': '2020',
    greeting: function(){console.log('Hello!');},
    'Favorite Teacher':{
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110','CSE 134', 'VIS 41']
};

function modifyArray(array, callback)
{
    const newArr = [];
    for(let i = 0; i < array.length; i++)
    {
        newArr.push(callback(array[i], function(x){
            return x * 2;
        }));
    }
    return newArr;
}

function doSomething(num, callback)
{
    return callback(num+2);
}

function printNums()
{
    
    console.log(i);
    setTimeout(function(){console.log(2);}, 1000);
    setTimeout(function(){console.log(3);},0);
    console.log(4)
}

printNums();