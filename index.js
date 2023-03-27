// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers  =  function(){
    const slicedArray = drivers.slice(0, 2);
    return slicedArray ;
}


console.log(returnFirstTwoDrivers())

const returnLastTwoDrivers  =  function(){
   const slicedArray2 = drivers.slice(2);
    return slicedArray2;
}


console.log(returnLastTwoDrivers())


const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];
console.log(selectingDrivers)


const createFareMultiplier = function(fareMultiplier){
    return function(value){
        return fareMultiplier * value ;
    }
}


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers,rando){
    return rando(drivers);
}


console.log(selectDifferentDrivers(drivers ,returnFirstTwoDrivers))