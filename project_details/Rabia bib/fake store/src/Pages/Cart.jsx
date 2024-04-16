import React from 'react'

function Cart(props) {

  let total = 0;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">image</th>
            <th scope="col">name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item, i) => {
            {
              total += item.price
            }
            return (
              <>
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td><img src={item.image} height="40"></img></td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                </tr>
              </>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td><h2 className='text-end'>Grand Total</h2></td>
            <td><h2>{total}</h2></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
export default Cart