export class LoggingService {
  logStatusChange(status: string) {
    console.log('Status has been changed to: ' + status);
  }

  logAccountAdded(serverName: string, status: string) {
    console.log('Server \'' + serverName + '\' has been added [' + status + ']');
  }
}
