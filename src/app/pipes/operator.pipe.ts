import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operator'
})
export class OperatorPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let operator = 'Unknown';
    switch (value) {
      case 'AR': {
          operator = 'Balfour Beatty Rail Ltd.';
          break;
      }
      case 'NT': {
          operator = 'Northern';
          break;
      }
      case 'AW': {
          operator = 'Transport for Wales';
          break;
      }
      case 'CC': {
          operator = 'c2c';
          break;
      }
      case 'CS': {
          operator = 'Caledonian Sleeper';
          break;
      }
      case 'CH': {
          operator = 'Chiltern Railway';
          break;
      }
      case 'XC': {
          operator = 'CrossCountry';
          break;
      }
      case 'ZZ': {
          operator = 'Devon and Cornwall Railways';
          break;
      }
      case 'EM': {
          operator = 'East Midlands Trains';
          break;
      }
      case 'ES': {
          operator = 'Eurostar';
          break;
      }
      case 'FC': {
          operator = 'First Capital Connect (defunct)';
          break;
      }
      case 'HT': {
          operator = 'First Hull Trains';
          break;
      }
      case 'GX': {
          operator = 'Gatwick Express';
          break;
      }
      case 'ZZ': {
          operator = 'GB Railfreight';
          break;
      }
      case 'GN': {
          operator = 'Great Northern';
          break;
      }
      case 'TL': {
          operator = 'Thameslink';
          break;
      }
      case 'GC': {
          operator = 'Grand Central';
          break;
      }
      case 'LN': {
          operator = 'Great North Western Railway';
          break;
      }
      case 'GW': {
          operator = 'Great Western Railway';
          break;
      }
      case 'LE': {
          operator = 'Greater Anglia';
          break;
      }
      case 'HC': {
          operator = 'Heathrow Connect';
          break;
      }
      case 'HX': {
          operator = 'Heathrow Express';
          break;
      }
      case 'IL': {
          operator = 'Island Lines';
          break;
      }
      case 'LS': {
          operator = 'Locomotive Services';
          break;
      }
      case 'LM': {
          operator = 'London Midland';
          break;
      }
      case 'LO': {
          operator = 'London Overground';
          break;
      }
      case 'LT': {
          operator = 'LUL Bakerloo Line';
          break;
      }
      case 'LT': {
          operator = 'LUL District Line – Richmond';
          break;
      }
      case 'LT': {
          operator = 'LUL District Line – Wimbledon';
          break;
      }
      case 'ME': {
          operator = 'Merseyrail';
          break;
      }
      case 'LR': {
          operator = 'Network Rail (On-Track Machines)';
          break;
      }
      case 'TW': {
          operator = 'Nexus (Tyne & Wear Metro)';
          break;
      }
      case 'NY': {
          operator = 'North Yorkshire Moors Railway';
          break;
      }
      case 'SR': {
          operator = 'ScotRail';
          break;
      }
      case 'SW': {
          operator = 'South Western Railway';
          break;
      }
      case 'SJ': {
          operator = 'South Yorkshire Supertram';
          break;
      }
      case 'SE': {
          operator = 'Southeastern';
          break;
      }
      case 'SN': {
          operator = 'Southern';
          break;
      }
      case 'SP': {
          operator = 'Swanage Railway';
          break;
      }
      case 'XR': {
          operator = 'TfL Rail';
          break;
      }
      case 'TP': {
          operator = 'TransPennine Express';
          break;
      }
      case 'VT': {
          operator = 'Virgin Trains';
          break;
      }
      case 'GR': {
          operator = 'London North Eastern Railway';
          break;
      }
      case 'WR': {
          operator = 'West Coast Railway Co.';
          break;
      }
      default: {
          operator = 'Unknown Operator';
          break;
      }
    }
    return operator;
  }

}
