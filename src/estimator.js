const covid19ImpactEstimator = (data) => {
    let currentlyInfected = data.reportedCases * 10
    let severeInfection = data.reportedCases * 50

    let infectionsByRequestedTime = currentlyInfected * (2 ** (timeToElapse/3))
    let infectionsByRequestedTimeSevere = severeInfection * (2 ** (timeToElapse/3))

    let severeCasesByRequestedTime = (15/100) * infectionsByRequestedTime
    let severeCasesByRequestedTimeSevere = (15/100) * infectionsByRequestedTimeSevere

    let hospitalBedsByRequestedTime = (35/100) * data.totalHospitalBeds


    let impact = {currentlyInfected, infectionsByRequestedTime, hospitalBedsByRequestedTime}
    let severeImpact = { currentlyinfected: severeInfection, infectionsByRequestedTime: infectionsByRequestedTimeSevere,
        hospitalBedsByRequestedTime, 
    }
};

export default covid19ImpactEstimator;
