import "../3-cards/cards.css";

function Cards() {
  return (
    <>
      <main className="flex">
        <section className="flex left-sec">
          <button className="active">All Laptops</button>
          <button>Lenovo</button>
          <button>ASUS</button>
          <button>DELL</button>
          <button>Apple</button>
        </section>

        <section className="right-sec ">
          <article className="card">
            <img className="" width={260} src="./rog-g16.jpg" alt="" />
            <div style={{ width: "225px" }} className="box ">
              <h1 className="title">ACER NITRO V 15</h1>
              <p className="sub-title">
                i9-13900H (14Core/20Threads/ 24M Cache/up to 5.4GHz), 16GB DDR5
                5600MHz RAM, 512GB SSD NVMe Gen4, 8GB Nvidia RTX4060, 15.6" FHD
                IPS 144Hz, Backlit
              </p>
              <button className="book-now-btn ">
                <a className="book-now-a" href="">
                  BOOK NOW
                </a>
              </button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Cards;
