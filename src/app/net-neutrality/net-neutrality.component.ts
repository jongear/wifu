import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { UsMapModel } from '../d3/models';
import { StateTooltipModel } from './models/state-tooltip.model';
import { SenatorModel } from './models/senator.model';
import { RepresentativeModel } from './models/representative.model';

@Component({
    selector: 'app-net-neutrality',
    templateUrl: './net-neutrality.component.html',
    styleUrls: ['./net-neutrality.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class NetNeutralityComponent implements OnInit {

    usMap: UsMapModel = new UsMapModel();

    constructor() {
        this.hydrateMap();
    }

    ngOnInit() {
    }

    hydrateMap() {
        const states = this.usMap.states;

        this.generateState(states, new StateTooltipModel({
            stateName: 'Alaska',
            stateCode: 'AK',
            senators: [
                new SenatorModel({ name: 'Murkowski, Lisa', party: 'Republican', total: 66250 }),
                new SenatorModel({ name: 'Sullivan, Daniel', party: 'Republican', total: 10550 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Young, Don', party: 'Republican', district: '1st', total: 28650 }),
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Alabama',
            stateCode: 'AL',
            senators: [
                new SenatorModel({ name: 'Shelby, Richard', party: 'Republican', total: 27000 }),
                new SenatorModel({ name: 'Strange, Luther', party: 'Republican', total: 0 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Aderholt, Robert', party: 'Republican', district: '4th', total: 26500 }),
                new RepresentativeModel({ name: 'Byrne, Bradley', party: 'Republican', district: '1st', total: 17500 }),
                new RepresentativeModel({ name: 'Palmer, Gary', party: 'Republican', district: '6th', total: 2000 }),
                new RepresentativeModel({ name: 'Roby, Martha', party: 'Republican', district: '2nd', total: 332000 }),
                new RepresentativeModel({ name: 'Rogers, Mike', party: 'Republican', district: '3rd', total: 25000 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Arkansas',
            stateCode: 'AR',
            senators: [
                new SenatorModel({ name: 'Boozman, John', party: 'Republican', total: 56450 }),
                new SenatorModel({ name: 'Cotton, Tom', party: 'Republican', total: 70025 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Crawford, Eric', party: 'Republican', district: '1st', total: 9000 }),
                new RepresentativeModel({ name: 'Griffith, Tim', party: 'Republican', district: '2nd', total: 16915 }),
                new RepresentativeModel({ name: 'Westerman, Bruce', party: 'Republican', district: '4th', total: 11000 }),
                new RepresentativeModel({ name: 'Womack, Steve', party: 'Republican', district: '3rd', total: 15500 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Arizona',
            stateCode: 'AZ',
            senators: [
                new SenatorModel({ name: 'Flake, Jeff', party: 'Republican', total: 27955 }),
                new SenatorModel({ name: 'McCain, John', party: 'Republican', total: 84125 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Biggs, Andy', party: 'Republican', district: '5th', total: 5000 }),
                new RepresentativeModel({ name: 'Franks, Trent', party: 'Republican', district: '8th', total: 16500 }),
                new RepresentativeModel({ name: 'Gosar, Paul', party: 'Republican', district: '4th', total: 2000 }),
                new RepresentativeModel({ name: 'McSally, Martha', party: 'Republican', district: '2nd', total: 40500 }),
                new RepresentativeModel({ name: 'Schweikert, David', party: 'Republican', district: '6th', total: 4000 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'California',
            stateCode: 'CA',
            senators: [
            ],
            representatives: [
                new RepresentativeModel({ name: 'Cook, Paul', party: 'Republican', district: '8th', total: 15000 }),
                new RepresentativeModel({ name: 'Denham, Jeffrey', party: 'Republican', district: '10th', total: 47000 }),
                new RepresentativeModel({ name: 'Hunter, Duncan', party: 'Republican', district: '50th', total: 19000 }),
                new RepresentativeModel({ name: 'Issa, Darrell', party: 'Republican', district: '49th', total: 66275 }),
                new RepresentativeModel({ name: 'Knight, Steve', party: 'Republican', district: '25th', total: 32500 }),
                new RepresentativeModel({ name: 'LaMalfa, Doug', party: 'Republican', district: '1st', total: 5000 }),
                new RepresentativeModel({ name: 'McCarthy, Kevin', party: 'Republican', district: '23rd', total: 99100 }),
                new RepresentativeModel({ name: 'Nunes, Devin', party: 'Republican', district: '22nd', total: 37750 }),
                new RepresentativeModel({ name: 'Rohrabacher, Dana', party: 'Republican', district: '48th', total: 1350 }),
                new RepresentativeModel({ name: 'Royce, Edward', party: 'Republican', district: '39th', total: 14000 }),
                new RepresentativeModel({ name: 'Valadao, David', party: 'Republican', district: '21st', total: 37400 }),
                new RepresentativeModel({ name: 'Walters, Mimi', party: 'Republican', district: '45th', total: 47450 }),
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Colarado',
            stateCode: 'CO',
            senators: [
                new SenatorModel({ name: 'Gardner, Cory', party: 'Republican', total: 95023 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Buck, Ken', party: 'Republican', district: '4th', total: 15750 }),
                new RepresentativeModel({ name: 'Lamborn, Doug', party: 'Republican', district: '5th', total: 28400 }),
                new RepresentativeModel({ name: 'Tipton, Scott', party: 'Republican', district: '3rd', total: 23500 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Connecticut',
            stateCode: 'CT',
            senators: [ ],
            representatives: [ ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Delaware',
            stateCode: 'DE',
            senators: [ ],
            representatives: [ ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Florida',
            stateCode: 'FL',
            senators: [
                new SenatorModel({ name: 'Rubio, Marco', party: 'Republican', total: 75535 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Bilirakis, Gus', party: 'Republican', district: '12th', total: 55000 }),
                new RepresentativeModel({ name: 'Buchanan, Vern', party: 'Republican', district: '16th', total: 18900 }),
                new RepresentativeModel({ name: 'Curbelo, Carlos', party: 'Republican', district: '26th', total: 45700 }),
                new RepresentativeModel({ name: 'DeSantis, Ron', party: 'Republican', district: '6th', total: 21634 }),
                new RepresentativeModel({ name: 'Diaz-Balart, Mario', party: 'Republican', district: '25th', total: 26500 }),
                new RepresentativeModel({ name: 'Dunn, Neal', party: 'Republican', district: '2nd', total: 13750 }),
                new RepresentativeModel({ name: 'Gaetz, Matt', party: 'Republican', district: '1st', total: 7000 }),
                new RepresentativeModel({ name: 'Mast, Brian', party: 'Republican', district: '18th', total: 10500 }),
                new RepresentativeModel({ name: 'Posey, Bill', party: 'Republican', district: '8th', total: 3000 }),
                new RepresentativeModel({ name: 'Rooney, Laurence', party: 'Republican', district: '19th', total: 16625 }),
                new RepresentativeModel({ name: 'Rooney, Tom', party: 'Republican', district: '17th', total: 19000 }),
                new RepresentativeModel({ name: 'Ross, Dennis', party: 'Republican', district: '15th', total: 17000 }),
                new RepresentativeModel({ name: 'Rutherford, John', party: 'Republican', district: '4th', total: 6000 }),
                new RepresentativeModel({ name: 'Webster, Daniel', party: 'Republican', district: '11th', total: 2500 }),
                new RepresentativeModel({ name: 'Yoho, Ted', party: 'Republican', district: '3rd', total: 4000 })
            ]
        }));


    }

    generateState(states, stateTooltip) {
        const { html, total, stateCode } = stateTooltip.generate();
        states[stateTooltip.stateCode].tooltipHtml = html;
        states[stateTooltip.stateCode].total = total;
    }
}
