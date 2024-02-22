import OrderTable from "./OrderTable";
import "./Orders.css";
import box from "./box.png";

const Orders = () => {
  const currentData = [
    {
      Squre: <img src={box} alt="" />,
      ordernumber: "#TKN2024012511",
      orderDate: "2024-01-25",
      city: "Bengaluru",
      customerName: "Pavan",
      orderValue: "1000",
      status: "Pending",
    },
    {
      ordernumber: "#TKN2022122221",
      orderDate: "2023-12-22",
      city: "Mangalore",
      customerName: "Shantha Kumar",
      orderValue: "500",
      status: "Cancelled",
    },
    {
      ordernumber: "#TKN2023042323",
      orderDate: "2023-04-23",
      city: "Bengaluru",
      customerName: "Rakesh",
      orderValue: "2000",
      status: "Done",
    },
  ];
  return (
    <div>
      <> Orders</>
      <div className="ord">
        <OrderTable currentData={currentData} />
      </div>
    </div>
  );
};
export default Orders;
