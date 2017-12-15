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

        this.generateState(states, new StateTooltipModel({
            stateName: 'Georgia',
            stateCode: 'GA',
            senators: [
                new SenatorModel({ name: 'Perdue, David', party: 'Republican', total: 37000 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Allen, Rick', party: 'Republican', district: '12th', total: 9500 }),
                new RepresentativeModel({ name: 'Carter, Buddy', party: 'Republican', district: '1st', total: 12250 }),
                new RepresentativeModel({ name: 'Collins, Doug', party: 'Republican', district: '9th', total: 42850 }),
                new RepresentativeModel({ name: 'Ferguson, Anderson', party: 'Republican', district: '3rd', total: 7000 }),
                new RepresentativeModel({ name: 'Graves, John', party: 'Republican', district: '14th', total: 34000 }),
                new RepresentativeModel({ name: 'Hice, Jody', party: 'Republican', district: '10th', total: 6000 }),
                new RepresentativeModel({ name: 'Loudermilk, Barry', party: 'Republican', district: '11th', total: 8000 }),
                new RepresentativeModel({ name: 'Scott, James', party: 'Republican', district: '8th', total: 6000 }),
                new RepresentativeModel({ name: 'Woodall, Rob', party: 'Republican', district: '7th', total: 9250 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Hawaii',
            stateCode: 'HI',
            senators: [ ],
            representatives: [ ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Iowa',
            stateCode: 'IA',
            senators: [
                new SenatorModel({ name: 'Ernst, Joni', party: 'Republican', total: 28200 }),
                new SenatorModel({ name: 'Grassley, Chuck', party: 'Republican', total: 135125 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Blum, Rodney', party: 'Republican', district: '1st', total: 5500 }),
                new RepresentativeModel({ name: 'King, Steve', party: 'Republican', district: '4th', total: 20500 }),
                new RepresentativeModel({ name: 'Young, David', party: 'Republican', district: '3rd', total: 41750 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Idaho',
            stateCode: 'ID',
            senators: [
                new SenatorModel({ name: 'Crapo, Mike', party: 'Republican', total: 11000 }),
                new SenatorModel({ name: 'Risch, Jim', party: 'Republican', total: 27000 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Labrador, Raul', party: 'Republican', district: '1st', total: 10000 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Illinois',
            stateCode: 'IL',
            senators: [ ],
            representatives: [
                new RepresentativeModel({ name: 'Bost, Mike', party: 'Republican', district: '12th', total: 29750 }),
                new RepresentativeModel({ name: 'Davis, Rodney', party: 'Republican', district: '13th', total: 49000 }),
                new RepresentativeModel({ name: 'Hultgreen, Randy', party: 'Republican', district: '14th', total: 10000 }),
                new RepresentativeModel({ name: 'Kinzinger, Adam', party: 'Republican', district: '16th', total: 75250 }),
                new RepresentativeModel({ name: 'LaHood, Darin', party: 'Republican', district: '18th', total: 15500 }),
                new RepresentativeModel({ name: 'Roskam, Peter', party: 'Republican', district: '6th', total: 33600 }),
                new RepresentativeModel({ name: 'Shimkus, John', party: 'Republican', district: '15th', total: 104425 }),
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Indiana',
            stateCode: 'IN',
            senators: [
                new SenatorModel({ name: 'Young, Todd', party: 'Republican', total: 28670 }),
            ],
            representatives: [
                new RepresentativeModel({ name: 'Banks, Jim', party: 'Republican', district: '3rd', total: 12100 }),
                new RepresentativeModel({ name: 'Brooks, Susan', party: 'Republican', district: '5th', total: 44300 }),
                new RepresentativeModel({ name: 'Bucshon, Larry', party: 'Republican', district: '8th', total: 33000 }),
                new RepresentativeModel({ name: 'Hollingsworth, Trey', party: 'Republican', district: '9th', total: 10000 }),
                new RepresentativeModel({ name: 'Messer, Luke', party: 'Republican', district: '6th', total: 18750 }),
                new RepresentativeModel({ name: 'Rokita, Toddr', party: 'Republican', district: '4th', total: 20200 }),
                new RepresentativeModel({ name: 'Walorski, Jackie', party: 'Republican', district: '2nd', total: 21250 }),
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Kansas',
            stateCode: 'KS',
            senators: [
                new SenatorModel({ name: 'Moran, Jerry', party: 'Republican', total: 130950 }),
                new SenatorModel({ name: 'Roberts, Pat', party: 'Republican', total: 100200 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Jenkins, Lynn', party: 'Republican', district: '2nd', total: 34750 }),
                new RepresentativeModel({ name: 'Marshall, Roger', party: 'Republican', district: '1st', total: 20500 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Kentucky',
            stateCode: 'KY',
            senators: [
                new SenatorModel({ name: 'McConnell, Mitch', party: 'Republican', total: 251110 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Barr, Andy', party: 'Republican', district: '6th', total: 28400 }),
                new RepresentativeModel({ name: 'Comer, James', party: 'Republican', district: '1st', total: 14750 }),
                new RepresentativeModel({ name: 'Guthrie, Steven', party: 'Republican', district: '2nd', total: 81500 }),
                new RepresentativeModel({ name: 'Massie, Thomas', party: 'Republican', district: '4th', total: 2750 }),
                new RepresentativeModel({ name: 'Rogers, Hal', party: 'Republican', district: '5th', total: 12500 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Louisiana',
            stateCode: 'LA',
            senators: [
                new SenatorModel({ name: 'Cassidy, Bill', party: 'Republican', total: 34909 }),
                new SenatorModel({ name: 'Kennedy, John', party: 'Republican', total: 1000 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Abraham, Ralph', party: 'Republican', district: '5th', total: 5750 }),
                new RepresentativeModel({ name: 'Higgins, Clay', party: 'Republican', district: '3rd', total: 300 }),
                new RepresentativeModel({ name: 'Scalise, Steve', party: 'Republican', district: '1st', total: 121750 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Massachusets',
            stateCode: 'MA',
            senators: [
            ],
            representatives: [

            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Maryland',
            stateCode: 'MD',
            senators: [
            ],
            representatives: [
                new RepresentativeModel({ name: 'Harriis, Andy', party: 'Republican', district: '1st', total: 3000 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Maine',
            stateCode: 'ME',
            senators: [
                new SenatorModel({ name: 'Collins, Susan', party: 'Republican', total: 57550 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Poliquin, Bruce', party: 'Republican', district: '2nd', total: 47500 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Michigan',
            stateCode: 'MI',
            senators: [

            ],
            representatives: [
                new RepresentativeModel({ name: 'Bergman, Jack', party: 'Republican', district: '1st', total: 21200 }),
                new RepresentativeModel({ name: 'Bishop, Mike', party: 'Republican', district: '8th', total: 40500 }),
                new RepresentativeModel({ name: 'Huizenga, Bill', party: 'Republican', district: '2nd', total: 7500 }),
                new RepresentativeModel({ name: 'Mitchell, Paul', party: 'Republican', district: '10th', total: 10000 }),
                new RepresentativeModel({ name: 'Moolenaar, John', party: 'Republican', district: '4th', total: 12500 }),
                new RepresentativeModel({ name: 'Trott, Dave', party: 'Republican', district: '11th', total: 12500 }),
                new RepresentativeModel({ name: 'Upton, Fred', party: 'Republican', district: '6th', total: 108250 }),
                new RepresentativeModel({ name: 'Walberg, Timothy', party: 'Republican', district: '7th', total: 38500 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Missouri',
            stateCode: 'MO',
            senators: [
                new SenatorModel({ name: 'Blunt, Roy', party: 'Republican', total: 185550 })
            ],
            representatives: [
                new RepresentativeModel({ name: 'Graves, Sam', party: 'Republican', district: '6th', total: 31000 }),
                new RepresentativeModel({ name: 'Hartzler, Vicki', party: 'Republican', district: '4th', total: 10500 }),
                new RepresentativeModel({ name: 'Long, Billy', party: 'Republican', district: '7th', total: 57250 }),
                new RepresentativeModel({ name: 'Luetkemeyer, Blaine', party: 'Republican', district: '3rd', total: 21000 }),
                new RepresentativeModel({ name: 'Smith, Jason', party: 'Republican', district: '8th', total: 47500 }),
                new RepresentativeModel({ name: 'Wagner, Ann', party: 'Republican', district: '2nd', total: 45750 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Minnesota',
            stateCode: 'MN',
            senators: [
            ],
            representatives: [
                new RepresentativeModel({ name: 'Emmer, Thomas', party: 'Republican', district: '6th', total: 18500 }),
                new RepresentativeModel({ name: 'Lewis, Jason', party: 'Republican', district: '2nd', total: 10500 }),
                new RepresentativeModel({ name: 'Paulsen, Erik', party: 'Republican', district: '3rd', total: 50500 })
            ]
        }));

        this.generateState(states, new StateTooltipModel({
            stateName: 'Mississippi',
            stateCode: 'MS',
            senators: [
                new SenatorModel({ name: 'Cochran, Thad', party: 'Republican', total: 123750 }),
                new SenatorModel({ name: 'Wicker, Roger', party: 'Republican', total: 151800 }),
            ],
            representatives: [
                new RepresentativeModel({ name: 'Harper, Gregg', party: 'Republican', district: '3rd', total: 33800 }),
                new RepresentativeModel({ name: 'Kelly, Trent', party: 'Republican', district: '1st', total: 3300 }),
                new RepresentativeModel({ name: 'Palazzo, Steven', party: 'Republican', district: '4th', total: 11100 })
            ]
        }));
    }

    generateState(states, stateTooltip) {
        const { html, total, stateCode } = stateTooltip.generate();
        states[stateTooltip.stateCode].tooltipHtml = html;
        states[stateTooltip.stateCode].total = total;
    }
}
