import { Gauge } from "./Gauge";

const GaugeChart = ({value}) => {
  return (
    <div className="bg-white border-2 border-orange-500">
        <Gauge value={value > 100 ? 100 : value} size="small" showValue={true} />
    </div>
  )
}

GaugeChart.propTypes = {}

export default GaugeChart