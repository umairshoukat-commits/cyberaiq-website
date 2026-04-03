uniform float uTime;
uniform float uPulse;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vNormal = normal;
  vPosition = position;

  float pulse = 1.0 + sin(uTime * 2.0 + uPulse) * 0.08;
  vec3 pos = position * pulse;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
