require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"cloudstitch":[function(require,module,exports){
exports.get = function(user, app, callback) {
  var request, url;
  url = "https://api.cloudstitch.com/" + user + "/" + app;
  request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      return callback(JSON.parse(request.responseText));
    } else {
      return callback(JSON.parse({
        error: true,
        message: 'Bad status response from the server: ' + request.status
      }));
    }
  };
  request.onerror = function() {
    return callback(JSON.parse({
      error: true,
      message: 'Error response from server'
    }));
  };
  return request.send();
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZW9iL0NvZGUvZnJhbWVyLm1vZHVsZS5jbG91ZHN0aXRjaC9jbG91ZHN0aXRjaC5mcmFtZXIvbW9kdWxlcy9jbG91ZHN0aXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxPQUFPLENBQUMsR0FBUixHQUFjLFNBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxRQUFaO0FBQ1osTUFBQTtFQUFBLEdBQUEsR0FBTSw4QkFBQSxHQUFpQyxJQUFqQyxHQUF3QyxHQUF4QyxHQUE4QztFQUNwRCxPQUFBLEdBQWMsSUFBQSxjQUFBLENBQUE7RUFDZCxPQUFPLENBQUMsSUFBUixDQUFhLEtBQWIsRUFBb0IsR0FBcEIsRUFBeUIsSUFBekI7RUFFQSxPQUFPLENBQUMsTUFBUixHQUFpQixTQUFBO0lBQ2YsSUFBRyxPQUFPLENBQUMsTUFBUixJQUFrQixHQUFsQixJQUEwQixPQUFPLENBQUMsTUFBUixHQUFpQixHQUE5QzthQUNFLFFBQUEsQ0FBUyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQU8sQ0FBQyxZQUFuQixDQUFULEVBREY7S0FBQSxNQUFBO2FBR0UsUUFBQSxDQUFTLElBQUksQ0FBQyxLQUFMLENBQVc7UUFBQyxLQUFBLEVBQU8sSUFBUjtRQUFjLE9BQUEsRUFBUyx1Q0FBQSxHQUEwQyxPQUFPLENBQUMsTUFBekU7T0FBWCxDQUFULEVBSEY7O0VBRGU7RUFLakIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsU0FBQTtXQUNoQixRQUFBLENBQVMsSUFBSSxDQUFDLEtBQUwsQ0FBVztNQUFDLEtBQUEsRUFBTyxJQUFSO01BQWMsT0FBQSxFQUFTLDRCQUF2QjtLQUFYLENBQVQ7RUFEZ0I7U0FHbEIsT0FBTyxDQUFDLElBQVIsQ0FBQTtBQWJZIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydHMuZ2V0ID0gKHVzZXIsIGFwcCwgY2FsbGJhY2spIC0+XG4gIHVybCA9IFwiaHR0cHM6Ly9hcGkuY2xvdWRzdGl0Y2guY29tL1wiICsgdXNlciArIFwiL1wiICsgYXBwXG4gIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSlcblxuICByZXF1ZXN0Lm9ubG9hZCA9IC0+XG4gICAgaWYgcmVxdWVzdC5zdGF0dXMgPj0gMjAwIGFuZCByZXF1ZXN0LnN0YXR1cyA8IDQwMFxuICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCkpXG4gICAgZWxzZVxuICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZSh7ZXJyb3I6IHRydWUsIG1lc3NhZ2U6ICdCYWQgc3RhdHVzIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlcjogJyArIHJlcXVlc3Quc3RhdHVzfSkpXG4gIHJlcXVlc3Qub25lcnJvciA9IC0+XG4gICAgY2FsbGJhY2soSlNPTi5wYXJzZSh7ZXJyb3I6IHRydWUsIG1lc3NhZ2U6ICdFcnJvciByZXNwb25zZSBmcm9tIHNlcnZlcid9KSlcblxuICByZXF1ZXN0LnNlbmQoKSJdfQ==
