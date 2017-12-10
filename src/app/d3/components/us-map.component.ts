import * as d3 from 'd3';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { StateModel, UsMapModel } from '../models';

@Component({
    selector: 'app-us-map',
    template: `
        <div class="statesvg-tooltip"></div>
        <svg width="960" height="600" class="statesvg"></svg>
    `,
    encapsulation: ViewEncapsulation.None
})
export class UsMapComponent implements OnInit {
    svgSelector = '.statesvg';
    svgTooltipSelector = '.statesvg-tooltip';
    @Input() usMap: UsMapModel;

    constructor() {
    }

    ngOnInit() {
        const _this = this;

        const mouseOver = (state) => {
            d3.select(_this.svgTooltipSelector).transition().duration(200).style('opacity', .9);

            d3.select(_this.svgTooltipSelector).html(state.tooltipHtml)
                .style('left', (d3.event.pageX) + 'px')
                .style('top', (d3.event.pageY - 28) + 'px');
        };

        const mouseOut = () => {
            d3.select(_this.svgTooltipSelector).transition().duration(500).style('opacity', 0);
        };


        const states = [];
        Object.keys(_this.usMap.states).forEach(function(key) {
            states.push( _this.usMap.states[key]);
        });

        d3.select(_this.svgSelector).selectAll('.state')
            .data(states).enter().append('path').attr('class', 'state').attr('d', state => state.shape)
            .style('fill', state => _this.usMap.states[state.id].color)
            .on('mouseover', mouseOver).on('mouseout', mouseOut);

        d3.select(self.frameElement).style('height', '600px');
    }
}
