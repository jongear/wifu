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

        const stateTooltip = new StateTooltipModel();
        stateTooltip.stateName = 'Alaska';
        stateTooltip.senators = [
            new SenatorModel({ name: 'Murkowski, Lisa', party: 'Republican', total: 66250}),
            new SenatorModel({ name: 'Sullivan, Daniel', party: 'Republican', total: 10550})
        ];
        stateTooltip.representatives = [
            new RepresentativeModel({ name: 'Young, Don', party: 'Republican', total: 28650}),
        ];

        const { html, total } = stateTooltip.generate();
        states['AK'].tooltipHtml = html;
        states['AK'].total = total;
    }
}
