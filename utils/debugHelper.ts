const urlParams = new URLSearchParams(window.location.search)
const activeDebugger: string | null = localStorage.getItem('debugger')

// This function prints a message to the console if the URL contains a
// `debug` parameter or if the `debugger` variable is set to true.
export const debugEcho = (key: string, message: any = '') => {
  if (urlParams.has('debug') || activeDebugger) {
    console.log(key, message)
  }
}
