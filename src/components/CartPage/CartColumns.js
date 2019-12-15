import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        {/* single column 1*/}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Products</p>
        </div>
        {/* End of Columns */}

        {/* single column 2 */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Name of Product</p>
        </div>
        {/* End of Columns */}

        {/* single column 3*/}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Price</p>
        </div>
        {/* End of Columns */}

        {/* single column 4*/}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Quantity</p>
        </div>
        {/* End of Columns */}

        {/* single column 5*/}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Remove</p>
        </div>
        {/* End of Columns */}

        {/* single column 6*/}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Total</p>
        </div>
        {/* End of Columns */}
      </div>
    </div>
  );
}
