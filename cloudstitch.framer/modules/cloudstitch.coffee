exports.get = (user, app, callback) ->
  url = "https://api.cloudstitch.com/" + user + "/" + app
  request = new XMLHttpRequest()
  request.open('GET', url, true)

  request.onload = ->
    if request.status >= 200 and request.status < 400
      callback(JSON.parse(request.responseText))
    else
      callback(JSON.parse({error: true, message: 'Bad status response from the server: ' + request.status}))
  request.onerror = ->
    callback(JSON.parse({error: true, message: 'Error response from server'}))

  request.send()