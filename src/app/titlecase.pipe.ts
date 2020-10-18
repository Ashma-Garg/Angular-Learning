
import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
    name:'summary'
})
export class TitleCasePi implements PipeTransform{
    transform(value:any, args?:any){
        if(!value)
            return null;
        var newval=value.split(" ");
        for(var i=0;i<newval.length;i++){
            if(i>0){
            if(newval[i].length<=3){
                newval[i]=newval[i].toLowerCase();
            }
        }
        }
        newval=newval.join(" ");
        return newval;
    }
}