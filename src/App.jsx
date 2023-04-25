import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Product from "./components/Product";

function App() {
  return (
    <div className="container p-4">
      <h1 className="w-100 text-center my-4">Products</h1>
      <div className="row g-2 row-cols-4">
        <Product
          description={"Just Do It."}
          name={"Adios"}
          price={499.99}
          src={
            "https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-134695.jpg?w=1380&t=st=1676974470~exp=1676975070~hmac=82714c9b022657fecc1f8bb18243ea8fafc37d20990348cd1a7a9140c7bea048"
          }
        />
        <Product
          description={"Just Do It."}
          name={"Wans"}
          price={500.01}
          src={
            "https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-134695.jpg?w=1380&t=st=1676974470~exp=1676975070~hmac=82714c9b022657fecc1f8bb18243ea8fafc37d20990348cd1a7a9140c7bea048"
          }
        />
        <Product
          description={"Just Do It."}
          name={"Michaels"}
          price={999_999.95}
          src={
            "https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-134695.jpg?w=1380&t=st=1676974470~exp=1676975070~hmac=82714c9b022657fecc1f8bb18243ea8fafc37d20990348cd1a7a9140c7bea048"
          }
        />
        <Product
          description={"Just Do It."}
          name={"Timberlake"}
          price={2211.99}
          src={
            "https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-134695.jpg?w=1380&t=st=1676974470~exp=1676975070~hmac=82714c9b022657fecc1f8bb18243ea8fafc37d20990348cd1a7a9140c7bea048"
          }
        />
        <Product
          description={"Just Do It."}
          name={"James 12"}
          price={4770.50}
          src={
            "https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-134695.jpg?w=1380&t=st=1676974470~exp=1676975070~hmac=82714c9b022657fecc1f8bb18243ea8fafc37d20990348cd1a7a9140c7bea048"
          }
        />
        <Product
          description={"Just Do It."}
          name={"Hush Dogs"}
          price={50.99}
          src={
            "https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-134695.jpg?w=1380&t=st=1676974470~exp=1676975070~hmac=82714c9b022657fecc1f8bb18243ea8fafc37d20990348cd1a7a9140c7bea048"
          }
        />
        <Product
          description={"Just Do It."}
          name={"Yeezy Soft"}
          price={1099}
          src={
            "https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-134695.jpg?w=1380&t=st=1676974470~exp=1676975070~hmac=82714c9b022657fecc1f8bb18243ea8fafc37d20990348cd1a7a9140c7bea048"
          }
        />
        <Product
          description={"Just Do It."}
          name={"Sketchy"}
          price={407.99}
          src={
            "https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-134695.jpg?w=1380&t=st=1676974470~exp=1676975070~hmac=82714c9b022657fecc1f8bb18243ea8fafc37d20990348cd1a7a9140c7bea048"
          }
        />
      </div>
    </div>
  );
}

export default App;
