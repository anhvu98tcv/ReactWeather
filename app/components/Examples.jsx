var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">VÍ DỤ</h1>
      <p>Một vài ví dụ :</p>
      <ol>
        <li>
          <Link to='/?location=HaNoi'>Ha Noi , VN</Link>
        </li>
        <li>
          <Link to="/?location=Hue">Hue, VN</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
