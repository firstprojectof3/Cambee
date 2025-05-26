const express = require('express');
const dotenv = require('dotenv');
const OpenAI = require('openai'); // ← 여기가 달라짐

dotenv.config();

const app = express();
app.use(express.json());

// OpenAI 설정 (new 키워드 없이 직접 인스턴스 생성)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 라우터
app.get('/', (req, res) => {
  res.send('서버 실행 중!');
});

app.post('/ask', async (req, res) => {
  const { question } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: question }],
    });

    const answer = completion.choices[0].message.content;
    res.json({ answer });
  } catch (error) {
    console.error("OpenAI 오류:", error.message);
    res.status(500).json({ error: 'OpenAI 요청 실패' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 에서 서버 실행 중`);
});

console.log("API KEY 확인:", process.env.OPENAI_API_KEY);
// API 키가 제대로 설정되었는지 확인
