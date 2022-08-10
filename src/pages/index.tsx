import 'react-circular-progressbar/dist/styles.css';
import ProgressCircle from '~/components/containers/ProgressCircle';

function Home() {
  const [percentage, setPercentage] = useState(20);

  return (
    <div className="min-h-screen bg-bg-dark flex-(center col)">
      <ProgressCircle percentage={percentage} />
      <button
        type="button"
        onClick={() => {
          setPercentage((v) => v + 10);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Home;
