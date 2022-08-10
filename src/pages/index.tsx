import logo from '~/assets/images/logo.svg';
import '~/App.css';
import store from '~/store/store';

export default function App() {
  return (
    <div className="text-center">
      <header className="App-header">
        <img src={logo} className="App-image" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            className="App-button"
            onClick={store.increment}
          >
            count is: <O>{() => store.count}</O>
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p className="children:text-react-blue">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <span> | </span>
          <a
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          <span> | </span>
          <Link to="/about">
            About
          </Link>
        </p>
      </header>
    </div>
  );
}
