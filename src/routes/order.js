// src/routes/support.js
import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.use(express.json()); 

router.get('/order', async (req, res) => {
  try {
    
    const completedOrders = await Order.find().lean();
    res.json(completedOrders);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});


router.post('/order', async (req, res) => {
  const { 
    Address, 
    Detail,
    ReceiverName,
    SDT,
    KL,
    SL,
    Width,
    Height,
    Length,
    Note,
    Code,
    Price,
    Status,
    driverID
  } = req.body; 

  if (!Address || !Detail || !ReceiverName || !SDT || !KL || !SL || !Width || !Height || !Length || !Note) {
    return res.status(400).json({ error: 'Dữ liệu không hợp lệ.' });
  }

  try {
    const newData = new Order({
      Address, 
      Detail,
      ReceiverName,
      SDT,
      KL,
      SL,
      Width,
      Height,
      Length,
      Note,
      Code,
      Price,
      Status,
      driverID
    });
    await newData.save();
    res.status(201).json({ message: 'Dữ liệu đã được thêm thành công!' });
  } catch (error) {
    console.error('Lỗi khi thêm dữ liệu:', error.message);
    res.status(500).json({ error: 'Lỗi khi thêm dữ liệu.' });
  }
});

export default router;
