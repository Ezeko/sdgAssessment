let time;
const covid19ImpactEstimator = (data) => {
  const currentlyInfected = data.reportedCases * 10;
  const severeInfection = data.reportedCases * 50;
  //convert time to days
  if (data.periodType == 'years'){
    time = data.timeToElapse / 365
  }
  else if (data.periodType == 'months'){
    time = data.timeToElapse / 30
  }
  else if (data.periodType == 'weeks'){
    time = data.timeToElapse / 7
  }
  else{
    time = data.timeToElapse
  }
  const infectionsByRequestedTime = currentlyInfected * (2 ** (time / 3));
  const infectionsByRequestedTimeSevere = severeInfection * (2 ** (time / 3));

  const severeCasesByRequestedTime = (15 / 100) * infectionsByRequestedTime;
  const severeCasesByRequestedTimeSevere = (15 / 100) * infectionsByRequestedTimeSevere;

  const availableHospitalBeds = (35 / 100) * data.totalHospitalBeds;

  const casesForICUByRequestedTime = (5 / 100) * infectionsByRequestedTime;
  const casesForICUByRequestedTimeSevere = (5 / 100) * infectionsByRequestedTimeSevere;

  const casesForVentilatorsByRequestedTime = (2 / 100) * infectionsByRequestedTime;
  const casesForVentilatorsByRequestedTimeSevere = (2 / 100) * infectionsByRequestedTimeSevere;

  const dollarsInFlight = (infectionsByRequestedTime * data.region.avgDailyIncomePopulation)
  * data.region.avgDailyIncomeInUSD * data.timeToElapse;
  const dollarsInFlightSevere = (infectionsByRequestedTimeSevere
    * data.region.avgDailyIncomePopulation)
    * data.region.avgDailyIncomeInUSD * data.timeToElapse;


  const impact = {
    currentlyInfected,
    infectionsByRequestedTime,
    hospitalBedsByRequestedTime: availableHospitalBeds - severeCasesByRequestedTime,
    severeCasesByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
  const severeImpact = {
    currentlyinfected: severeInfection,
    infectionsByRequestedTime: infectionsByRequestedTimeSevere,
    hospitalBedsByRequestedTime: availableHospitalBeds - severeCasesByRequestedTimeSevere,
    severeCasesByRequestedTime: severeCasesByRequestedTimeSevere,
    casesForICUByRequestedTime: casesForICUByRequestedTimeSevere,
    casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTimeSevere,
    dollarsInFlight: dollarsInFlightSevere
  };
  const output = {
    data, impact, severeImpact
  };
  return output;
};

/*
const data = {
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

console. log(covid19ImpactEstimator(data))
*/

export default covid19ImpactEstimator;
