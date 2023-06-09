import React from 'react';
import axios from 'axios';
import './Gpay.css';

function Gpay(props) {
  const price = props.offer;

  const handleOpenRazorpay = async (data) => {
    const options = {
      key: 'rzp_test_ED1PrWcomjc9mw',
      amount: Number(data.order.amount) * 100,
      currency: data.order.currency,
      name: 'Acme Corp',
      description: 'Test Transaction',
      order_id: data.order.id,
      handler: function (order_id,razorpay_order_id, razorpay_payment_id, razorpay_signature) {
        console.log('Payment');
        console.log(response.razorpay_payment_id);
        console.log(response);
        axios
          .post('https://backendlecturebasket-production.up.railway.app/api/v1/payment/verify', {
            response: {
             response
            },
          })
          .then((res) => {
            console.log(res.data, 'Response');
            props.onSuccess();
          })
          .catch((err) => {
            console.log(err, 'Error');
          });
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePrice = async (amount) => {
    const data = { amount: amount };
    axios
      .post('https://backendlecturebasket-production.up.railway.app/api/v1/payment', data)
      .then((res) => {
        console.log(res.data, 'Response');
        handleOpenRazorpay(res.data);
      })
      .catch((err) => {
        console.log(err, 'Error');
      });
  };

  return (
    <button onClick={() => handlePrice(price)} className='btnz'>
      Pay now
    </button>
  );
}

export default Gpay;
