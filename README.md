使用教程

使用 Node.js 来处理 Excel 文件的读写
先安装必要的 Node.js 包：
npm init -y
npm install express xlsx body-parser

使用方法：
确保 record.xlsx 文件存在且有正确的列头（邮箱、奖品）
运行服务器：node server.js
在浏览器中通过 http://localhost:3000 访问页面
每次抽奖后，数据会自动写入 Excel 文件。如果出现错误，会在控制台显示错误信息。
注意事项：
确保 Node.js 已安装
Excel 文件不能被其他程序占用
服务器需要有写入文件的权限
建议添加错误处理和用户反馈


windows从零开始：
1. 首先安装 Node.js：
访问 https://nodejs.org/
下载 LTS 版本（左边的按钮）
运行下载的安装程序
全部使用默认选项安装
重要： 安装完成后需要重启 PowerShell

2. 以管理员身份运行 PowerShell：
在 Windows 搜索中输入 "PowerShell"
右键点击 "Windows PowerShell"
选择 "以管理员身份运行"
修改执行策略，在新打开的 PowerShell 中输入：
   Set-ExecutionPolicy RemoteSigned
 当提示确认时，输入 "Y" 并回车

3. 验证 npm：
  npm -v

4. 现在关闭管理员 PowerShell

5. 重新在你的项目文件夹中打开普通的 PowerShell：
打开你的项目文件夹
右键运行“Powershell”
现在尝试运行：
   npm init -y
如果没有安装body-parser，运行：
  npm install body-parser

6. 运行：
     node server.js
   
7. 打开浏览器
访问 http://localhost:3000

8.测试抽奖功能
每次抽奖后，结果都会自动记录到 record.xlsx 文件中。

几点提醒：
每次要使用抽奖系统时，都需要先运行 node server.js
确保使用时 record.xlsx 文件没有被 Excel 或其他程序打开
可以随时查看 record.xlsx 文件确认数据是否正确记录
