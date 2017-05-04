var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Đây là app của VuDz</p>
      <p>Một vài tool sử dụng</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> Javascript framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> sử dụng để tìm nhiệt độ
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
