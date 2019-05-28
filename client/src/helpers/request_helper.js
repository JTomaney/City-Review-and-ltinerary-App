const RequestHelper = function(url){
  this.url = url;
}

RequestHelper.prototype.get = function () {
  return fetch(this.url)
  .then(response => response.json())
}

RequestHelper.prototype.post = function (payload) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
};

RequestHelper.prototype.getRegion = function(region) {
  return fetch(`${this.url}/${region}`)
  .then(response => response.json())
}

// RequestHelper.prototype.patch = function (payload) {
//   return fetch(`${this.url}/${payload.objectID.value}`, {
//     method: 'PATCH',
//     body: JSON.stringify(payload),
//     headers: {'Content-Type': 'application/json'}
//   })
//   .then(response => response.json())
// }


module.exports = RequestHelper;
