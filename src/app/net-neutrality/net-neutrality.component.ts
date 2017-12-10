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

        let stateTooltip = new StateTooltipModel({
            stateName: 'Alaska',
            stateCode: 'AK',
            senators: [
                new SenatorModel({ name: 'Murkowski, Lisa', party: 'Republican', total: 66250 }),
                new SenatorModel({ name: 'Sullivan, Daniel', party: 'Republican', total: 10550 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Young, Don', party: 'Republican', district: '1st', total: 28650 }),
            ]
        });
        this.generateState(states, stateTooltip);

        stateTooltip = new StateTooltipModel({
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
        });
        this.generateState(states, stateTooltip);
    }

    generateState(states, stateTooltip) {
        const { html, total, stateCode } = stateTooltip.generate();
        states[stateTooltip.stateCode].tooltipHtml = html;
        states[stateTooltip.stateCode].total = total;
    }
}
