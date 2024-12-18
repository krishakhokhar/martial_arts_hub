import React, { useState } from 'react'
import Dashbordhed from '../../../comman/Dashbordhed'
import upimg from '../../../../image/home/6.png';
import upimg1 from '../../../../image/home/9.png';
import { Modal, Button } from "react-bootstrap";
import './MyInvoices.css'
import { IoHeartSharp } from 'react-icons/io5';
import { MdDownloadForOffline } from 'react-icons/md';

function MyInvoices() {
  const invoices =
    [
      { invoiceNo: 132, dateIssued: '01/08/24' },
    ];
  const athletes =
    [
      { name: 'Kiya John', discipline: 'Brazilian Jiu Jitsu' }
    ];
  const athletes2 =
    [
      { name: 'Harry Kim', discipline: '29 July 2024' }
    ];
  const data =
    [
      { name: "Brazilian Jiu Jitsu", price: "4.99", quantity: "01", total: "$4.99" },

    ];
  const transactions =
    [
      { paymentMethod: "Paypal", date: "29 July 24", amount: "4.99", id: "123456789" },
    ];
  const maskId = (id) => {
    const maskedLength = id.length - 3;
    return "*".repeat(maskedLength) + id.slice(-3);
  };
  const classData = [
    {

      title: 'Wrestling',
      classDate: '26 Aug, 2024',
      classType: 'Online',
      instructor: 'Mr. Smith Martin',
      view: 'View Invoice',
      img: upimg
    },
    {
      title: 'Boxing',
      classDate: '28 Aug, 2024',
      classType: 'Face To Face',
      instructor: 'Ms. Jane Doe',
      view: 'View Invoice',
      img: upimg1
    },

  ];
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div>
      <Dashbordhed />
      <div className='upcomming2'>
        <div>
          {classData.map((item) => (
            <div key={item.id} className='invoiceflex'><div>
              <div className='invoiceflex2'>
                <div>
                  <img src={item.img} alt={item.title} className="umimg1" />
                </div>
                <div className="upcommingwre">
                  <h3>{item.title}</h3>
                  <p>
                    <span>Class Date:</span> {item.classDate}
                    <span> • Class type:</span> {item.classType}
                  </p>
                  <p>
                    <span>Instructor Name: </span>{item.instructor}
                  </p>
                </div>
              </div>
            </div>
              <div>
                <p className="jointoclassup joininvoice modelcont" onClick={openModal}> {item.view}</p>
                <Modal
                  show={showModal}
                  onHide={closeModal}
                  centered
                  dialogClassName="modal-custom"
                >
                  <Modal.Header closeButton>
                  </Modal.Header>
                  <Modal.Body className="modal-body-custom">
                    <div className='flexinvoice3'>
                      <div>
                        <h3 className='marstiolartinvoice'>martial arts hub.</h3>
                      </div>
                      <div className='invoiceno'>
                        {invoices.map((invoice, index) => (
                          <div className="invoiceno" key={index}>
                            <p>Invoice No.: {invoice.invoiceNo}</p>
                            <p>Date Issued: {invoice.dateIssued}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <hr className='hrin'></hr>
                    <div className='flexinvoice3'>
                      <div>
                        <p className='details'>Instructor Details</p>
                        {athletes.map((athlete, index) => (
                          <div key={index}>
                            <span style={{ fontSize: 'large' }}>{athlete.name}</span>
                            <p style={{ fontSize: 'large' }}>{athlete.discipline}</p>
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className='details'>Student Details</p>
                        {athletes2.map((athlete, index) => (
                          <div key={index}>
                            <span style={{ fontSize: 'large' }}>{athlete.name}</span>
                            <p style={{ fontSize: 'large' }}>{athlete.discipline}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div>
                        <table className='flexinvoice5'>
                          <thead>
                            <tr>
                              <th>Class Name</th>
                              <th>Price</th>
                              <th>Hour</th>
                              <th>Subtotal</th>
                            </tr>
                          </thead>
                          <hr className='hrin2'></hr>
                          <tbody>
                            {data.map((item, index) => (
                              <tr key={index}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.quantity}</td>
                                <td style={{ color: "#d73e3e" }}>{item.total}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className='table2'>
                      <table  className='invoicetable2'>
                        <thead>
                          <tr>
                            <th>Bank Info</th>
                            <th>Payment Date</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <hr className='hrin2'></hr>
                        <tbody>
                          {transactions.map((transaction, index) => (
                            <React.Fragment key={index}>
                              <tr>
                                <td>Paid via: {transaction.paymentMethod}</td>
                                <td>{transaction.date}</td>
                                <td style={{ color: "#d73e3e" }}>${transaction.amount}</td>
                              </tr>
                              <tr>
                                <td>ID: {maskId(transaction.id)}</td>
                              </tr>
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                      <hr className='hrin2'></hr>
                      <div className='foterend'>
                        <div>
                          <span className='thku'><IoHeartSharp className='thnkyu' /> Thank You!</span>
                        </div>
                        <div>
                          <button className='invoicedwonloadbtn'><MdDownloadForOffline className='dwnladin' /> Download Invoice</button>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyInvoices