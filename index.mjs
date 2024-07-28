import express from 'express';
import connectDB from './src/config/mongodbConfig.js';

import orderRoute from './src/routes/order.js';
import promotionRoute from './src/routes/promotion.js';
import serviceRoute from './src/routes/service.js';
import testRoute from './src/routes/test.js';

import ordercancelRoute from './src/routes/orderCancel.js';
import orderdoneRoute from './src/routes/orderDone.js';
import orderwaitRoute from './src/routes/orderWait.js';
import ordergoingRoute from './src/routes/oderGoing.js';

import messcusRoute from './src/routes/cusMess.js';

const app = express();
const port = 4001;

// Kết nối tới MongoDB
connectDB();

// Middleware để xử lý JSON body
app.use(express.json());

// Định tuyến
app.use('/api', orderRoute);
app.use('/api', promotionRoute);
app.use('/api', serviceRoute);
app.use('/api', testRoute);
app.use('/api', ordercancelRoute);
app.use('/api', orderdoneRoute);
app.use('/api', orderwaitRoute);
app.use('/api', ordergoingRoute);
app.use('/api', messcusRoute);
// Lắng nghe trên port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
