import React from 'react'

const logs =[
    '[2023-08-27 10:15:32] [error] [client 192.168.1.100] PHP Fatal error:  Uncaught Error: Call to undefined function mysql_connect() in /var/www/html/index.php:45',

    '[2023-08-27 14:20:12] [error] Application has crashed unexpectedly. Please contact support for assistance. Error code: 0x12345',

    '[2023-08-27 16:45:57] [error] SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry',

    '[2023-08-27 18:30:01] [error] Security Alert: Unauthorized access attempt detected from IP address 192.168.0.101',

    '[2023-08-27 09:55:23] [error] Connection timeout while trying to establish a connection to server 203.0.113.45 on port 8080',

    '[2023-08-27 12:05:44] [error] Kernel panic - not syncing: Attempted to kill init! Exit code: 0x800123',

   ' [2023-08-27 13:30:10] [error] Application response time exceeded threshold (5000ms) for API endpoint /api/v1/process_data',

    '[2023-08-27 20:10:55] [error] Disk space on partition /dev/sda1 is critically low (less than 5% free space remaining)',

    '[2023-08-27 11:40:22] [error] Authentication failed for user  from IP address 192.168.1.102',

    '[2023-08-27 15:15:39] [error] Failed to connect to external service  Error: Connection refused',
    '[Sun Aug 28 2023] [error] [client 192.168.1.100] ModSecurity: Access denied with code 403 (phase 2). Pattern match "sql_injection" at ARGS:username. [id "123456"] [msg "SQL Injection Attempt"] [severity "CRITICAL"]',
'  [Sun Aug 28 2023] [error] [client 192.168.1.104] ModSecurity: Access denied with code 403 (phase 2). Pattern match "xss_attack" at ARGS:comment. [id "567890"] [msg "XSS Attack Attempt"] [severity "CRITICAL"]',
  '[Sun Aug 28 2023] [error] [client 192.168.1.105] ModSecurity: Access denied with code 403 (phase 2). Pattern match "shell_attack" at ARGS:payload. [id "678901"] [msg "Shell Attack Attempt"] [severity "CRITICAL"]',
 
]

const attackLogs = () => {

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
    <h2>Attack Logs</h2>
    {logs.map((log, index) => (
      <div key={index}>{formatLog(log)}</div>
    ))}
  </div>
  )
}

export default attackLogs