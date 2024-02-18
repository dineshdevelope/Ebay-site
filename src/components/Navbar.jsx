import { Link } from "react-router-dom";

Link;
const Navbar = () => {
  return (
    <div>
      <div className="p-5 bg-blue-700 ">
        <div className="flex justify-between">
          <div className="text-2xl font-semibold text-white">
            buy your favorite processor
          </div>
          <div>
            <ul className="flex  justify-end space-x-10 font-semibold ">
              <li className="bg-white p-2 rounded hover:bg-gray-800 hover:text-white">
                <a
                  href="https://github.com/dineshdevelope/Ebay-site"
                  target="blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
