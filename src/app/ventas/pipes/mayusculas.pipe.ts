import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'mayuscula'
})
export class MayusculasPipe implements PipeTransform {
    transform(valor: string, esMayuscula: boolean = true): string {
        return (esMayuscula) ? valor.toUpperCase() : valor.toLowerCase()
    }
}