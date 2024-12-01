const express = require('express');
const XLSX = require('xlsx');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// 服务静态文件
app.use(express.static(__dirname));

// 添加根路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 添加获取历史记录的路由
app.get('/history', (req, res) => {
    try {
        const filePath = path.join(__dirname, 'record.xlsx');
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        
        // 将工作表转换为 JSON
        const records = XLSX.utils.sheet_to_json(sheet);
        res.json(records);
    } catch (error) {
        console.error('Error reading Excel:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// 处理抽奖结果
app.post('/record', (req, res) => {
    const { email, prize } = req.body;
    
    try {
        const filePath = path.join(__dirname, 'record.xlsx');
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        
        // 获取当前日期和时间
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        
        // 将工作表转换为 JSON
        const records = XLSX.utils.sheet_to_json(sheet);
        
        // 添加新记录
        records.push({ 
            邮箱: email, 
            奖品: prize,
            日期: date,
            时间: time
        });
        
        // 将更新后的数据转换回工作表
        const newSheet = XLSX.utils.json_to_sheet(records);
        workbook.Sheets[sheetName] = newSheet;
        
        // 保存文件
        XLSX.writeFile(workbook, filePath);
        
        res.json({ success: true });
    } catch (error) {
        console.error('Error writing to Excel:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 