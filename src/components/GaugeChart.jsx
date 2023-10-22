import { Gauge } from "./gauge";

const GaugeChart = () => {
  return (
    <div className="bg-white border-2 border-orange-500">
        <Gauge value={80} size="small" showValue={true} />
    </div>
  )
}

GaugeChart.propTypes = {}

export default GaugeChart