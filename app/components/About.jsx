var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Đây là app của VuDz</p>
      <p>Here some of the tool i used</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> This was the Javascript framework use
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> Use for search city and temperature
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
