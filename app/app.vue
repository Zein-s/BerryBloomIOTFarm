<template>
  <NuxtPage />
</template>

<style>
.nav a {
  display: inline-flex;
  align-items: center;
  position: relative;
  padding: 4px 2px;
  transition: color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.nav a:hover,
.nav a:focus {
  color: #0f7a5a;
  background-color: rgba(15, 122, 90, 0.08);
}

.nav a:active {
  background-color: rgba(15, 122, 90, 0.12);
}

.nav a:focus-visible {
  outline: 2px solid rgba(15, 122, 90, 0.8);
  outline-offset: 3px;
}

.nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.2s ease;
}

.nav a:hover::after,
.nav a:focus::after {
  width: 100%;
}
</style>
