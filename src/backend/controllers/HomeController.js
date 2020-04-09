
/**
 * Show that user is connected properly to the server
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */

exports.gate = (req, res) => {
  if (res.statusCode === 200) {
    res.status(200).json({
      status: 'Ok',
      message: 'Connected to the API'
    });
  } else {
    res.status(404).json({
      status: 'bad',
      message: 'could not connect to API'
    });
  }
};
