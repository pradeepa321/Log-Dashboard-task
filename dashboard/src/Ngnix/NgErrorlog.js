import React from 'react'

const logs = [
'2023-08-27T18:00:00.123456Z 0 [Note] InnoDB: FTS optimize thread exiting.',

 '2023-08-27T18:00:01.234567Z 0 [Note] InnoDB: Starting shutdown...',

'2023-08-27T18:00:02.345678Z 0 [Note] InnoDB: Dumping buffer pool(s) to /var/lib/mysql/ib_buffer_pool',

'2023-08-27T18:00:03.456789Z 0 [Note] InnoDB: Buffer pool(s) dump completed at 210827 18:00:03',

' 2023-08-27T18:00:04.567890Z 0 [Note] InnoDB: Shutdown completed; log sequence number 1234567890',

' 2023-08-27T18:00:05.678901Z 0 [Note] MySQL (mysqld 8.0.27) has ended normally',

' 2023-08-27T18:00:06.789012Z 0 [Note] InnoDB: FTS optimize thread exiting.',

'2023-08-27T18:00:07.890123Z 0 [Note] InnoDB: Starting shutdown...',

' 2023-08-27T18:00:08.901234Z 0 [Note] InnoDB: Dumping buffer pool(s) to /var/lib/mysql/ib_buffer_pool',

 '2023-08-27T18:00:09.012345Z 0 [Note] InnoDB: Buffer pool(s) dump completed at 210827 18:00:09',
 '2023/08/28 10:15:23 [error] 1234#1234: *5678 open() "/var/www/html/missing-page.html" failed (2: No such file or directory)',
'2023/08/28 10:22:18 [error] 1234#1234: *5685 open() "/var/www/html/favicon.ico" failed (2: No such file or directory)',
'2023/08/28 10:23:47 [error] 1234#1234: *5686 script  not found or unable to stat',
'2023/08/28 10:24:59 [error] 1234#1234: *5687 access forbidden by rule, client: 192.168.1.100, server: example.com, request: "GET /private-data/ HTTP/1.1", host: "example.com"',
'2023/08/28 10:29:45 [error] 1234#1234: *5691 open() "/var/www/html/missing-image.png" failed (2: No such file or directory)',
'2023/08/28 10:33:07 [error] 1234#1234: *5694 directory index of "/var/www/html/private-directory/" is forbidden',
'2023/08/28 10:34:15 [error] 1234#1234: *5695 FastCGI sent in stderr: "PHP Notice:  Undefined variable: undefined_var in /var/www/html/script.php on line 30" while reading response header from upstream',
'2023/08/28 10:35:23 [error] 1234#1234: *5696 access forbidden by rule, client: 192.168.1.104, server: example.com, request: "GET /admin-panel/ HTTP/1.1", host: "example.com"',
]

const NgErrorlog = () => {
    const timestampRegex = /\[\d{2}\/[A-Za-z]{3}\/\d{4}:\d{2}:\d{2}:\d{2}/;
    const numberRegex = /\b\d+\b|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
  
    const formatLog = (log) => {
      const parts = log.split(' ');
  
      return (
        <div className="log-entry">
          {parts.map((part, index) => {
            if (timestampRegex.test(part)) {
              return <span key={index} style={{ color: 'blue' }}>{part}</span>;
            }
            else if (numberRegex.test(part)) {
              return <span key={index} style={{ color: 'red' }}>{part}</span>;
            }
            return <span key={index}>{part}</span>;
          })}
        </div>
      );
    };
  return (
    <div className="Access">
    <h2>Error Logs</h2>
    {logs.map((log, index) => (
      <div key={index}>{formatLog(log)}</div>
    ))}
  </div>
  )
}

export default NgErrorlog