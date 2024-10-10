import {
  CLSMetric,
  INPMetric,
  LCPMetric,
  onCLS,
  onINP,
  onLCP,
} from "web-vitals";

function logDelta({ name, id, delta }: CLSMetric | INPMetric | LCPMetric) {
  console.log(`${name} matching ID ${id} changed by ${delta}`);
}

onCLS(logDelta);
onINP(logDelta);
onLCP(logDelta);
