import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'substring'
})
export class SubstringPipe implements PipeTransform{
    transform(value:string,arg?:any){
        if(!value)
            return null
        return value.substr(0,20)+"...";
    }
}