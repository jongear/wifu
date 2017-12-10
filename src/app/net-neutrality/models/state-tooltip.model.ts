import { SenatorModel } from './senator.model';
import { RepresentativeModel } from './representative.model';

export class StateTooltipModel {
    senators: SenatorModel[];
    representatives: RepresentativeModel[];
    stateName: string;
    stateCode: string;
    
    public constructor(init?: Partial<StateTooltipModel>) {
        Object.assign(this, init);
    }

    generate() {
        const numberWithCommas = (x) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          };

        let senatorString = '';
        let total = 0;
        this.senators.forEach(s => {
            senatorString +=
                `<tr>
                    <td>${s.name}</td>
                    <td>${s.party}</td>
                    <td>$${numberWithCommas(s.total)}</td>
                </tr>`;
            total += s.total;
        });

        let representativeString = '';
        this.representatives.forEach(r => {
            representativeString +=
                `<tr>
                    <td>${r.name}</td>
                    <td>${r.party}</td>
                    <td>${r.district}</td>
                    <td>$${numberWithCommas(r.total)}</td>
                </tr>`;
            total += r.total;
        });

        return {
            html: `<h4>${this.stateName} - $${numberWithCommas(total)}</h4>
        <h3>Senators</h3>
        <table style="width: 400px">
            <thead>
                <tr>
                    <th>MEMBER</th>
                    <th>PARTY</th>
                    <th>TOTAL</th>
                </tr>
            </head>
            <tbody>${senatorString}</tobdy>
        </table>

        <h3>Representatives</h3>
        <table style="width: 400px">
            <thead>
                <tr>
                    <th>MEMBER</th>
                    <th>PARTY</th>
                    <th>DISTRICT</th>
                    <th>TOTAL</th>
                </tr>
            </head>
            <tbody>${representativeString}</tobdy>
        </table>
        `, total: total
        };
    }
}
