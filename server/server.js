const express = require('express');
const cors = require('cors');
const bodtParser = require('body-parser');
const mongoose = require('mongoose');
const PostRoutes = require('./routes/posts');

const app = express();

app.use(bodtParser.json({ limit: '30mb', extended: true }));
app.use(bodtParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', PostRoutes);

const CONNNECTION_URL = "mongodb+srv://sudoAdi:jaival123@cluster0.ypir2o3.mongodb.net/test";
const PORT = process.env.PORT || 3001;

mongoose.connect(CONNNECTION_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
	.catch((err) => (console.log(err)));
