import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { colorsPresets } from '~/components/containers/ProgressCircle/data';

interface ProgressCircleProps {
  percentage: number,
}

function ProgressCircle(props: ProgressCircleProps) {
  const colors = props.percentage > 100
    ? colorsPresets.overflow
    : colorsPresets.default;

  return (
    <div>
      <CircularProgressbar
        value={props.percentage > 100 ? props.percentage - 100 : props.percentage}
        text={`${props.percentage}%`}
        circleRatio={0.75}
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          ...colors,
        })}
      />
    </div>
  );
}

export default ProgressCircle;
