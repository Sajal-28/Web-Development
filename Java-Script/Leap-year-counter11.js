function isLeap(year){
    if (year % 4 === 0) {
       if (year % 100 === 0) {
           if (year % 400 === 0) {
               return "it is leap year"
           }
           else {
               return "it is not leap year."
           }
       }
        else {
            return "it is leap year."
        }
    }
    else {
        return "Not leap year."
    }
      
}

isLeap(1989);