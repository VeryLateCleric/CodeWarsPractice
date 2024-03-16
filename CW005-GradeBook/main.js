function getGrade (s1, s2, s3) {
    const averageGrade = ((s1 + s2 + s3)/3)
    
    if (averageGrade >= 90) {
      return "A"
    } else if (averageGrade >= 80) {
        return "B"
    } else if (averageGrade >= 70) {    
        return "C"
    } else if (averageGrade >= 60) {
        return "D"
    } else if (averageGrade < 60) {
        return "F"
    }
  }

//   Rewrote {} else { if( )} into {} else if (){} for each condition.