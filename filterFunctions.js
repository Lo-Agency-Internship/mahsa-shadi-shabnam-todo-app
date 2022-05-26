function DateobjToString(date){
    let day = date.getDate();
    if (day < 10){
         day =  "0" + day ;
    }
    
    let month = date.getMonth() + 1;
    if (month < 10){
        month = '0' + month ;
    }
    else{
        let day = day;
    }
    let year = date.getFullYear();
    let dateString = `${year}-${month}-${day}`;
    //console.log(year + "-"+ month +"-");
    return dateString

    }

function filterDateMonthly(date){
    let todayDate = new Date();
    let nextMonth = new Date();
    nextMonth.setDate(new Date().getDate() + 30);
    let startDate = DateobjToString(todayDate);
    let endDate = DateobjToString(nexMonth);
    return  date > startDate && date < endDate
    }


function filterDateWeekly(date){
    let todayDate = new Date();
    let nextWeek = new Date();
    nextWeek.setDate(new Date().getDate() + 7);
    let startDate = DateobjToString(todayDate);
    let endDate = DateobjToString(nextWeek);
    return  date > startDate && date < endDate
    }


module.exports = {filterDateWeekly,filterDateMonthly};