
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { Action } from '../../../../src/action';
import { ActionDropdown } from '../../../../src/action-dropdown';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'cards',
    templateUrl: 'cards.component.html',
    styleUrls: [
        './cards.component.scss',
    ]
})
export class CardsComponent implements OnInit {
    public navBar: any = {
        brand: {
            logo: '/assets/img/logo-white.png'
        }
    };
    public cardSimple = {
        title: 'Simple Card',
        subtitle: 'Waaaa subtitle',
        msg: `Venmo banjo semiotics, scenester hexagon beard schlitz` +
            `chic flannel coloring book portland kickstarter.`,
        actions: [
            new Action('Action 1'),
            new Action('Action 2')
        ],
        specialActions: [
            new Action('Action 1', null, null, null, 'btn-primary'),
            new Action('Action 2', null, null, null, 'btn-primary'),
        ],
        optionsLeft: [
            new Action(null, () => {
                console.log('Back');
            }, 'chevron-left')
        ],
        optionsRight: [
            new ActionDropdown(null,
                [
                    new Action('Action 1'),
                    new Action('Action 2')
                ]),
            new Action(null, () => {
                console.log('Filter');
            }, 'filter')
        ]
    };
    public cardImage = {
        img: 'https://s3.favim.com/610/150115/fireworks-heart-hipster-pastel-Favim.com-2386613.jpg',
        title: 'Card Image',
        subtitle: 'Waaaa subtitle',
        msg: `Venmo banjo semiotics, scenester hexagon beard schlit` +
        `shoreditch delectus organic shabby chic flannel coloring boo` +
        `portland kickstarter`,
        fab: new Action(null, () => {
            console.log('Fab Action');
        }, 'plus', null, 'btn-primary', 'mdi', 'md'),
        optionsRight: [
            new ActionDropdown(null,
                [
                    new Action('Action 1'),
                    new Action('Action 2')
                ]),
            new Action(null, () => {
                console.log('Filter');
            }, 'filter')
        ],
        optionsLeft: [
            new Action(null, () => {
                console.log('Back');
            }, 'chevron-left')
        ],
        actions: [
            new Action('Action 1'),
            new Action('Action 2'),
        ],
        footer: {
            justify: 'flex-end',
            alignment: 'center'
        }
    };
    constructor() {}

    public ngOnInit() {}
}