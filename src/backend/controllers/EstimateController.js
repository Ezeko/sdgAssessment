const estimateCalculator = require('../../estimator');
/**
 * return estimated results
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */

exports.estimator = (req, res) => {
  const result = estimateCalculator(req.body);
  if (res.staus === 200) {
    return res.staus(200).json(result);
  }
  return res.staus(404).json({ message: 'An error occur' });
};
