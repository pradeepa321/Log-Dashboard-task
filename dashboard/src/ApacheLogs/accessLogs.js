import React from 'react'



const accessLogs = () => {
  const logs = [
    '192.168.2.20 - - [28/Jul/2006:10:27:10 -0300] "GET /cgi-bin/try/ HTTP/1.0" 200 3395',
    '192.168.2.20 - - [28/Jul/2006:10:27:10 -0300] "GET /cgi-bin/try/ HTTP/1.0" 200 3395',
    '192.168.2.20 - - [28/Jul/2006:10:27:10 -0300] "GET /cgi-bin/try/ HTTP/1.0" 200 3395',
    '127.0.0.1 - - [28/Jul/2006:10:22:04 -0300] "GET / HTTP/1.0" 200 2216',
    '192.168.1.1 - - [20/Aug/2023:12:45:36 -0300] "GET /index.html" 200 3542',
    '192.168.1.101 - - [12/Aug/2023:08:30:45 +0300] "GET /index.html" 200 3542',
    '192.168.1.102 - - [12/Aug/2023:08:31:15 +0300] "POST /login" 401 120',
    '192.168.1.103 - - [12/Aug/2023:08:32:05 +0300] "GET /about-us.html" 200 2350',
    '192.168.1.104 - - [12/Aug/2023:08:33:20 +0300] "GET /images/logo.png" 304 0',
    '192.168.1.105 - - [12/Aug/2023:08:34:12 +0300] "GET /products" 404 45',
   '192.168.1.106 - - [12/Aug/2023:08:35:30 +0300] "GET /contact.html" 200 1875',
   '192.168.1.107 - - [12/Aug/2023:08:36:50 +0300] "GET /images/banner.jpg" 200 4280',
    '192.168.1.108 - - [12/Aug/2023:08:37:18 +0300] "GET /faq.html" 200 1890',
    '192.168.1.109 - - [12/Aug/2023:08:38:09 +0300] "GET /products/123" 200 3856',
    '192.168.1.110 - - [12/Aug/2023:08:39:25 +0300] "GET /favicon.ico" 200 1247',
    '192.168.1.110 - - [12/Aug/2023:08:39:25 +0300] "GET /favicon.ico" 200 1247',
  ];

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

export default accessLogs