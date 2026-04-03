uniform float uTime;
uniform vec3 uColor;
uniform float uPulse;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 viewDir = normalize(cameraPosition - vPosition);
  float rim = 1.0 - dot(normalize(vNormal), viewDir);
  rim = pow(rim, 2.5);

  float pulse = 0.6 + 0.4 * sin(uTime * 2.0 + uPulse);
  vec3 color = uColor * pulse;
  vec3 rimColor = uColor * 1.5 * rim;

  gl_FragColor = vec4(color + rimColor, 0.85);
}
