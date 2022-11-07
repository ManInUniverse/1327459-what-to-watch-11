import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page-content not-found-page">

      <div className="not-found-page__container">
        <h1 className="page-title">404. Page not found</h1>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light" href="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFoundPage;

