import "./OrderTable.css";

import box from "./box.png";
const OrderTable = ({ currentData }) => {
  return (
    <div className="order-table-container">
      <table className="order-table">
        <thead>
          <tr>
            <th>Channel</th>
            <th>Order No</th>
            <th>Order Date</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Value</th>
            <th>Status</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody className="tab">
          {currentData.map((order) => (
            <tr className="num" key={order.orderNo}>
              <td className="rec">
                <img src={box} alt="" />
              </td>
              <td className="tn">{order.ordernumber}</td>
              <td className="od">{order.orderDate}</td>
              <td>{order.city}</td>
              <td>{order.customerName}</td>
              <td>{order.orderValue}</td>
              <td className="sta">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
