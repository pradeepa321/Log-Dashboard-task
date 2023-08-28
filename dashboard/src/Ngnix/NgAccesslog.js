import React from 'react'

const logs = [
 ' 192.168.1.100 - - [28/Aug/2023:10:15:23 +0000] "GET /index.html HTTP/1.1" 200 1234 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"',
  '192.168.1.101 - - [28/Aug/2023:10:16:12 +0000] "POST /login HTTP/1.1" 302 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"',
  '192.168.1.102 - - [28/Aug/2023:10:17:45 +0000] "GET /images/logo.png HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"',
  '192.168.1.103 - - [28/Aug/2023:10:18:32 +0000] "GET /about.html HTTP/1.1" 200 9876 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"',
  '192.168.1.104 - - [28/Aug/2023:10:19:05 +0000] "GET /contact.html HTTP/1.1" 404 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"',
  '192.168.1.105 - - [28/Aug/2023:10:20:14 +0000] "GET /products HTTP/1.1" 301 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"',
  '192.168.1.106 - - [28/Aug/2023:10:21:30 +0000] "GET /products/category1/item1 HTTP/1.1" 200 5432 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"',
  '192.168.1.107 - - [28/Aug/2023:10:22:18 +0000] "GET /products/category2/item2 HTTP/1.1" 200 7890 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"',
  '192.168.1.108 - - [28/Aug/2023:10:23:47 +0000] "GET /products/category3/item3 HTTP/1.1" 200 6543 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"',
  '192.168.1.109 - - [28/Aug/2023:10:24:59 +0000] "GET /contact.html HTTP/1.1" 301 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"',
  
]

const NgAccesslog = () => {
    const timestamp = /\[\d{2}\/[A-Za-z]{3}\/\d{4}:\d{2}:\d{2}:\d{2}/;
    const statusCode = /[-+]\d{4}/;
    const number = /\b\d+\b|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
  
    const formatLog = (log) => {
      const parts = log.split(' ');
  
      return (
        <div className="log-entry">
          {parts.map((part, index) => {
            if (timestamp.test(part)) {
              return <span key={index} style={{ color: 'blue' }}>{part}</span>;
            } else if (statusCode.test(part)) {
              return <span key={index} style={{ color: 'green' }}>{part}</span>;
            } else if (number.test(part)) {
              return <span key={index} style={{ color: 'red' }}>{part}</span>;
            }
            return <span key={index}>{part}</span>;
          })}
        </div>
      );
    };
  return (
    <div className="Access">
    <h2>Access Logs</h2>
    {logs.map((log, index) => (
      <div key={index}>{formatLog(log)}</div>
    ))}
  </div>
  )
}

export default NgAccesslog