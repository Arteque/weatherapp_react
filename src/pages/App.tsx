
function App() {

  return (
    <>
      <header className="p-[1rem]">
        <div className="container mx-auto flex justify-between items-center">
          <h1>
            <img src="/images/logo.svg" alt="Sun like image placed on the left and the word Weathernow on the right" />
          </h1>

          <form action="">
            <select name="units" id="units">
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
              <option value="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
            </select>
          </form>
        </div>
      </header>
    </>
  )
}

export default App
