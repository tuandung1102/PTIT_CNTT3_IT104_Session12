import './Bai7.css'

export default function Bai7() {
  return (
    <div className="container">
      <header>Header</header>
      <nav>Navigation</nav>
      <aside className="menu">Menu</aside>
      <main>
        <div className="grid">
          {Array.from({ length: 16 }, (_, i) => (
            <div className="cart" key={i}>Cart</div>
          ))}
        </div>
      </main>
      <aside className="article">Article</aside>
    </div>
  )
}
