// Code your solution in this file!
function distanceFromHqInBlocks(num){
    return Math.abs(42 - num);
}

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num) * 264;    
}

function distanceTravelledInFeet(start, destination){
    let distance = Math.abs(start - destination) * 264;
    return distance;
}

function calculatesFarePrice(start, destination){
    distanceFromHqInFeet(start, destination);

    let distance = Math.abs(start - destination) * 264;

    if(distance <= 400){
        return 0; //$0
    }
    else if (distance >= 401 && distance <= 2000){
        return (distance - 400) * 0.02; //Pay 2 cents per foot, excluding the first 400 feet
    }
    else if(distance >= 2001 && distance <= 2500){
        return 25; //$25
    }
    else{
        return 'cannot travel that far';
    }
}