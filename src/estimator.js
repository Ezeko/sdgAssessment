const covid19ImpactEstimator = (data) => {
    let currentlyInfected = data.reportedCases * 10
    let severeInfection = data.reportedCases * 50

    let infectionsByRequestedTime = currentlyInfected * (2 ** (timeToElapse/3))
    let infectionsByRequestedTimeSevere = severeInfection * (2 ** (timeToElapse/3))

    let severeCasesByRequestedTime = (15/100) * infectionsByRequestedTime
    let severeCasesByRequestedTimeSevere = (15/100) * infectionsByRequestedTimeSevere

    let hospitalBedsByRequestedTime = (35/100) * data.totalHospitalBeds

    let casesForICUByRequestedTime = (5/100) * infectionsByRequestedTime
    let casesForICUByRequestedTimeSevere = (5/100) * infectionsByRequestedTimeSevere

    let casesForVentilatorsByRequestedTime = (2/100) * infectionsByRequestedTime
    let casesForVentilatorsByRequestedTimeSevere = (2/100) * infectionsByRequestedTimeSevere

    let dollarsInFlight = (infectionsByRequestedTime * data.region.avgDailyIncomePopulation) * data.region.avgDailyIncomeInUSD * data.timeToElapse
    let dollarsInFlightSevere = (infectionsByRequestedTimeSevere * data.region.avgDailyIncomePopulation) * data.region.avgDailyIncomeInUSD * data.timeToElapse


    let impact = {currentlyInfected, infectionsByRequestedTime, hospitalBedsByRequestedTime, casesForICUByRequestedTime,
        casesForVentilatorsByRequestedTime, dollarsInFlight
    }
    let severeImpact = { currentlyinfected: severeInfection, infectionsByRequestedTime: infectionsByRequestedTimeSevere,
        hospitalBedsByRequestedTime, casesForICUByRequestedTime: casesForICUByRequestedTimeSevere, casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTimeSevere,
        dollarsInFlight: dollarsInFlightSevere

    }
};

export default covid19ImpactEstimator;
