import { Link, useLocation } from "react-router-dom";

function KanbasNavigation() {
	const links = [
		{
			name: 'Account', path: 'account', icon: 'fa fa-user-circle color-gray nav-avatar'
		}, {
			name: 'Dashboard', path: 'dashboard', icon: 'fa fa-tachometer'
		}, {
			name: 'Courses', path: 'courses', icon: 'fa fa-book'
		}, {
			name: 'Inbox', path: 'inbox', icon: 'fa fa-inbox'
		}, {
			name: 'Calender', path: 'calender', icon: 'fa fa-calendar-days'
		}, {
			name: 'History', path: 'history', icon: 'fa-regular fa-clock'
		}, {
			name: 'Studio', path: 'studio', icon: 'fa-solid fa-film'
		}, {
			name: 'Commons', path: 'commons', icon: 'fa fa-terminal'
		}, {
			name: 'Help', path: 'help', icon: 'fa fa-question-circle'
		}
	]
	const { pathname } = useLocation();

	return (
	<>
	<nav className="navbar navbar-light xs-nav d-md-none">

        <button className="navbar-toggler color-white mt-2 mb-2" data-toggle="collapse" data-target="#kanbas-navigation" >
            <i className="fa fa-bars" aria-hidden="true"></i>
        </button>

        <button className="navbar-toggler d-lg-none color-white pr-3" data-toggle="collapse" data-target="#secondary-navigation">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                 
        </button>

        <div className="collapse navbar-collapse dropdown-navbar" id="kanbas-navigation">
            <ul clss="navbar-nav" style={{"padding-left": 0}}>
				{
					links.map((link, index) => {
						return (
							<li key={index} className={pathname.includes(link.path) ? 'active' : ''}>
								<Link className="color-red" to={link.path}>
									<i className={`${link.icon} mr-3`} aria-hidden="true"></i>
									{link.name}
								</Link>
							</li>
						)
					})
				}
            </ul>
        </div>
  	</nav>

	<div className="sidebar d-none d-md-block">
		<ul>
			<li>
				<img src={require('../images/neu_logo.png')} style={{"max-width": "60px"}} alt="neu-logo" className="neu-logo"/>
			</li>
			{
				links.map((link, index) => {
					return (
						<li className={pathname.includes(link.path) ? 'active' : ''}>
							<Link to={link.path}>
							<i className={`${link.icon} mr-3`} aria-hidden="true"></i>
								{link.name}
							</Link>
						</li>
					)
				})
			}
		</ul>
  	</div>
	</>
)}

export default KanbasNavigation;