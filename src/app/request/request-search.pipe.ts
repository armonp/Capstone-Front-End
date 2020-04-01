import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request';

@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests: Request[], searchCriteria: string=""): Request[] {
    if (searchCriteria ="") return requests;
    searchCriteria = searchCriteria.toLowerCase();
    let selReqs: Request[] = [];
    
    for(let r of requests ) {
      if (r.description.toLowerCase().includes(searchCriteria) || 
        r.justification.toLowerCase().includes(searchCriteria) ||
        (r.rejectionReason != null && r.rejectionReason.toLowerCase().includes(searchCriteria)) ||
        r.deliveryMode.toLowerCase().includes(searchCriteria) ||
        r.status.toLowerCase().includes(searchCriteria)||
        r.total.toString().toLowerCase().includes(searchCriteria) ||
        r.user.username.toLowerCase().includes(searchCriteria) ||
        r.user.firstname.toLowerCase().includes(searchCriteria) ||
        r.user.lastname.toLowerCase().includes(searchCriteria)) 
          selReqs.push(r);
    }
    return selReqs;
  }
}