import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { recordVisit } from './utils/stats.js';
import adminRoutes from './routes/admin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('trust proxy', 1);
const PORT = process.env.PORT || 3001;

app.use(express.json());

// 방문자 기록
app.post('/api/visit', (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress;
  recordVisit(ip);
  res.json({ ok: true });
});

// 어드민 API
app.use('/api/admin', adminRoutes);

// 정적 파일 서빙
const distPath = path.join(__dirname, '../client/dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`DevKit server running on port ${PORT}`);
});
