function betterThanAverage(classPoints, yourPoints) {
    let totalScore =  classPoints.reduce((sum, score) => sum + score, 0);
    totalScore += yourPoints;
    const averageScore = totalScore / classPoints.length;
    return yourPoints > averageScore;
}