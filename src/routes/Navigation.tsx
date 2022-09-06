import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import {
  FormikAbstractation,
  FormikBasicPage,
  FormikComponentsPage,
  FormikYUPPage,
  RegisterPage,
  RegisterFormikPage,
  DynamicFormikForm
} from '../03-forms/pages';


import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/registerForms" activeClassName="nav-active" exact>Register Forms</NavLink>
            </li>
            <li>
              <NavLink to="/FormikBasicPage" activeClassName="nav-active" exact>Formik Basic Page/Form </NavLink>
            </li>
            <li>
              <NavLink to="/formikYUPPage" activeClassName="nav-active" exact>Formik YUP</NavLink>
            </li>
            <li>
              <NavLink to="/formikComponentsPage" activeClassName="nav-active" exact>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formikAbstractation" activeClassName="nav-active" exact>Formik Abstractation</NavLink>
            </li>
            <li>
              <NavLink to="/registerFormikForm" activeClassName="nav-active" exact>Register Formik Form</NavLink>
            </li>
            <li>
              <NavLink to="/dynamicFormikForm" activeClassName="nav-active" exact>Dynamic Formik Form</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/FormikBasicPage">
            <FormikBasicPage />
          </Route>
          <Route path="/formikYUPPage">
            <FormikYUPPage />
          </Route>
          <Route path="/registerForms">
            <RegisterPage />
          </Route>
          <Route path="/formikComponentsPage">
            <FormikComponentsPage />
          </Route>
          <Route path="/formikAbstractation">
            <FormikAbstractation />
          </Route>
          <Route path="/registerFormikForm">
            <RegisterFormikPage />
          </Route>
          <Route path="/dynamicFormikForm">
            <DynamicFormikForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}