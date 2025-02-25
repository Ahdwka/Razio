import { useState } from "react";
import "./header.css";
function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="flex">
      <button
        className="icon-menu menu"
        onClick={() => {
          setShowModal(true);
        }}
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">laptops</a>
          </li>
          <li>
            <a href="">contact us</a>
          </li>
        </ul>
      </nav>

      <button className="mode flex">
        <span className="icon-moon-o"></span>{" "}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li className="border">
              <button
                className="icon-cancel"
                onClick={() => setShowModal(false)}
              />
            </li> 
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">laptops</a>
            </li>
            <li>
              <a href="">contact us</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
