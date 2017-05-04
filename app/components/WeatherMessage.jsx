var React = require('react');

var WeatherMessage = ({temp, location}) => {

  return (
    <h3 className="text-center">Bây giờ là {temp} độ F ở {location}.</h3>
  )
};

module.exports = WeatherMessage;
