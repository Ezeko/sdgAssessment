const covid19ImpactEstimator = (data) => {
    let currentlyInfected = data.reportedCases * 10
    let severeInfection = data.reportedCases * 50

    let infectionsByRequestedTime = currentlyInfected * (2 ** (data.timeToElapse/3))
    let infectionsByRequestedTimeSevere = severeInfection * (2 ** (data.timeToElapse/3))

    let severeCasesByRequestedTime = (15/100) * infectionsByRequestedTime
    let severeCasesByRequestedTimeSevere = (15/100) * infectionsByRequestedTimeSevere

    let availableHospitalBeds = (35/100) * data.totalHospitalBeds

    let casesForICUByRequestedTime = (5/100) * infectionsByRequestedTime
    let casesForICUByRequestedTimeSevere = (5/100) * infectionsByRequestedTimeSevere

    let casesForVentilatorsByRequestedTime = (2/100) * infectionsByRequestedTime
    let casesForVentilatorsByRequestedTimeSevere = (2/100) * infectionsByRequestedTimeSevere

    let dollarsInFlight = (infectionsByRequestedTime * data.region.avgDailyIncomePopulation) * data.region.avgDailyIncomeInUSD * data.timeToElapse
    let dollarsInFlightSevere = (infectionsByRequestedTimeSevere * data.region.avgDailyIncomePopulation) * data.region.avgDailyIncomeInUSD * data.timeToElapse


    let impact = {currentlyInfected, infectionsByRequestedTime, hospitalBedsByRequestedTime: availableHospitalBeds - severeCasesByRequestedTime, severeCasesByRequestedTime,
        casesForICUByRequestedTime,
        casesForVentilatorsByRequestedTime, dollarsInFlight
    }
    let severeImpact = { currentlyinfected: severeInfection, infectionsByRequestedTime: infectionsByRequestedTimeSevere,
        hospitalBedsByRequestedTime: availableHospitalBeds - severeCasesByRequestedTimeSevere,severeCasesByRequestedTime: severeCasesByRequestedTimeSevere,
        casesForICUByRequestedTime: casesForICUByRequestedTimeSevere, casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTimeSevere,
        dollarsInFlight: dollarsInFlightSevere

    }
    let output
    return output = {data, impact, severeImpact}
};

/*const data = {
    region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
}

console. log(covid19ImpactEstimator(data))*/

export default covid19ImpactEstimator;
