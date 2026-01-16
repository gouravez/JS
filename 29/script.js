// Promisification

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      });
    });
  };
}

// Without Promise
function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(error);

  document.head.appendChild(script);
}

const loadScriptNew = promisify(loadScript);
console.log(loadScriptNew);

// loadScript("script.js", (err, script) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Script loaded");
//   }
// });


// loadScriptNew