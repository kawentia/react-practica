import React from 'react';
import './Desktop.css';
import { Link } from 'react-router-dom';


const Desktop: React.FC = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <ul className="navbar-list">
            <li>
              <Link to="/Desktop">
                <img className="icon" src="../../img/icon.png" alt="icon" />
                <p className="navbar-list__item">Ел. щоденник</p>
              </Link>
            </li>
            <li>
              <Link to="/Desktop">
                <p className="navbar-list__item">Вхід</p>
                <img className="user" src="../../img/user.png" alt="user" />
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <main className="main">
        <main className="main">
          <div className="container">
            <div className="card-entrance">
              <h2 className="card-entrance__title">Авторизація</h2>
              <div className="form-group"><input name="email" id="email" type="text" placeholder="Email" /></div>
              <div className="form-group"><input name="password" id="password" type="password" placeholder="Password" /></div>
              <div className="button"><button className="button-entrance">Увійти</button></div>
              <Link to='/Desktop1'><p className="registration">Регістрація</p></Link>
            </div>
          </div>
        </main>
      </main>
    </div>



  );
};

export default Desktop;