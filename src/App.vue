<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
      <p>Use SASS to detect your background colors and other styles and apply them to your buttons for consistent global hovers and active states.</p>
  <a href="#" class="btn btn-green">Green Button</a>
  <a href="#" class="btn btn-blue">Blue Button</a>
  <a href="#" class="btn btn-yellow">Yellow Button</a>
  <a href="#" class="btn btn-red">Red Button</a>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@import url(https://fonts.googleapis.com/css?family=Poiret+One);

@mixin button-bg($bg) {
  background: $bg;
  &:hover {
    background:darken($bg,8%);
    transition: all 0.3s ease;
  }
  &:active {
    background:darken($bg,25%);
  } 
}

.btn {
 color:white;
 text-decoration:none;
 padding:5px 10px;
 border-radius:3px;
 font-family: 'Poiret One', cursive;
 font-size:2em;
}

.btn-green {
   @include button-bg(#2ecc71);
}

.btn-blue {
   @include button-bg(#3498db);
}

.btn-yellow{
   @include button-bg(#f1c40f);
}

.btn-red {
   @include button-bg(#e74c3c);
}

/*Other Stylez*/
.wrap {
  margin:0 auto;
  width:800px;
  text-align:center;
}

h1 {
  font-family: 'Poiret One', cursive;
  font-size:4em;
}


</style>
