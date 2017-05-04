var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass ({
  onSearch: function(e) {
    e.preventDefault();
    var location = this.refs.search.value;
    var endcodedLocation = encodeURIComponent(location);
    if (location.length > 0){
      this.refs.search.value = '';
      window.location.hash= "#/?location="+endcodedLocation;
    }
  },
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Ứng dụng thời tiết</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="search" placeholder="Tìm kiếm theo thành phố"></input>
              </li>
              <li>
                <input type="submit" className="button" value="Tìm"></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
