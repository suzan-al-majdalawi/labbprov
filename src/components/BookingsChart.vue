<template>
  <canvas ref="canvas" aria-label="Bokningar per månad" role="img"></canvas>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip
} from 'chart.js'

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip
)

const props = defineProps({
  months: { type: Array, required: true },
  values: { type: Array, required: true }
})

const canvas = ref(null)
let chart

const renderChart = () => {
  if (!canvas.value) return

  const labels = Array.isArray(props.months) ? props.months : []
  const values = Array.isArray(props.values) ? props.values : []

  chart?.destroy()

  chart = new Chart(canvas.value, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Bokningar',
          data: values,
          backgroundColor: '#e8642b'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      }
    }
  })
}

onMounted(renderChart)

watch(
  () => [props.months, props.values],
  renderChart,
  { deep: true }
)

onBeforeUnmount(() => chart?.destroy())
</script>