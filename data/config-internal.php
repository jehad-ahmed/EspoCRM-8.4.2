<?php
return [
  'database' => [
    'host' => 'localhost',
    'port' => '',
    'charset' => NULL,
    'dbname' => 'EspoCRM',
    'user' => 'root',
    'password' => 'root',
    'platform' => 'Mysql'
  ],
  'smtpPassword' => '',
  'logger' => [
    'path' => 'data/logs/espo.log',
    'level' => 'WARNING',
    'rotation' => true,
    'maxFileNumber' => 30,
    'printTrace' => false,
    'databaseHandler' => false
  ],
  'restrictedMode' => false,
  'cleanupAppLog' => true,
  'cleanupAppLogPeriod' => '30 days',
  'webSocketMessager' => 'ZeroMQ',
  'clientSecurityHeadersDisabled' => false,
  'clientCspDisabled' => false,
  'clientCspScriptSourceList' => [
    0 => 'https://maps.googleapis.com'
  ],
  'adminUpgradeDisabled' => false,
  'isInstalled' => true,
  'microtimeInternal' => 1730118155.2877070903778076171875,
  'passwordSalt' => '51555f786c268abd',
  'cryptKey' => 'e5191c1cbc36e28587263153f6a87782',
  'hashSecretKey' => 'cf5fc25341dd145f362ff2a3380449e2',
  'actualDatabaseType' => 'mysql',
  'actualDatabaseVersion' => '5.7.24',
  'instanceId' => 'edbbd4af-1ecc-4253-8ae2-eed20cae1cae'
];
