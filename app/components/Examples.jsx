var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here is a few example locations to try out</p>
      <ol>
        <li>
          <Link to='/?locations=Philadenphia'>Philadenphia , PA</Link>
        </li>
        <li>
          <Link to="/?locations=Rio">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
