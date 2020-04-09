const covid19ImpactEstimator = (data) => {
  const currentlyInfected = data.reportedCases * 10;
  const severeInfection = data.reportedCases * 50;

  const infectionsByRequestedTime = currentlyInfected * (2 ** (data.timeToElapse / 3));
  const infectionsByRequestedTimeSevere = severeInfection * (2 ** (data.timeToElapse / 3));

  const infectionsByRequestedTimeInWeeks = currentlyInfected * (2 ** ((data.timeToElapse / 7) / 3));
  const infectionsByRequestedTimeSevereInWeeks = severeInfection
  * (2 ** ((data.timeToElapse / 7) / 3));

  const infectionsByRequestedTimeInMonths = currentlyInfected
  * (2 ** ((data.timeToElapse / 30) / 3));
  const infectionsByRequestedTimeSevereInMonths = severeInfection
  * (2 ** ((data.timeToElapse / 30) / 3));


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
    infectionsByRequestedTimeInWeeks,
    infectionsByRequestedTimeInMonths,
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
const weekEstimate = ()=>{
  const currentlyInfected = data.reportedCases * 10;
  const severeInfection = data.reportedCases * 50;


  const infectionsByRequestedTime = currentlyInfected * (2 ** ((data.timeToElapse / 7) / 3));
  const infectionsByRequestedTimeSevere = severeInfection
  * (2 ** ((data.timeToElapse / 7) / 3));

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
}

  const monthlyEstimator = ()=>{
    const currentlyInfected = data.reportedCases * 10;
    const severeInfection = data.reportedCases * 50;
  
    const infectionsByRequestedTime = currentlyInfected
    * (2 ** ((data.timeToElapse / 30) / 3));
    const infectionsByRequestedTimeSevere = severeInfection
    * (2 ** ((data.timeToElapse / 30) / 3));
  
  
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
  }
  
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
