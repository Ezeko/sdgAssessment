const dailyEstimator = (data) => {
  const currentlyInfected = data.reportedCases * 10;
  const severeInfection = data.reportedCases * 50;

  const infectionsByRequestedTime = currentlyInfected * (2 ** (data.timeToElapse / 3));
  const infectionsByRequestedTimeSevere = severeInfection * (2 ** (data.timeToElapse / 3));


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
  const dailyImpactEstimation = {
    data, impact, severeImpact
  };
  console.log(dailyImpactEstimation);
  return dailyImpactEstimation;
};

const weeklyEstimator = (data) => {
  const currentlyInfectedWeek = data.reportedCases * 10;
  const severeInfectionWeek = data.reportedCases * 50;


  const infectionsByRequestedTimeWeek = currentlyInfectedWeek * (2
  ** ((data.timeToElapse / 7) / 3));
  const infectionsByRequestedTimeSevereWeek = severeInfectionWeek
  * (2 ** ((data.timeToElapse / 7) / 3));

  const severeCasesByRequestedTimeWeek = (15 / 100) * infectionsByRequestedTimeWeek;
  const severeCasesByRequestedTimeSevereWeek = (15 / 100) * infectionsByRequestedTimeSevereWeek;

  const availableHospitalBedsWeek = (35 / 100) * data.totalHospitalBeds;

  const casesForICUByRequestedTimeWeek = (5 / 100) * infectionsByRequestedTimeWeek;
  const casesForICUByRequestedTimeSevereWeek = (5 / 100) * infectionsByRequestedTimeSevereWeek;

  const casesForVentilatorsByRequestedTimeWeek = (2 / 100) * infectionsByRequestedTimeWeek;
  const casesForVentilatorsByRequestedTimeSevereWeek = (2 / 100)
  * infectionsByRequestedTimeSevereWeek;

  const dollarsInFlightWeek = (infectionsByRequestedTimeWeek * data.region.avgDailyIncomePopulation)
  * data.region.avgDailyIncomeInUSD * data.timeToElapse;
  const dollarsInFlightSevereWeek = (infectionsByRequestedTimeSevereWeek
  * data.region.avgDailyIncomePopulation)
  * data.region.avgDailyIncomeInUSD * data.timeToElapse;


  const impactWeek = {
    currentlyInfectedWeek,
    infectionsByRequestedTimeWeek,
    hospitalBedsByRequestedTime: availableHospitalBedsWeek - severeCasesByRequestedTimeWeek,
    severeCasesByRequestedTimeWeek,
    casesForICUByRequestedTimeWeek,
    casesForVentilatorsByRequestedTimeWeek,
    dollarsInFlight: dollarsInFlightWeek
  };
  const severeImpactWeek = {
    currentlyinfected: severeInfectionWeek,
    infectionsByRequestedTime: infectionsByRequestedTimeSevereWeek,
    hospitalBedsByRequestedTime: availableHospitalBedsWeek - severeCasesByRequestedTimeSevereWeek,
    severeCasesByRequestedTime: severeCasesByRequestedTimeSevereWeek,
    casesForICUByRequestedTime: casesForICUByRequestedTimeSevereWeek,
    casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTimeSevereWeek,
    dollarsInFlight: dollarsInFlightSevereWeek
  };
  const weeklyImpactEstimation = {
    data, impactWeek, severeImpactWeek
  };
  console.log(weeklyImpactEstimation);
  return weeklyImpactEstimation;
};

const monthlyEstimator = (data) => {
  const currentlyInfectedMonth = data.reportedCases * 10;
  const severeInfectionMonth = data.reportedCases * 50;

  const infectionsByRequestedTimeMonth = currentlyInfectedMonth
  * (2 ** ((data.timeToElapse / 30) / 3));
  const infectionsByRequestedTimeSevereMonth = severeInfectionMonth
  * (2 ** ((data.timeToElapse / 30) / 3));


  const severeCasesByRequestedTimeMonth = (15 / 100) * infectionsByRequestedTimeMonth;
  const severeCasesByRequestedTimeSevereMonth = (15 / 100) * infectionsByRequestedTimeSevereMonth;

  const availableHospitalBedsMonth = (35 / 100) * data.totalHospitalBeds;

  const casesForICUByRequestedTimeMonth = (5 / 100) * infectionsByRequestedTimeMonth;
  const casesForICUByRequestedTimeSevereMonth = (5 / 100) * infectionsByRequestedTimeSevereMonth;

  const casesForVentilatorsByRequestedTimeMonth = (2 / 100) * infectionsByRequestedTimeMonth;
  const casesForVentilatorsByRequestedTimeSevereMonth = (2 / 100)
  * infectionsByRequestedTimeSevereMonth;

  const dollarsInFlightMonth = (infectionsByRequestedTimeMonth
  * data.region.avgDailyIncomePopulation)
  * data.region.avgDailyIncomeInUSD * data.timeToElapse;
  const dollarsInFlightSevereMonth = (infectionsByRequestedTimeSevereMonth
  * data.region.avgDailyIncomePopulation)
  * data.region.avgDailyIncomeInUSD * data.timeToElapse;


  const impact = {
    currentlyInfected: currentlyInfectedMonth,
    infectionsByRequestedTime: infectionsByRequestedTimeMonth,
    hospitalBedsByRequestedTime: availableHospitalBedsMonth - severeCasesByRequestedTimeMonth,
    severeCasesByRequestedTime: severeCasesByRequestedTimeMonth,
    casesForICUByRequestedTime: casesForICUByRequestedTimeMonth,
    casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTimeMonth,
    dollarsInFlight: dollarsInFlightMonth
  };
  const severeImpact = {
    currentlyinfected: severeInfectionMonth,
    infectionsByRequestedTime: infectionsByRequestedTimeSevereMonth,
    hospitalBedsByRequestedTime: availableHospitalBedsMonth - severeCasesByRequestedTimeSevereMonth,
    severeCasesByRequestedTime: severeCasesByRequestedTimeSevereMonth,
    casesForICUByRequestedTime: casesForICUByRequestedTimeSevereMonth,
    casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTimeSevereMonth,
    dollarsInFlight: dollarsInFlightSevereMonth
  };

  const monthlyImpactEstimation = {
    data, impact, severeImpact
  };
  // console.log(monthlyImpactEstimation);
  return monthlyImpactEstimation;
};


const covid19ImpactEstimator = (data) => {
  console.log((data));
  dailyEstimator(data);
  weeklyEstimator(data);
  monthlyEstimator(data);
};

/*
const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

// weeklyEstimator(data); monthlyEstimator(data);

console.log (covid19ImpactEstimator(data));
*/


export default covid19ImpactEstimator;
module.exports = covid19ImpactEstimator;
