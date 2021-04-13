function sendResponse(res, err, data) {
  if(err) {
    badResponse(res, err, 404)

  } else if(!data) {
    badResponse(res, err, 204)

  } else {
    goodResponse(res, data);
  }
};

function badResponse(res, message, status) {
  res.status(status);
  res.json({
    succes : false,
    message : message
  })
};

function goodResponse(res, data) {
  res.status(200);
  res.json({
    succes : true,
    data : data
  })
}

module.exports.sendResponse = sendResponse;
module.exports.badResponse = badResponse;
module.exports.goodResponse = goodResponse;