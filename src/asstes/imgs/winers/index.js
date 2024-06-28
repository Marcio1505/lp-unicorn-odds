// avatars.js
function importAll(r) {
    return r.keys().map(r);
  }
  
  const avatars = importAll(require.context('./', false, /\.(jpeg|jpg|png)$/));
  
  export default avatars;
  