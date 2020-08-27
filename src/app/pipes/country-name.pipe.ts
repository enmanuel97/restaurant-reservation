import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'countryName'
})
export class CountryNamePipe implements PipeTransform {
    transform(countryCode: string): string {
        let countryAvailable = [
            {
                code: 'AE',
                name: 'United Arab Emirates'
            },
            {
                code: 'AW',
                name: 'Aruba'
            },
            {
                code: 'CA',
                name: 'Canada'
            },
            {
                code: 'CH',
                name: 'Switzerland'
            },
            {
                code: 'CN',
                name: 'China'
            },
            {
                code: 'CR',
                name: 'Costa Rica'
            },
            {
                code: 'GP',
                name: 'Singapore'
            },
            {
                code: 'HK',
                name: 'Hong Kong'
            },
            {
                code: 'KN',
                name: 'Saint Kitts and Nevis'
            },
            {
                code: 'KY',
                name: 'Cayman Islands'
            },
            {
                code: 'MC',
                name: ''
            },
            {
                code: 'MO',
                name: 'Monaco'
            },
            {
                code: 'MX',
                name: 'Mexico'
            },
            {
                code: 'MY',
                name: 'Malaysia'
            },
            {
                code: 'PT',
                name: 'Portugal'
            },
            {
                code: 'SA',
                name: 'Saudi Arabia'
            },
            {
                code: 'SG',
                name: 'Singapore'
            },
            {
                code: 'SV',
                name: 'El Salvador'
            },
            {
                code: 'US',
                name: 'United States'
            },
            {
                code: 'VI',
                name: 'U.S. Virgin Islands'
            },
        ];
        let name = '';
        countryAvailable.forEach(e => {
            if(e.code === countryCode) {
                name = e.name;
            }
        });

        return name;
    }
}
