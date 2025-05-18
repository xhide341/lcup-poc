<template>
  <div class="about-card">
    <h1>leadership</h1>
    <h2>university president</h2>
    <p>sister maria consolata, osa</p>
    <h2>vice presidents</h2>
    <ul>
      <li>dr. juan dela cruz - academic affairs</li>
      <li>dr. maria santos - administration</li>
      <li>mr. jose reyes - student services</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// no script needed for static content
</script>

<style scoped>
.about-card {
  max-width: 600px;
  margin: 40px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
  text-align: left;
}
h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #2a3a4b;
}
h2 {
  font-size: 1.2rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #3b4a5a;
}
ul {
  padding-left: 1.2em;
  margin: 0.5em 0;
}
li {
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.3em;
}
p {
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.5rem;
}
</style>
