const estimateCalculator = require('../../src/estimator');
/**
 * return estimated results
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */

exports.estimator = (req, res) => {
  console.log((req.body));
  const result = estimateCalculator(req.body);
  console.log(`estimate result ${result}`);
  if (result) {
    return res.status(200).json(result);
  }
  return res.status(404).json({ message: 'An error occur' });
};


exports.estimateInXml = (req, res) => {
  const result = estimateCalculator(req.body);
  function OBJtoXML(obj) {
    let xml = '';
    for (const prop in obj) {
      xml += obj[prop] instanceof Array ? '' : `<${prop}>`;
      if (obj[prop] instanceof Array) {
        for (const array in obj[prop]) {
          xml += `<${prop}>`;
          xml += OBJtoXML(new Object(obj[prop][array]));
          xml += `</${prop}>`;
        }
      } else if (typeof obj[prop] === 'object') {
        xml += OBJtoXML(new Object(obj[prop]));
      } else {
        xml += obj[prop];
      }
      xml += obj[prop] instanceof Array ? '' : `</${prop}>`;
    }
    xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml;
  }

  if (res.staus === 200) {
    res.contentType('application/xml');
    res.sendFile(OBJtoXML(result));
  } else {
    res.status(404);
    res.contentType('application/xml');
    res.sendFile(OBJtoXML({ message: 'An error occur' }));
  }
};
