import { useAddress, useMetamask } from "@thirdweb-dev/react"

const App = () => {

	const address = useAddress();
	const connectWithMetamask = useMetamask();
	console.log("👋 Address:", address);

	if(!address) {
		return (
			<div className="landing">
				<h1>Bem-vindo(a) à DAO dos músicos de uma banda</h1>
				<button onClick={connectWithMetamask} className='btn-hero'>
					Conecte sua carteira
				</button>
			</div>
		)
	}
  return (
    <div className="landing">
      <h1>👀 Carteira conectada, e agora?!</h1>
    </div>
  )
}

export default App
